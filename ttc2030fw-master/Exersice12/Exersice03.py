class car:
    brand = ""
    model = ""
    price = 0

    def __init__(self,brand,model,price):
        self.brand = brand
        self.model = model
        self.price = price
        
    def show_info(self):
        msg = self.brand + " model " + self.model + " price: " + str(self.price) + " € "
        return msg

car1 = car("Skoda", "Octavia", 3000)
car2 = car("Audi", "A4", 4000)
car3 = car("Volvo", "V70", 5000)
prices = (car1.price + car2.price + car3.price)

print(car1.show_info())
print(car2.show_info())
print(car3.show_info())
print("cars price in total", prices,"€")