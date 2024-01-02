time = int(input("Give seconds: "))
hour = time // 3600
time %= 3600
minutes = time // 60
time %= 60
seconds = time
print("%d:%d:%d" % (hour,minutes,seconds))