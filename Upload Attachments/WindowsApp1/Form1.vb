Imports System.IO
Imports System.Net
Imports System.Net.Http
Public Class Form1
    Dim myWebHeaderCollection As WebHeaderCollection
    Dim SessionID As String = ""
    Dim nCookies As New CookieContainer
    Private Async Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

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
                    {"Username", TextBox1.Text},
                    {"Password", TextBox2.Text},
                    {"SignInButton", "Sign In"}
                })
            }
            Dim response = Await client.SendAsync(request)
            Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()

            For Each cookie As Cookie In responseCookies
                RichTextBox1.Text += (cookie.Name + ": " + cookie.Value + vbNewLine)
            Next
            If RichTextBox1.Text.Contains("UserL") Then
                GroupBox1.Text = "Step 1 - Login - Logged In"
            Else
                GroupBox1.Text = "Step 1 - Login - Failed Login"
            End If
        End Using
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Using OFD As New FolderBrowserDialog
            If OFD.ShowDialog = DialogResult.OK Then
                TextBox3.Text = OFD.SelectedPath
            End If
        End Using
        Dim dinfo As DirectoryInfo = New DirectoryInfo(TextBox3.Text)
        Dim Files As FileInfo() = dinfo.GetFiles("*.pdf")
        For Each file As FileInfo In Files
            ListBox1.Items.Add(file.Name)
        Next
        Label1.Text = "Status: " + ListBox1.Items.Count.ToString + " PDF Files"
    End Sub
    Dim run As Boolean = False
    Private Async Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        run = True
        For Each item As String In ListBox1.Items
            Dim num As String = item.ToString.Split(New String() {"- "}, StringSplitOptions.None).Last
            num = num.Split(".").First
            Label1.Text = "Status - " + num.ToString
            If run = True Then
                Using upload As New Uploader(num, nCookies)
                    RichTextBox1.Text = Await upload.UploadFile(TextBox3.Text + "\" + item.ToString, num, TextBox1.Text)
                    If RichTextBox1.Text.Contains("successfully") Then
                        ListBox2.Items.Add("Uploaded: " + num)
                    Else
                        ListBox2.Items.Add("Failed: " + num)
                    End If
                End Using
            End If
        Next
        Label1.Text = "Status: Done"
    End Sub

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click

        run = False

    End Sub

    Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        Dim sb As New System.Text.StringBuilder()

        For Each o As Object In ListBox2.Items
            sb.AppendLine(o)
        Next
        Dim rnd As New Random
        System.IO.File.WriteAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\Uploaded Attachments Log " + rnd.Next(10000, 99999).ToString + ".txt", sb.ToString())
    End Sub

    Private Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click
        ListBox1.Items.Clear()
        ListBox2.Items.Clear()
    End Sub
    Dim loaded As Boolean = False
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        If File.Exists(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\UploaderAccount.acc") Then
            CheckBox1.Checked = True
            Dim fileReader As String
            fileReader = My.Computer.FileSystem.ReadAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\UploaderAccount.acc")
            Dim b As Byte() = Convert.FromBase64String(fileReader)
            fileReader = System.Text.Encoding.UTF8.GetString(b)
            TextBox1.Text = fileReader.Split(":").First
            TextBox2.Text = fileReader.Split(":").Last
        End If
        loaded = True
    End Sub

    Private Sub CheckBox1_CheckedChanged(sender As Object, e As EventArgs) Handles CheckBox1.CheckedChanged
        If loaded Then
            If CheckBox1.Checked Then
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\UploaderAccount.acc")
                Catch ex As Exception
                End Try
                Try
                    Dim words As String = TextBox1.Text & ":" & TextBox2.Text
                    Dim byt As Byte() = System.Text.Encoding.UTF8.GetBytes(words)
                    words = System.Convert.ToBase64String(byt)
                    System.IO.File.WriteAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\UploaderAccount.acc", words)
                Catch ex As Exception
                End Try
            Else
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\UploaderAccount.acc")
                Catch ex As Exception
                End Try
            End If
        End If
    End Sub
End Class
