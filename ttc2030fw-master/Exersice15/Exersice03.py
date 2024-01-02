from collections import Counter

lines = [""]
nimet = []
try:
    file = open("nimet.txt")
    lines = file.readlines()
    lines.sort()
    for element in lines:
        nimet.append(element.strip())
    print(Counter(nimet))
    print(len(nimet), "names in list")
except:
    print("failed to open file" + " nimet.txt")
finally:
    file.close