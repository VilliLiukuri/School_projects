using System;

namespace T6_Sauna_Heater
{
    internal class T6
    {
        public static void SaunaHeater()
        {
            Mylly electromylly = new Mylly("electromylly", 0, 0);
            Console.WriteLine(electromylly);

            Mylly electromyllyon = new Mylly("electromylly", 69, 60.09);
            Console.WriteLine(electromyllyon);
        }
    }
    public class Mylly
    {
        public string Name { get; }
        public int Temperature { get; set; }
        public double Humidity { get; set; }

        private bool GetStatus()
        {
            if (Temperature > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        public Mylly(string initialName, int initialTemp, double initialHum)
        {
            this.Name = initialName;
            this.Temperature = initialTemp;
            this.Humidity = initialHum;
        }

        public override string ToString()
        {
            return this.Name + " is turned ON: " + GetStatus() + "\nTemperature is: " + this.Temperature + " \nHumidity is: " + this.Humidity + ".";
        }
    }
}