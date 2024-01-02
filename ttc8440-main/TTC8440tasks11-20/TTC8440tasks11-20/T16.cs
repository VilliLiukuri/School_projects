using System;
namespace T16_Vehicle
{
    internal class T16
    {
        public static void vehicle()
        {
            Bicycle bike1 = new Bicycle("Jopo", "Street", 2016, "Blue", false, "");
            Bicycle bike2 = new Bicycle("Tunturi", "StreetPower", 2010, "Black", true, "Shimano Nexus");

            Boat boat1 = new Boat("SummerFun", "S900", 1990, "White", "Rowboat", 3);
            Boat boat2 = new Boat("Yamaha", "Model 1000", 2010, "Yellow", "Motorboat", 5);

            Console.WriteLine("Bike1 info\n" + bike1.ToString());
            Console.WriteLine("\nBike2 info\n" + bike2.ToString());

            Console.WriteLine("\nBoat1 info\n" + boat1.ToString());
            Console.WriteLine("\nBoat2 info\n" + boat2.ToString());

            Console.ReadLine();
        }
        public class Vehicle
        {
            private string name;
            private string model;
            private int modelYear;
            private string color;

            public Vehicle(string name, string model, int modelYear, string color)
            {
                this.name = name;
                this.model = model;
                this.modelYear = modelYear;
                this.color = color;
            }

            public override string ToString()
            {
                return $"Name: {name} Model: {model} ModelYear: {modelYear} Color: {color}";
            }
        }

        public class Bicycle : Vehicle
        {
            private bool geared;
            private string gearName;

            public Bicycle(string name, string model, int modelYear, string color, bool geared, string gearName)
                : base(name, model, modelYear, color)
            {
                this.geared = geared;
                this.gearName = gearName;
            }

            public override string ToString()
            {
                return base.ToString() + $" Geared: {geared} Gear Name: {gearName}";
            }
        }

        public class Boat : Vehicle
        {
            private string boatType;
            private int seatCount;

            public Boat(string name, string model, int modelYear, string color, string boatType, int seatCount)
                : base(name, model, modelYear, color)
            {
                this.boatType = boatType;
                this.seatCount = seatCount;
            }

            public override string ToString()
            {
                return base.ToString() + $" Boat Type: {boatType} Seat Count: {seatCount}";
            }
        }
    }
}