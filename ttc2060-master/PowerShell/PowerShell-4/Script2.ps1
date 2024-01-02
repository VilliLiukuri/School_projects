function dirf2 {
    param ([string]$k)
    Get-ChildItem $HOME -Filter *$k | Format-Table Name, Length, LastWriteTime
}

dirf2 