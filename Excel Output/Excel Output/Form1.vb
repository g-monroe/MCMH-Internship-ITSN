Imports System.IO
Imports System.Net
Imports System.Net.Http
Imports System.Text.RegularExpressions
Imports Microsoft.Office.Interop
Imports Microsoft.Office.Interop.Excel

Public Class Form1
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Using wb As New WebClient
            Dim data As String() = wb.DownloadString(New Uri(tbListLink.Text)).Split(New String() {"</br>"}, StringSplitOptions.None)
            For Each line As String In data
                line = line.Replace("<!--Display ADO Data from Customer Table-->", "")
                line = line.Replace("<!--Next Row = Record Loop and add to html table-->", "")
                line = line.Replace(ControlChars.Lf, "")
                line = line.Replace(ControlChars.CrLf, "")
                line = line.Replace(ControlChars.Tab, "")
                line = line.Replace(ControlChars.Tab, "")
                line = WebUtility.HtmlDecode(line)
                If IsNumeric(line) Then
                    ListBox1.Items.Add(line)
                End If
            Next
        End Using
        lblStatus.Text = "Count: " + ListBox1.Items.Count.ToString
        ProgressBar1.Value = 0
        ProgressBar1.Maximum = ListBox1.Items.Count
    End Sub
    Public Function clearBad(line As String) As String
        line = line.Replace("<!--Display ADO Data from Customer Table-->", "")
        line = line.Replace("<!--Next Row = Record Loop and add to html table-->", "")
        line = line.Replace(ControlChars.Lf, "")
        line = line.Replace(ControlChars.CrLf, "")
        line = line.Replace(ControlChars.Tab, "")
        line = line.Replace("<br />", vbNewLine)
        line = line.Replace("<br>", vbNewLine)
        line = line.Replace("&nbsp;", " ")
        line = Regex.Replace(line, "<.*?>", String.Empty)
        Return line
    End Function
    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        If ListBox1.SelectedItems.Count <= 0 Then
            Exit Sub
        End If
        Using wb As New WebClient
            Dim data As String() = wb.DownloadString(New Uri(tbAPI.Text + ListBox1.SelectedItem.ToString)).Split(New String() {"<br/>"}, StringSplitOptions.None)
            Dim namme As String = clearBad(data(0))
            Dim objItem As New ListViewItem With {.Text = namme}
            Dim subject As String = clearBad(data(6))
            Dim recurrence As String = clearBad(data(1))
            objItem.SubItems.Add(recurrence)
            objItem.SubItems.Add(subject)
            Dim Date1 As String = clearBad(data(2))
            Dim Date2 As String = clearBad(data(3))
            Dim Date3 As String = clearBad(data(4))
            Dim Date4 As String = clearBad(data(5))
            If recurrence.StartsWith("B") Then
                objItem.SubItems.Add(Date1)
                objItem.SubItems.Add(Date2)
            ElseIf recurrence.StartsWith("A") Then
                objItem.SubItems.Add(Date3)
                objItem.SubItems.Add("N/A")
            ElseIf recurrence.StartsWith("Q") Then
                objItem.SubItems.Add(Date3)
                objItem.SubItems.Add("N/A")
            ElseIf recurrence.StartsWith("M") Then
                objItem.SubItems.Add(Date4)
                objItem.SubItems.Add("N/A")
            End If
            ListView1.Items.Add(objItem)
        End Using
    End Sub
    Public wbClient As New WebClient


    Private Async Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        If ListBox1.Items.Count = 0 Then
            Button1.PerformClick()
        End If
        Dim i As Integer = 0
        For Each item In ListBox1.Items
            i += 1
            lblStatus.Text = "On " & i.ToString & " of " + ProgressBar1.Maximum.ToString
            Try : ProgressBar1.Value = i : Catch ex As Exception : End Try
            If stopList = False Then
                Dim data2 As String = Await getDetails(tbAPI.Text + item)
                Dim data As String() = data2.Split(New String() {"<br/>"}, StringSplitOptions.None)
                Dim namme As String = clearBad(data(0))
                Dim objItem As New ListViewItem With {.Text = namme}
                Dim subject As String = clearBad(data(6))
                Dim recurrence As String = clearBad(data(1))
                objItem.SubItems.Add(recurrence)
                objItem.SubItems.Add(subject)
                Dim Date1 As String = clearBad(data(2))
                Dim Date2 As String = clearBad(data(3))
                Dim Date3 As String = clearBad(data(4))
                Dim Date4 As String = clearBad(data(5))
                If recurrence.StartsWith("B") Then
                    objItem.SubItems.Add(Date1)
                    objItem.SubItems.Add(Date2)
                ElseIf recurrence.StartsWith("A") Then
                    objItem.SubItems.Add(Date3)
                    objItem.SubItems.Add("N/A")
                ElseIf recurrence.StartsWith("Q") Then
                    objItem.SubItems.Add(Date3)
                    objItem.SubItems.Add("N/A")
                ElseIf recurrence.StartsWith("M") Then
                    objItem.SubItems.Add(Date4)
                    objItem.SubItems.Add("N/A")
                End If
                ListView1.Items.Add(objItem)
            End If
        Next
        lblStatus.Text = "Completed"
        Try : ProgressBar1.Value = ProgressBar1.Value - 5 : Catch ex As Exception : End Try
    End Sub
    Public Async Function getDetails(url As String) As Task(Of String)
        Using client As New HttpClient()
            Dim linkurl As String = url
            Dim response As HttpResponseMessage = Await client.GetAsync(New Uri(linkurl))

            Return Await response.Content.ReadAsStringAsync
        End Using
    End Function

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
        Try
            Dim objExcel As New Excel.Application
            Dim bkWorkBook As Workbook
            Dim shWorkSheet As Worksheet
            Dim i As Integer
            Dim j As Integer

            objExcel = New Excel.Application
            bkWorkBook = objExcel.Workbooks.Add
            shWorkSheet = CType(bkWorkBook.ActiveSheet, Worksheet)
            For i = 0 To Me.ListView1.Columns.Count - 1
                shWorkSheet.Cells(1, i + 1) = Me.ListView1.Columns(i).Text
            Next
            shWorkSheet.Range("A1:X1").EntireColumn.AutoFit()

            For i = 0 To Me.ListView1.Items.Count - 1
                For j = 0 To Me.ListView1.Items(i).SubItems.Count - 1
                    shWorkSheet.Cells(i + 2, j + 1) = Me.ListView1.Items(i).SubItems(j).Text
                Next
            Next

            objExcel.Visible = True
        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
    End Sub

    Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        ListView1.Items.Clear()
        ListBox1.Items.Clear()
    End Sub
    Dim stopList As Boolean = False
    Private Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click
        stopList = True
    End Sub
End Class
