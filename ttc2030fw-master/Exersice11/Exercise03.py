namelist = []
name = " "
names = ""
while name != "":
    name = input("give names. blank to stop: ")
    namelist.append(name)
    if name != "":
        names += name + ","       
print(names)
print("You gave",(len(namelist)-1),"names.")