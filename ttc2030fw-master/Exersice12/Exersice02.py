class cat:
    name = ""
    color = ""

    def __init__(self,name,color):
        self.name = name
        self.color = color

    def speak(self, sound):
        return f"I'm {self.name} And I'm {self.color} And I say {sound}"

miuku = cat("miuku", "yellow")

mauku = cat("mauku", "purple")

print(miuku.speak("MIU MAU!"))
print(mauku.speak("TERVE!"))