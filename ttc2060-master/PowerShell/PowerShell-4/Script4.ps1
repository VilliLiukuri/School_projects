$inputs = @()
$d = Get-Date -UFormat "%d/%m/%Y %R"

do {
    $i = Read-Host "Give file names, Enter to quit: "
    New-Item -Path $HOME\$i -ItemType File
    Add-Content -Path $HOME\$i -Value $d
    $inputs += $i
}
 while ($i -ne "")

$c = $inputs.Count
Write-Host "$c created!" 