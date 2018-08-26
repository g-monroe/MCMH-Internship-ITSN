<%
%>
<!-- #include file="Setup_Inc.asp" -->
<%
'*****************************************************************************
'  Workfile: DB_Inc.asp
'  Abstract: Functions for accessing the database.
' Reference: Core
'*****************************************************************************%>
<!-- #include file="Connect/Connect_Inc.asp" -->
<!-- #include file="ADO_Inc.vbs" -->
 
<%'*****************************************************************************
'  GLOBAL VARIABLES
'*****************************************************************************
Dim IssueNbr
IssueNbr = Request.QueryString("IssueNbr")
  Dim Conn       ' The connection to the database
  Dim ConnSys    ' The connection to the Lash_System database
  Dim pcmd       ' The command object


'=============================================================================
' Open the database connection.
'===============================================================================

  Set Conn = Server.CreateObject("ADODB.Connection")
  Conn.ConnectionTimeout = 60   'the default is 15 seconds for SQL ConnectionTimeout
  Conn.CommandTimeOut = 180  '3 minutes  
  Conn.Open GetDatabaseConnectionString()
SQLQueryEND = "'"	
SQLQuery = "SELECT InvItemID FROM dbo.InvItems WHERE InventoryNbr='"
SQLQuery2 = SQLQuery + IssueNbr + SQLQueryEND

'First Recordset RsCustomerList
Set RsCustomerList = Conn.Execute(SQLQuery2)  
%>

<!--Display ADO Data from Customer Table-->
<% Do While Not RScustomerList.EOF %>
   <%= RSCustomerList("InvItemID")%> 
<!--Next Row = Record Loop and add to html table-->
<% 
   RScustomerList.MoveNext 
Loop 
RScustomerList.Close
  Conn.Close
  Set Conn = Nothing
%>
