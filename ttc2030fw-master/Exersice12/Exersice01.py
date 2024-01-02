class human:
    name = ""
    age = ""

    def show_info(self):
        msg = self.name + " " + str(self.age)
        return msg

boy = human()
boy.age = 22
boy.name = "Pertti"

print(boy.show_info())