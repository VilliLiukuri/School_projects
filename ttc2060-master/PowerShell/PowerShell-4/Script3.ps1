$filename = $args[0]
$input = @()

do {
    $i = Read-Host "Give workstation, Enter to quit: "
    $input += $i
}
 while ($i -ne "")

Add-Content -Path $HOME/$filename -Value $input
Write-Host "$filename created sucessfully!" 