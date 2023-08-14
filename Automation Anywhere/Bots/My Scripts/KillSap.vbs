Dim oShell : Set oShell = CreateObject("WScript.Shell")

oShell.Run "taskkill /F /im saplgpad.exe", , True

Dim oShell2 : Set oShell2 = CreateObject("WScript.Shell")

oShell2.Run "taskkill /F /im saplogon.exe", , True