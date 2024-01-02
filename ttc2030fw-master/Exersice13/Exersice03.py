import operator
from cars import cars

cars2 = sorted(cars, key=operator.attrgetter("make"))
cars3 = sorted(cars, key=operator.attrgetter("reg"))

print("Cars in alphabetical order ")
for i in range(9):
    print(cars2[i])
print("---------------------------------------")
print("registrations in alphabetical order ")
for i in range(9):
    print(cars3[i])