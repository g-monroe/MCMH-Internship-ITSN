Imports System.IO
Imports System.Net
Imports System.Net.Http
Imports System.Runtime.InteropServices
Public Class Form1
    Public nCookies As New CookieContainer
    'Stop the clicking sound of the webbrowser
    Const DS As Integer = 21
    Const SP As Integer = &H2
    <DllImport("urlmon.dll")>
    <PreserveSig>
    Private Shared Function CoInternetSetFeatureEnabled(FeatureEntry As Integer, <MarshalAs(UnmanagedType.U4)> dSFlags As Integer, eEnable As Boolean) As <MarshalAs(UnmanagedType.[Error])> Integer
    End Function
    'Set Cookie to webbrowser
    <DllImport("wininet.dll", CharSet:=CharSet.Auto, SetLastError:=True)>
    Public Shared Function InternetSetCookie(lpszUrl As String, lpszCookieName As String, lpszCookieData As String) As Boolean
    End Function
    Private Async Sub btnLogin_Click(sender As Object, e As EventArgs) Handles btnLogin.Click

        Dim handler = New HttpClientHandler() With {
                .AllowAutoRedirect = False,
                .CookieContainer = nCookies,
               .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
            }
        Using client As New HttpClient(handler)
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
            client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Login.asp?IgnoreSSO=true")
            Dim request = New HttpRequestMessage(HttpMethod.Post, "http://helpdesk/LoginProcess.asp?IgnoreSSO=true") With {
                .Content = New FormUrlEncodedContent(New Dictionary(Of String, String)() From {
                    {"hid_TimeZoneOffset", "-1"},
                    {"hid_clientTZDateTime", ""},
                    {"newlogin", "true"},
                    {"domaincount", "1"},
                    {"UserDomain", "MCMH.ORG"},
                    {"NotInternetExplorer", "1"},
                    {"Username", tbUser.Text},
                    {"Password", tbPassword.Text},
                    {"SignInButton", "Sign In"}
                })
            }
            Dim response = Await client.SendAsync(request)
            Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()

            For Each cookie As Cookie In responseCookies
                RichTextBox1.Text += (cookie.Name + ": " + cookie.Value + vbNewLine)
            Next
            If RichTextBox1.Text.Contains("UserL") Then
                gbStep1.Text = "Step 1 - Login - Logged In"
            Else
                gbStep1.Text = "Step 1 - Login - Failed Login"
            End If
        End Using
    End Sub
    Dim loaded As Boolean = False
    Private Sub cbRemember_CheckedChanged(sender As Object, e As EventArgs) Handles cbRemember.CheckedChanged
        If loaded Then
            If cbRemember.Checked Then
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintAccount.acc")
                Catch ex As Exception
                End Try
                Try
                    Dim words As String = tbUser.Text & ":" & tbPassword.Text
                    Dim byt As Byte() = System.Text.Encoding.UTF8.GetBytes(words)
                    words = System.Convert.ToBase64String(byt)
                    System.IO.File.WriteAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintAccount.acc", words)
                Catch ex As Exception
                End Try
            Else
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintAccount.acc")
                Catch ex As Exception
                End Try
            End If
        End If
    End Sub
    Dim auto As Boolean = False
    Private Async Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Disable Sound for browser (changing true to false would bring sound back)
        CoInternetSetFeatureEnabled(DS, SP, True)
        'Set First Item to All
        ComboBox1.SelectedIndex = ComboBox1.FindStringExact("All")
        'Auto run
        Dim arguments As String() = Environment.GetCommandLineArgs()
        For Each line As String In arguments
            If line = "-autorun" Then
                auto = True
            End If
        Next
        'Account Setting
        If File.Exists(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintAccount.acc") Then
            cbRemember.Checked = True
            Dim fileReader As String
            fileReader = My.Computer.FileSystem.ReadAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintAccount.acc")
            Dim b As Byte() = Convert.FromBase64String(fileReader)
            fileReader = System.Text.Encoding.UTF8.GetString(b)
            tbUser.Text = fileReader.Split(":").First
            tbPassword.Text = fileReader.Split(":").Last
        End If
        loaded = True
        'AutoRun
        If auto Then
            Await Work.Login
            Button5.PerformClick()
        End If
    End Sub
    Dim completed = False
    Private Async Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        Work.nCookies = nCookies
        Dim test As String = Await Work.getLinks
        Try
            ProgressBar1.Maximum = Work.isseList.Count
            ProgressBar1.Value = 0
        Catch ex As Exception
        End Try
        For i As Integer = 0 To Work.isseList.Count - 1
            ProgressBar1.Value = i
            Label5.Text = "On: " + i.ToString + " Of " + Work.isseList.Count.ToString
            Work.SelectedIssue = i
            Await Work.getView
            Await Work.getTasks
            Dim file As System.IO.StreamWriter
            file = My.Computer.FileSystem.OpenTextFileWriter(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintJob\" + Work.isseList(Work.SelectedIssue) + ".html", True)
            file.WriteLine(Work.html)
            file.Close()
            completed = False
            AddHandler WebBrowser1.DocumentCompleted, AddressOf PageWaiter
            WebBrowser1.Navigate(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\PrintJob\" + Work.isseList(Work.SelectedIssue) + ".html")
            While Not completed
                Application.DoEvents()
            End While
            WebBrowser1.Print()
            Await Work.getPrinted

        Next
        Label5.Text = "Completed"
    End Sub
    Public Property pageready As Boolean = False

#Region "Page Loading Functions"
    Private Sub WaitForPageLoad()
        pageready = False
        AddHandler WebBrowser1.DocumentCompleted, New WebBrowserDocumentCompletedEventHandler(AddressOf PageWaiter)
        While Not pageready
            Application.DoEvents()
        End While
        pageready = False
    End Sub

    Private Sub PageWaiter(ByVal sender As Object, ByVal e As WebBrowserDocumentCompletedEventArgs) Handles WebBrowser1.DocumentCompleted
        completed = True
        WebBrowser1.Stop()
    End Sub

    Private Async Sub Button1_Click_1(sender As Object, e As EventArgs) Handles Button1.Click
        Work.nCookies = nCookies
        Await Work.getLinks
    End Sub


#End Region
End Class
