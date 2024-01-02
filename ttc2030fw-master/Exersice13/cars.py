cars = []
class Cars:
    make = ""
    reg = ""
    def __str__(self):
        return self.make + " " + self.reg
        
car1 = Cars()
car1.make = "audi"
car1.reg = "FGH-456"
cars.append(car1)

car2 = Cars()
car2.make = "volvo"
car2.reg = "PPE-334"
cars.append(car2)

car3 = Cars()
car3.make = "saab"
car3.reg = "SDF-234"
cars.append(car3)

car4 = Cars()
car4.make = "porche"
car4.reg = "KLO-890"
cars.append(car4)

car5 = Cars()
car5.make = "subaru"
car5.reg = "GHJ-567"
cars.append(car5)

car6 = Cars()
car6.make = "nissan"
car6.reg = "LLO-124"
cars.append(car6)

car7 = Cars()
car7.make = "toyota"
car7.reg = "FFH-456"
cars.append(car7)

car8 = Cars()
car8.make = "ssangyong"
car8.reg = "VBN-345"
cars.append(car8)

car9 = Cars()
car9.make = "mazda"
car9.reg = "JUT-678"
cars.append(car9)

car10 = Cars()
car10.make = "ferrari"
car10.reg = "NTY-458"
cars.append(car10)
