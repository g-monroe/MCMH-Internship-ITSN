Imports System.IO
Imports System.Net
Imports System.Net.Http
Imports System.Text.RegularExpressions
Public Class Uploader
    Implements IDisposable
    Private _client As HttpClient
    Private nCookies As CookieContainer
    Sub New(num As String, Cookies As CookieContainer)
        nCookies = Cookies
        Dim handler = New HttpClientHandler() With {
                .AllowAutoRedirect = False,
                .CookieContainer = Cookies,
               .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
            }

        _client = New HttpClient(handler)
        _client.BaseAddress = New Uri("https://helpdesk")
        _client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/CSIssue_View.asp?IssueNbr=" + num)
        _client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
        _client.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest")
        _client.DefaultRequestHeaders.Add("Host", "helpdesk")
        _client.DefaultRequestHeaders.Add("Origin", "http://helpdesk")
        _client.DefaultRequestHeaders.Add("Accept", "*/*")
        _client.DefaultRequestHeaders.Add("Accept-Encoding", "gzip, deflate")
    End Sub
    Public Async Function UploadFile(filePath As String, num As String, user As String) As Task(Of String)
        Try
            Dim form As New MultipartFormDataContent()

            Dim fBytes As Byte() = File.ReadAllBytes(filePath)
            Dim fName As String = Path.GetFileName(filePath)
            form.Add(New StringContent(num), """IssueNbr""")
            form.Add(New StringContent(user), """UserLogin""")
            form.Add(New ByteArrayContent(fBytes, 0, fBytes.Count()), "fileToUpload", fName)

            Dim response = Await _client.PostAsync("http://helpdesk/core/Attachment/Upload", form)
            Return Await response.Content.ReadAsStringAsync()
        Catch
            Return "Error!"
        End Try
    End Function

    Public Sub Dispose() Implements IDisposable.Dispose
        _client.Dispose()
    End Sub
End Class