$a = Read-Host "First integer"
$a = [int]$a
$b = Read-Host "Second integer"
$b = [int]$b

$Sum = $a+$b
$Sub = $a-$b
$Mul = $a*$b
$Div = $a/$b

Write-Host("Sum is $Sum")
Write-Host("Substraction is $Sub")
Write-Host("Multiplication is $Mul")
Write-Host("Division is $Div")