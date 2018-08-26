<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Form1))
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.tbListLink = New System.Windows.Forms.TextBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.tbAPI = New System.Windows.Forms.TextBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.ListBox1 = New System.Windows.Forms.ListBox()
        Me.RichTextBox1 = New System.Windows.Forms.RichTextBox()
        Me.Button1 = New System.Windows.Forms.Button()
        Me.Button2 = New System.Windows.Forms.Button()
        Me.ListView1 = New System.Windows.Forms.ListView()
        Me.lvchName = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvchFreq = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvchSub = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvchDate1 = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvchDate2 = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.Button3 = New System.Windows.Forms.Button()
        Me.Button4 = New System.Windows.Forms.Button()
        Me.Button5 = New System.Windows.Forms.Button()
        Me.Button6 = New System.Windows.Forms.Button()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.ProgressBar1 = New System.Windows.Forms.ProgressBar()
        Me.lblStatus = New System.Windows.Forms.Label()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.tbListLink)
        Me.GroupBox1.Controls.Add(Me.Label3)
        Me.GroupBox1.Controls.Add(Me.tbAPI)
        Me.GroupBox1.Controls.Add(Me.Label2)
        Me.GroupBox1.Location = New System.Drawing.Point(14, 12)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(223, 104)
        Me.GroupBox1.TabIndex = 7
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Step 2: Settings"
        '
        'tbListLink
        '
        Me.tbListLink.Location = New System.Drawing.Point(6, 74)
        Me.tbListLink.Name = "tbListLink"
        Me.tbListLink.Size = New System.Drawing.Size(203, 20)
        Me.tbListLink.TabIndex = 5
        Me.tbListLink.Text = "http://helpdesk/getRecurringIssues.asp"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(3, 58)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(69, 13)
        Me.Label3.TabIndex = 4
        Me.Label3.Text = "API List Link:"
        '
        'tbAPI
        '
        Me.tbAPI.Location = New System.Drawing.Point(6, 34)
        Me.tbAPI.Name = "tbAPI"
        Me.tbAPI.Size = New System.Drawing.Size(203, 20)
        Me.tbAPI.TabIndex = 3
        Me.tbAPI.Text = "http://helpdesk/getReIssueDetails.asp?IssueNbr="
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(3, 18)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(50, 13)
        Me.Label2.TabIndex = 2
        Me.Label2.Text = "API Link:"
        '
        'ListBox1
        '
        Me.ListBox1.FormattingEnabled = True
        Me.ListBox1.Location = New System.Drawing.Point(243, 38)
        Me.ListBox1.Name = "ListBox1"
        Me.ListBox1.Size = New System.Drawing.Size(120, 134)
        Me.ListBox1.TabIndex = 8
        '
        'RichTextBox1
        '
        Me.RichTextBox1.Location = New System.Drawing.Point(370, 13)
        Me.RichTextBox1.Name = "RichTextBox1"
        Me.RichTextBox1.Size = New System.Drawing.Size(148, 161)
        Me.RichTextBox1.TabIndex = 9
        Me.RichTextBox1.Text = ""
        '
        'Button1
        '
        Me.Button1.Location = New System.Drawing.Point(95, 151)
        Me.Button1.Name = "Button1"
        Me.Button1.Size = New System.Drawing.Size(61, 23)
        Me.Button1.TabIndex = 10
        Me.Button1.Text = "Get List"
        Me.Button1.UseVisualStyleBackColor = True
        '
        'Button2
        '
        Me.Button2.Location = New System.Drawing.Point(14, 151)
        Me.Button2.Name = "Button2"
        Me.Button2.Size = New System.Drawing.Size(75, 23)
        Me.Button2.TabIndex = 11
        Me.Button2.Text = "Get Details"
        Me.Button2.UseVisualStyleBackColor = True
        '
        'ListView1
        '
        Me.ListView1.Columns.AddRange(New System.Windows.Forms.ColumnHeader() {Me.lvchName, Me.lvchFreq, Me.lvchSub, Me.lvchDate1, Me.lvchDate2})
        Me.ListView1.Location = New System.Drawing.Point(370, 9)
        Me.ListView1.Name = "ListView1"
        Me.ListView1.Size = New System.Drawing.Size(306, 165)
        Me.ListView1.TabIndex = 12
        Me.ListView1.UseCompatibleStateImageBehavior = False
        Me.ListView1.View = System.Windows.Forms.View.Details
        '
        'lvchName
        '
        Me.lvchName.Text = "Name"
        '
        'lvchFreq
        '
        Me.lvchFreq.Text = "Freq"
        '
        'lvchSub
        '
        Me.lvchSub.Text = "Subject"
        '
        'lvchDate1
        '
        Me.lvchDate1.Text = "Date1"
        '
        'lvchDate2
        '
        Me.lvchDate2.Text = "Date2"
        '
        'Button3
        '
        Me.Button3.Image = Global.Excel_Output.My.Resources.Resources.if_run_1167975
        Me.Button3.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.Button3.Location = New System.Drawing.Point(14, 122)
        Me.Button3.Name = "Button3"
        Me.Button3.Size = New System.Drawing.Size(53, 23)
        Me.Button3.TabIndex = 13
        Me.Button3.Text = " "
        Me.Button3.TextAlign = System.Drawing.ContentAlignment.MiddleRight
        Me.Button3.UseVisualStyleBackColor = True
        '
        'Button4
        '
        Me.Button4.Location = New System.Drawing.Point(133, 122)
        Me.Button4.Name = "Button4"
        Me.Button4.Size = New System.Drawing.Size(90, 23)
        Me.Button4.TabIndex = 14
        Me.Button4.Text = "Excel It"
        Me.Button4.UseVisualStyleBackColor = True
        '
        'Button5
        '
        Me.Button5.Location = New System.Drawing.Point(162, 151)
        Me.Button5.Name = "Button5"
        Me.Button5.Size = New System.Drawing.Size(61, 23)
        Me.Button5.TabIndex = 15
        Me.Button5.Text = "Clear"
        Me.Button5.UseVisualStyleBackColor = True
        '
        'Button6
        '
        Me.Button6.Image = Global.Excel_Output.My.Resources.Resources.if_206_CircledStop_183323
        Me.Button6.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.Button6.Location = New System.Drawing.Point(73, 122)
        Me.Button6.Name = "Button6"
        Me.Button6.Size = New System.Drawing.Size(54, 23)
        Me.Button6.TabIndex = 16
        Me.Button6.Text = "Stop"
        Me.Button6.TextAlign = System.Drawing.ContentAlignment.MiddleRight
        Me.Button6.UseVisualStyleBackColor = True
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Font = New System.Drawing.Font("Microsoft Sans Serif", 6.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label4.Location = New System.Drawing.Point(3, 0)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(64, 9)
        Me.Label4.TabIndex = 22
        Me.Label4.Text = "By Gavin Monroe"
        '
        'ProgressBar1
        '
        Me.ProgressBar1.Location = New System.Drawing.Point(243, 25)
        Me.ProgressBar1.Name = "ProgressBar1"
        Me.ProgressBar1.Size = New System.Drawing.Size(120, 15)
        Me.ProgressBar1.TabIndex = 23
        '
        'lblStatus
        '
        Me.lblStatus.AutoSize = True
        Me.lblStatus.Location = New System.Drawing.Point(243, 9)
        Me.lblStatus.Name = "lblStatus"
        Me.lblStatus.Size = New System.Drawing.Size(27, 13)
        Me.lblStatus.TabIndex = 6
        Me.lblStatus.Text = "Idle:"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(680, 182)
        Me.Controls.Add(Me.lblStatus)
        Me.Controls.Add(Me.ProgressBar1)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.Button6)
        Me.Controls.Add(Me.Button5)
        Me.Controls.Add(Me.Button4)
        Me.Controls.Add(Me.Button3)
        Me.Controls.Add(Me.ListView1)
        Me.Controls.Add(Me.Button2)
        Me.Controls.Add(Me.Button1)
        Me.Controls.Add(Me.RichTextBox1)
        Me.Controls.Add(Me.ListBox1)
        Me.Controls.Add(Me.GroupBox1)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Form1"
        Me.Text = "Recurring Issue Report Maker"
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents GroupBox1 As GroupBox
    Friend WithEvents tbListLink As TextBox
    Friend WithEvents Label3 As Label
    Friend WithEvents tbAPI As TextBox
    Friend WithEvents Label2 As Label
    Friend WithEvents ListBox1 As ListBox
    Friend WithEvents RichTextBox1 As RichTextBox
    Friend WithEvents Button1 As Button
    Friend WithEvents Button2 As Button
    Friend WithEvents ListView1 As ListView
    Friend WithEvents lvchName As ColumnHeader
    Friend WithEvents lvchFreq As ColumnHeader
    Friend WithEvents lvchSub As ColumnHeader
    Friend WithEvents lvchDate1 As ColumnHeader
    Friend WithEvents lvchDate2 As ColumnHeader
    Friend WithEvents Button3 As Button
    Friend WithEvents Button4 As Button
    Friend WithEvents Button5 As Button
    Friend WithEvents Button6 As Button
    Friend WithEvents Label4 As Label
    Friend WithEvents ProgressBar1 As ProgressBar
    Friend WithEvents lblStatus As Label
End Class
