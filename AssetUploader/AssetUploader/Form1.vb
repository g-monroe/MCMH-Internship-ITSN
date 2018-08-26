Imports System.IO
Imports System.Net
Imports System.Net.Http

Public Class Form1
    Public nCookies As New CookieContainer
    Dim loaded As Boolean = False
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Account Setting
        If File.Exists(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\AssetAccount.acc") Then
            cbRemember.Checked = True
            Dim fileReader As String
            fileReader = My.Computer.FileSystem.ReadAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\AssetAccount.acc")
            Dim b As Byte() = Convert.FromBase64String(fileReader)
            fileReader = System.Text.Encoding.UTF8.GetString(b)
            tbUser.Text = fileReader.Split(":").First
            tbPassword.Text = fileReader.Split(":").Last
        End If
        loaded = True
    End Sub

    Private Sub cbRemember_CheckedChanged(sender As Object, e As EventArgs) Handles cbRemember.CheckedChanged
        If loaded Then
            If cbRemember.Checked Then
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\AssetAccount.acc")
                Catch ex As Exception
                End Try
                Try
                    Dim words As String = tbUser.Text & ":" & tbPassword.Text
                    Dim byt As Byte() = System.Text.Encoding.UTF8.GetBytes(words)
                    words = System.Convert.ToBase64String(byt)
                    System.IO.File.WriteAllText(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\AssetAccount.acc", words)
                Catch ex As Exception
                End Try
            Else
                Try
                    File.Delete(My.Computer.FileSystem.SpecialDirectories.MyDocuments + "\AssetAccount.acc")
                Catch ex As Exception
                End Try
            End If
        End If
    End Sub

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
            Dim result As String = ""
            For Each cookie As Cookie In responseCookies
                result += (cookie.Name + ": " + cookie.Value + vbNewLine)
            Next
            If result.Contains("UserL") Then
                gbStep1.Text = "Step 1 - Login - Logged In"
            Else
                gbStep1.Text = "Step 1 - Login - Failed Login"
            End If
        End Using
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Using OFD As New FolderBrowserDialog
            If OFD.ShowDialog = DialogResult.OK Then
                TextBox2.Text = OFD.SelectedPath
            End If
        End Using
        Dim dinfo As DirectoryInfo = New DirectoryInfo(TextBox2.Text)
        Dim Files As FileInfo() = dinfo.GetFiles("*.pdf")
        For Each file As FileInfo In Files
            lbFiles.Items.Add(file.Name)
        Next
        Label2.Text = "Status: " + lbFiles.Items.Count.ToString + " PDF Files"
    End Sub
    Dim run As Boolean = False
    Private Async Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        run = True
        For Each item As String In lbFiles.Items
            Dim num As String = item.ToString.Split(New String() {" -"}, StringSplitOptions.None).First.Split(New String() {"TAG# "}, StringSplitOptions.None).Last

            Using webc As New WebClient
                num = webc.DownloadString(New Uri(TextBox1.Text + num))
                num = num.Split(New String() {"<!--Display ADO Data from Customer Table-->"}, StringSplitOptions.None).Last.Split(New String() {"<!--Next Row = Record Loop and add to html table-->"}, StringSplitOptions.None).First
                num = num.Replace(vbLf, "")
                num = num.Replace(" ", "")
            End Using
            Label2.Text = "Status - " + num.ToString
            Dim result As String = ""
            If run = True Then
                Using upload As New Uploader(num, nCookies)
                    result = Await upload.UploadFile(TextBox2.Text + "\" + item.ToString, num, tbUser.Text)
                    If result.Contains("<head><title>Object moved</title></head>") Then
                        lbUploaded.Items.Add("Uploaded: " + num)
                    Else
                        lbUploaded.Items.Add("Failed: " + num)
                    End If
                End Using
            End If
        Next
        Label2.Text = "Status: Done"
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        run = False
    End Sub
End Class
