import os

mypath = 'C:/'
files = os.listdir(mypath)

for f in files:
    print(f)

try:
    filename = "ayho.txt"
    file = open(mypath + filename, "w")
    file.close()
except PermissionError:
    print("No permission")