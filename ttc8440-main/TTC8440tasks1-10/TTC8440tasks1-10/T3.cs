using System;

namespace T3_Consumption
{
    internal class T3
    {
        public static void Consumption()
        {
            Console.WriteLine("Enter distance travelled: ");
            PrintD();
        }

        public static void PrintD()
        {
            int distance = Convert.ToInt32(Console.ReadLine());
            Random litres = new Random();
            double consumption = distance / (100 / litres.Next(6, 9));
            double gasPrice = 2.5;
            double cost = (distance / consumption) * gasPrice;
            Console.WriteLine("Fuel consumption is " + consumption + " liters " + "and it costs " + cost + " euros.");
        }
    }
}