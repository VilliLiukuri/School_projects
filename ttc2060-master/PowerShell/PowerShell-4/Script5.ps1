$foldername = $args[0]

$t = Test-Path -Path $foldername

if ($t -eq "True") {
    $f = Join-Path -Path $HOME -ChildPath "files.txt"
    Get-ChildItem $foldername | Format-Table Name | Out-File -FilePath $f
    Write-Host "Files copied to home directory!"
}

else {
    Write-Host "Sorry bro, $foldername doesn't exist!"
} 