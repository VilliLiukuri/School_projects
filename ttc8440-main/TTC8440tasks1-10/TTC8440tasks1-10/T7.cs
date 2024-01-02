using System;

namespace T7_Washing_machine
{
    internal class T7
    {
        public static void Washingmachine()
        {
            Machine electromylly = new Machine("electromachine", 0, 0,"");
            Console.WriteLine(electromylly);

            Machine electromyllyon = new Machine("electromachine", 69, 1,"Tehomyllytys");
            Console.WriteLine(electromyllyon);
        }
    }
    public class Machine
    {
        public string Name { get; }
        public int Time { get; set; }
        public int Water { get; set; }
        public string Program { get; }



        private bool GetStatus()
        {
            if (Time == 0)
            {
                return false;
            }
            else if (Water == 0)
            {
                return false;
            }
            else if (Program == "")
            {
                return false;
            }
            else
            {
                return true;
            }

        }


        public Machine(string initialName, int initialTime, int initialWater, string initialProgram)
        {
            this.Name = initialName;
            this.Time = initialTime;
            this.Water = initialWater;
            this.Program = initialProgram;
        }

        public override string ToString()
        {
            return this.Name + " is turned ON: " + GetStatus() + "\nTime is: " + this.Time + " \nWater is: " + this.Water + " \nProgram is: " + this.Program + ".";
        }
    }
}