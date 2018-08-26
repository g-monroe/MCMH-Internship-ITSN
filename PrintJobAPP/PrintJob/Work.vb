Imports System.Net
Imports System.Net.Http
Imports System.Runtime.InteropServices

Public Class Work
    'Declares
    Public Shared CustomAPITasksURL As String = "http://helpdesk/requestTasks.asp?IssueNbr="
    Public Shared CustomAPIPrintedURL As String = "http://helpdesk/changePrinted.asp?IssueNbr="
    Public Shared Pete As String = "http://helpdesk/DashboardIssueList.asp?class=1016&listType=Assigned%20To&listID=petwem"
    Public Shared George As String = "http://helpdesk/DashboardIssueList.asp?class=1016&listType=Assigned%20To&listID=geobru"
    Public Shared Rick As String = "http://helpdesk/DashboardIssueList.asp?class=1016&listType=Assigned%20To&listID=rschulte"
    Public Shared SessionID As String = ""
    Public Shared nCookies As New CookieContainer
    Public Shared isseList As New List(Of String)
    Public Shared SelectedIssue As Integer = 0
    Public Shared html As String = ""
    Public Shared tasks As String = ""
    Public Shared tabletemplate As String = "<tr bgcolor=" & Chr(34) & "white" & Chr(34) & "><td align=" & Chr(34) & "center" & Chr(34) & "></td><td width=" & Chr(34) & "25%" & Chr(34) & " nowrap=""><a href=" & Chr(34) & "javascript:void(0)" & Chr(34) & ">TASKNAME</a></td><td width=" & Chr(34) & "34%" & Chr(34) & " nowrap=" & Chr(34) & Chr(34) & ">ASSIGNEDTO</td><td nowrap=" & Chr(34) & Chr(34) & " width=" & Chr(34) & "25%" & Chr(34) & ">COMPLETED</td><td width=" & Chr(34) & "10%" & Chr(34) & " nowrap="">TIME</td></tr>"

    Public Shared Async Function getLinks() As Task(Of String)
        Try
            isseList.Clear()
            Form1.ListBox1.Items.Clear()
        Catch ex As Exception
        End Try
        Dim handler = New HttpClientHandler() With {
            .AllowAutoRedirect = False,
            .CookieContainer = nCookies,
           .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
        }
        If Form1.ComboBox1.SelectedIndex = 0 Then ' ALL, get everybody
            'Pete
            Using client As New HttpClient(handler)
                Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(Pete))
                Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result As String = Await response.Content.ReadAsStringAsync
                result = result.Replace(Chr(34), "'")
                Dim lines As String() = result.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next
                'Rick
                Dim response2 As HttpResponseMessage = Await client.GetAsync(New Uri(Rick))
                Dim responseCookies2 As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result2 As String = Await response2.Content.ReadAsStringAsync
                result2 = result2.Replace(Chr(34), "'")
                Dim lines2 As String() = result2.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines2
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next

                'George
                Dim response3 As HttpResponseMessage = Await client.GetAsync(New Uri(George))
                Dim responseCookies3 As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result3 As String = Await response3.Content.ReadAsStringAsync
                result3 = result3.Replace(Chr(34), "'")
                Dim lines3 As String() = result3.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines3
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next

            End Using
        ElseIf Form1.ComboBox1.SelectedIndex = 1 Then ' Just Pete
            Using client As New HttpClient(handler)
                client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
                client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
                Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(Pete))
                Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result As String = Await response.Content.ReadAsStringAsync
                result = result.Replace(Chr(34), "'")
                Dim lines As String() = result.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next

            End Using
        ElseIf Form1.ComboBox1.SelectedIndex = 2 Then ' Just Rick
            Using client As New HttpClient(handler)
                client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
                client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
                Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(Rick))
                Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result As String = Await response.Content.ReadAsStringAsync
                result = result.Replace(Chr(34), "'")
                Dim lines As String() = result.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next

            End Using
        ElseIf Form1.ComboBox1.SelectedIndex = 3 Then ' Just George
            Using client As New HttpClient(handler)
                client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
                client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
                Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(George))
                Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()


                Dim result As String = Await response.Content.ReadAsStringAsync
                result = result.Replace(Chr(34), "'")
                Dim lines As String() = result.Split(New String() {"<tr class='ReportList'>"}, StringSplitOptions.None)
                For Each line As String In lines
                    If line.Contains(Form1.TextBox3.Text) And Not line.Contains("Printed") Then
                        Dim itemss As String = line.Split(New String() {"('CSIssue_View.asp?IssueNbr="}, StringSplitOptions.None).Last.Split(New String() {"'),'mywindow','width=900"}, StringSplitOptions.None).First
                        isseList.Add(itemss)
                        Form1.ListBox1.Items.Add(itemss)
                    End If

                Next

            End Using
        End If
        'Remove Duplicates
        If isseList.Count > 1 Then
            Dim result As List(Of String) = isseList.Distinct().ToList
            'Clear Listbox
            Try
                Form1.ListBox1.Items.Clear()
            Catch ex As Exception
            End Try
            'Put everyting back in
            For Each item As String In result
                Form1.ListBox1.Items.Add(item)
            Next
        End If

        Return "fuck off"
    End Function
    Public Shared Async Function getView() As Task(Of Boolean)
        Dim handler = New HttpClientHandler() With {
           .AllowAutoRedirect = False,
           .CookieContainer = nCookies,
          .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
       }
        Using client As New HttpClient(handler)
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
            client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
            Dim linkurl As String = Form1.TextBox1.Text + isseList(SelectedIssue)
            Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(linkurl))
            html = Await response.Content.ReadAsStringAsync
            html += "<p></p>"
            '<td id="tdTaskTime">Time</td></tr>
        End Using
        Return True
    End Function
    Public Shared Async Function getTasks() As Task(Of String)
        Dim handler = New HttpClientHandler() With {
             .AllowAutoRedirect = False,
             .CookieContainer = nCookies,
            .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
         }
        Using client As New HttpClient(handler)
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
            client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
            Dim linkurl As String = CustomAPITasksURL + isseList(SelectedIssue)
            Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(linkurl))
            tasks = Await response.Content.ReadAsStringAsync
            Dim temprich As String = tabletemplate
            Dim lines As String() = tasks.Split(New String() {"<br/>"}, StringSplitOptions.None)
            For Each line As String In lines
                If line.Contains("[") Then
                    Dim nameTask As String = line.Split(New String() {"[taskname]"}, StringSplitOptions.None).Last.Split(New String() {"[/taskname]"}, StringSplitOptions.None).First
                    If nameTask = " " Then
                        nameTask = line.Split(New String() {"[tasktext]"}, StringSplitOptions.None).Last.Split(New String() {"[/tasktext]"}, StringSplitOptions.None).First
                    End If
                    Dim assignedTo As String = line.Split(New String() {"[assigned]"}, StringSplitOptions.None).Last.Split(New String() {"[/assigned]"}, StringSplitOptions.None).First
                    Dim completed As String = line.Split(New String() {"[completed]"}, StringSplitOptions.None).Last.Split(New String() {"[/completed]"}, StringSplitOptions.None).First
                    If completed = " " Then
                        completed = "task completed?"
                    End If
                    temprich = temprich.Replace("TASKNAME", nameTask)
                    temprich = temprich.Replace("ASSIGNEDTO", assignedTo)
                    temprich = temprich.Replace("COMPLETED", completed)
                    temprich = temprich.Replace("TIME", "00:00")
                    Dim tempinsert As String = html.Split(New String() {">Time</td></tr>"}, StringSplitOptions.None).Last
                    html = html.Replace(tempinsert, "")
                    tempinsert = temprich + tempinsert
                    html += "</td></tr>" + tempinsert
                End If
            Next


        End Using
        Return True
    End Function
    Public Shared Async Function getPrinted() As Task(Of String)
        Dim handler = New HttpClientHandler() With {
             .AllowAutoRedirect = False,
             .CookieContainer = nCookies,
            .AutomaticDecompression = DecompressionMethods.GZip Or DecompressionMethods.Deflate
         }
        Using client As New HttpClient(handler)
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36")
            client.DefaultRequestHeaders.Add("Referer", "http://helpdesk/Dashboard.asp")
            Dim linkurl As String = CustomAPIPrintedURL + isseList(SelectedIssue)
            Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(linkurl))
        End Using
        Return ""
    End Function
    Public Shared Async Function Login() As Task(Of String)
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
                    {"Username", Form1.tbUser.Text},
                    {"Password", Form1.tbPassword.Text},
                    {"SignInButton", "Sign In"}
                })
            }
            Dim response = Await client.SendAsync(request)
            Dim responseCookies As IEnumerable(Of Cookie) = nCookies.GetCookies(New Uri("http://helpdesk/")).Cast(Of Cookie)()

            For Each cookie As Cookie In responseCookies
                Form1.RichTextBox1.Text += (cookie.Name + ": " + cookie.Value + vbNewLine)
            Next
            If Form1.RichTextBox1.Text.Contains("UserL") Then
                Form1.gbStep1.Text = "Step 1 - Login - Logged In"
            Else
                Form1.gbStep1.Text = "Step 1 - Login - Failed Login"
            End If
            Form1.nCookies = handler.CookieContainer
        End Using
        Return "Fuck off"
    End Function
End Class
