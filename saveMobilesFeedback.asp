<%
Option Explicit
Response.Expires = -1
Response.ContentType = "text/plain"

On Error Resume Next

Dim phone, name, feedback, fso, file, savePath, errMsg

phone = Request.Form("phone")
name = Request.Form("name")
feedback = Request.Form("feedback")

savePath = Server.MapPath("Mobiles_feedback_Requests.txt")

Set fso = CreateObject("Scripting.FileSystemObject")

If Err.Number <> 0 Then
    Response.Status = "500 Internal Server Error"
    Response.Write "Error initializing file system."
    Response.End
End If

Set file = fso.OpenTextFile(savePath, 8, True)
If Err.Number <> 0 Then
    Response.Status = "500 Internal Server Error"
    Response.Write "Error writing to feedback file."
    Response.End
End If

file.WriteLine "--------------------------------"
file.WriteLine "Date/Time: " & Now()
file.WriteLine "Mobile Number: " & phone
file.WriteLine "Name: " & name
file.WriteLine "Feedback: " & feedback
file.WriteLine ""
file.Close

If Err.Number = 0 Then
    Response.Write "Thank you! Your request has been submitted successfully."
Else
    Response.Status = "500 Internal Server Error"
    Response.Write "Failed to save feedback!"
End If

Response.End
%>
