filename = "names.txt"
lines = []
file= open(filename, "w")
for i in range(5):
    names = file.write(input("Give surrnames: ")+ "\n")
    lines.append(names)
file.close()
print(i + 1, " names written")
dump = input("Press enter to continue")
try:
    file = open(filename, "r")
    lines = file.readlines()
    for line in lines:
        print(line)   
except:
    print("Failed to read files: " + filename)
finally:
    file.close()
print("All done !!!")