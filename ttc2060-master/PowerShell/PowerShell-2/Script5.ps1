param (
  [string]$computer = '192.168.8.1',
  [int]$tries = 1
  )
$confirmation = Read-Host "I will bing address $computer $tries time, Okay?
[y/n]"
if($confirmation -eq "y")
{
    for ($i = 0; $i -lt $tries; $i++)
        {start-sleep -Milliseconds 300 ; Write-Output("try " + ($i +1) + " to ping: " + $computer)} 
        break
}
Write-Output("EI SITTE !!!!!!!!")
    break