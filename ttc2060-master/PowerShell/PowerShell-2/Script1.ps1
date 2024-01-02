$a = (Get-ChildItem -Path $home | Measure-Object).Count
$b = $home
Write-Host("$a Files found at $b")