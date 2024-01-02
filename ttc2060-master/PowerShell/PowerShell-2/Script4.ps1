param (
  [string]$name = 'unknown',
  [int]$hellos = 1
  )
for ($i = 0; $i -lt $hellos; $i++)
  {Write-Output("Hello " + $name)}