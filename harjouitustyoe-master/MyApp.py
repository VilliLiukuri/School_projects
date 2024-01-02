from functions import *

options()

while True:
    try:
        
        selection = input("Choose 1, 2, 3, 4: ")

        if selection == "1":
            options()

        elif selection == "2":
            gasoline_oil()
        
        elif selection == "3":
            cache_assurance()

        elif selection == "4":
            quit()
            break

    except ValueError:
	    print ("Try again.")
    except TypeError:
	    print ("Try again.")
