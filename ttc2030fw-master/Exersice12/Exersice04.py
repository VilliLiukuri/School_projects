import random

brandlist = ["Audi", "BMW", "Ford", "Opel", "Skoda", "Volvo", "VW"]
modellist = ["monster", "limousin", "taxi", "cabrio", "wagon"]
carlist = []
models = []
class Car:
    brand = ""
    model = ""
    price = ""
    def __str__(self): 
        return self.brand + " " + self.model
    def __int__(self):
        return self.price


for i in range(5):
    cars = Car()
    cars.brand = random.choice(brandlist)
    cars.model = random.choice(modellist)
    cars.prices = random.randrange(1000, 10000)
    carlist.append(cars.prices)
    print(cars, cars.prices)

print("Cars price in total.",sum(carlist))