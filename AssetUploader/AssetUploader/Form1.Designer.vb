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
        Me.gbStep1 = New System.Windows.Forms.GroupBox()
        Me.cbRemember = New System.Windows.Forms.CheckBox()
        Me.tbUser = New System.Windows.Forms.TextBox()
        Me.btnLogin = New System.Windows.Forms.Button()
        Me.tbPassword = New System.Windows.Forms.TextBox()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.TextBox1 = New System.Windows.Forms.TextBox()
        Me.TextBox2 = New System.Windows.Forms.TextBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Button1 = New System.Windows.Forms.Button()
        Me.lbFiles = New System.Windows.Forms.ListBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.lbUploaded = New System.Windows.Forms.ListBox()
        Me.Button3 = New System.Windows.Forms.Button()
        Me.Button2 = New System.Windows.Forms.Button()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.gbStep1.SuspendLayout()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'gbStep1
        '
        Me.gbStep1.Controls.Add(Me.cbRemember)
        Me.gbStep1.Controls.Add(Me.tbUser)
        Me.gbStep1.Controls.Add(Me.btnLogin)
        Me.gbStep1.Controls.Add(Me.tbPassword)
        Me.gbStep1.Location = New System.Drawing.Point(12, 12)
        Me.gbStep1.Name = "gbStep1"
        Me.gbStep1.Size = New System.Drawing.Size(224, 104)
        Me.gbStep1.TabIndex = 6
        Me.gbStep1.TabStop = False
        Me.gbStep1.Text = "Step 1: Login"
        '
        'cbRemember
        '
        Me.cbRemember.AutoSize = True
        Me.cbRemember.Location = New System.Drawing.Point(7, 77)
        Me.cbRemember.Name = "cbRemember"
        Me.cbRemember.Size = New System.Drawing.Size(120, 17)
        Me.cbRemember.TabIndex = 3
        Me.cbRemember.Text = "Remember Account"
        Me.cbRemember.UseVisualStyleBackColor = True
        '
        'tbUser
        '
        Me.tbUser.Location = New System.Drawing.Point(6, 19)
        Me.tbUser.Name = "tbUser"
        Me.tbUser.Size = New System.Drawing.Size(208, 20)
        Me.tbUser.TabIndex = 1
        '
        'btnLogin
        '
        Me.btnLogin.Location = New System.Drawing.Point(133, 73)
        Me.btnLogin.Name = "btnLogin"
        Me.btnLogin.Size = New System.Drawing.Size(81, 23)
        Me.btnLogin.TabIndex = 0
        Me.btnLogin.Text = "Login"
        Me.btnLogin.UseVisualStyleBackColor = True
        '
        'tbPassword
        '
        Me.tbPassword.Location = New System.Drawing.Point(6, 45)
        Me.tbPassword.Name = "tbPassword"
        Me.tbPassword.PasswordChar = Global.Microsoft.VisualBasic.ChrW(42)
        Me.tbPassword.Size = New System.Drawing.Size(208, 20)
        Me.tbPassword.TabIndex = 2
        Me.tbPassword.UseSystemPasswordChar = True
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.Button1)
        Me.GroupBox1.Controls.Add(Me.TextBox2)
        Me.GroupBox1.Controls.Add(Me.Label2)
        Me.GroupBox1.Controls.Add(Me.TextBox1)
        Me.GroupBox1.Controls.Add(Me.Label1)
        Me.GroupBox1.Location = New System.Drawing.Point(12, 122)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(224, 100)
        Me.GroupBox1.TabIndex = 7
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Step 2: Settings"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(6, 16)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(50, 13)
        Me.Label1.TabIndex = 0
        Me.Label1.Text = "API Link:"
        '
        'TextBox1
        '
        Me.TextBox1.Location = New System.Drawing.Point(7, 32)
        Me.TextBox1.Name = "TextBox1"
        Me.TextBox1.Size = New System.Drawing.Size(207, 20)
        Me.TextBox1.TabIndex = 1
        Me.TextBox1.Text = "http://helpdesk/getAssNbr.asp?IssueNbr="
        '
        'TextBox2
        '
        Me.TextBox2.Location = New System.Drawing.Point(7, 74)
        Me.TextBox2.Name = "TextBox2"
        Me.TextBox2.Size = New System.Drawing.Size(175, 20)
        Me.TextBox2.TabIndex = 3
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(6, 58)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(39, 13)
        Me.Label2.TabIndex = 2
        Me.Label2.Text = "Folder:"
        '
        'Button1
        '
        Me.Button1.Location = New System.Drawing.Point(182, 72)
        Me.Button1.Name = "Button1"
        Me.Button1.Size = New System.Drawing.Size(32, 23)
        Me.Button1.TabIndex = 4
        Me.Button1.Text = "..."
        Me.Button1.UseVisualStyleBackColor = True
        '
        'lbFiles
        '
        Me.lbFiles.FormattingEnabled = True
        Me.lbFiles.Location = New System.Drawing.Point(243, 26)
        Me.lbFiles.Name = "lbFiles"
        Me.lbFiles.Size = New System.Drawing.Size(120, 225)
        Me.lbFiles.TabIndex = 9
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(242, 10)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(31, 13)
        Me.Label3.TabIndex = 5
        Me.Label3.Text = "Files:"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(368, 10)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(80, 13)
        Me.Label4.TabIndex = 10
        Me.Label4.Text = "Uploaded Files:"
        '
        'lbUploaded
        '
        Me.lbUploaded.BackColor = System.Drawing.SystemColors.InfoText
        Me.lbUploaded.ForeColor = System.Drawing.SystemColors.Info
        Me.lbUploaded.FormattingEnabled = True
        Me.lbUploaded.Location = New System.Drawing.Point(369, 26)
        Me.lbUploaded.Name = "lbUploaded"
        Me.lbUploaded.Size = New System.Drawing.Size(120, 225)
        Me.lbUploaded.TabIndex = 11
        '
        'Button3
        '
        Me.Button3.Image = Global.AssetUploader.My.Resources.Resources.if_206_CircledStop_183323
        Me.Button3.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.Button3.Location = New System.Drawing.Point(85, 228)
        Me.Button3.Name = "Button3"
        Me.Button3.Size = New System.Drawing.Size(67, 23)
        Me.Button3.TabIndex = 12
        Me.Button3.Text = "Stop"
        Me.Button3.UseVisualStyleBackColor = True
        '
        'Button2
        '
        Me.Button2.Image = Global.AssetUploader.My.Resources.Resources.if_run_1167975
        Me.Button2.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.Button2.Location = New System.Drawing.Point(12, 228)
        Me.Button2.Name = "Button2"
        Me.Button2.Size = New System.Drawing.Size(67, 23)
        Me.Button2.TabIndex = 8
        Me.Button2.Text = "Run"
        Me.Button2.UseVisualStyleBackColor = True
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Font = New System.Drawing.Font("Microsoft Sans Serif", 6.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label5.Location = New System.Drawing.Point(159, 232)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(64, 9)
        Me.Label5.TabIndex = 13
        Me.Label5.Text = "By Gavin Monroe"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(497, 257)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.Button3)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.lbUploaded)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.lbFiles)
        Me.Controls.Add(Me.Button2)
        Me.Controls.Add(Me.GroupBox1)
        Me.Controls.Add(Me.gbStep1)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Form1"
        Me.Text = "Asset Uploader"
        Me.gbStep1.ResumeLayout(False)
        Me.gbStep1.PerformLayout()
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents gbStep1 As GroupBox
    Friend WithEvents cbRemember As CheckBox
    Friend WithEvents tbUser As TextBox
    Friend WithEvents btnLogin As Button
    Friend WithEvents tbPassword As TextBox
    Friend WithEvents GroupBox1 As GroupBox
    Friend WithEvents Button1 As Button
    Friend WithEvents TextBox2 As TextBox
    Friend WithEvents Label2 As Label
    Friend WithEvents TextBox1 As TextBox
    Friend WithEvents Label1 As Label
    Friend WithEvents Button2 As Button
    Friend WithEvents lbFiles As ListBox
    Friend WithEvents Label3 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents lbUploaded As ListBox
    Friend WithEvents Button3 As Button
    Friend WithEvents Label5 As Label
End Class
