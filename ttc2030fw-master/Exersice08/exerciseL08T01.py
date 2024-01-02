age = int(input("Write your age here. "))
if age < 13:
    print("kid")
elif age >=13 and age <=19:
    print("teen")
elif age >=20 and age <=65:
    print("adult")
else:
    print("senior")