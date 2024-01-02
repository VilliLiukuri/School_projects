import os
import shutil
import time

#Options
def options():
    print("\n")
    print("1) Options")
    print("2) How many deciliters of oil in gasoline")
    print("3) Clean cache")
    print("4) Quit")
    print("\n")

#Quit
def quit():
        print("\n") 
        print("Thank you come again!! ")
        print("\n")

#Cleaner cleans %TEMP% folder
def cache_cleaner():
    folder = "C:\\Users\\VilliLiukuri\\AppData\\Local\\Temp"
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                print("Deleting file", file_path)
                os.unlink(file_path)
                time.sleep(0.01)
                print("File deleted")
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print("Failed to delete %s. Reason: %s" % (file_path, e))
            print("")
    print("\nDone\n")

#make sure you want to perform the function cache_cleaner
def cache_assurance():
    while True:
        step1 = input("\nDo you want to clear cache: 1)Yes 2)No ")
        if step1 == "1":
            print("\nContinuing to step2.")
            step2 = input("\nDo you really want to clear cache: 1)Yes 2)No ")
            if step2 == "1":
                cache_cleaner()
                break
            elif step2 == "2":
                quit()
                break
            else:
                continue

        elif step1 == "2":
            quit()
            break
        else:
            print ("\nIncorrect answer?")
            continue

#Counts how many deciliters of oil in gasoline
def gasoline_oil():
    gasoline = float(input("\nHow much gasoline? ----> "))
    deciliters = gasoline*10

    oil = float(input("\nHow many percent of the mixture? ---->"))
    prosents = oil/100

    mixture = deciliters*prosents
    print("\nAdd ", mixture, " desiliters oil\n")
