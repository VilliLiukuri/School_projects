which = int(input("1 to convert celsius to fahrenheit / 0 to fahrenheit to celsius "))
number = int(input("give number "))
if which == 1:
    faren = number * 1.8 + 32
    print(faren)
elif which == 0:
    celsius = (number -32) / 1.8
    print(celsius)