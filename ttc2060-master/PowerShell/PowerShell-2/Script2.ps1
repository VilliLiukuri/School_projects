$a = Read-Host "Give path"
$b = (Get-ChildItem -Path $a | Measure-Object).Count
$c = $a
Write-Host("$b Files found at $c")