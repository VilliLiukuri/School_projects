write-host "Parameters are:" $($args)[0,1,2]
write-host "Sroted words are:" ($($args)[0,1,2] | Sort-Object -Property Length)