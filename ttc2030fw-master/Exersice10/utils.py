def show_info():
    print("I'm Utils.Info")

def subtract():
    num1 = int(input("give firts number "))
    num2 = int(input("give second number "))
    print(num1 - num2)

def average():
    num1 = int(input("give firts number "))
    num2 = int(input("give second number "))
    num3 = int(input("give third number "))
    plus = num1 + num2 + num3
    print(round(plus / 3, 2))

def calc_consumpiton():
    consumption = float(input("how much is consumption? "))
    price = float(input("how much is gasolines price per liter? "))
    distance = float(input("how long of a trip? "))
    print("price is:",round(distance * (consumption/100) * price ,2))
    print("consumption is:",consumption / 100 * distance)