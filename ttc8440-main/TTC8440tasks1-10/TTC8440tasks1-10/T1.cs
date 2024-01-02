using System;

namespace T1_School_Number
{
    internal class T1
    {
        public static void SchoolNumber()
        {
            Console.WriteLine("Hello, please enter your score: ");

            int grade;

            var result = Int32.TryParse(Console.ReadLine(), out grade);

            if (result)
            {
                if ((grade >= 0) && (grade <= 19))
                {
                    Console.WriteLine("Your grade -> 0");
                }
                else if ((grade >= 20) && (grade <= 29))
                {
                    Console.WriteLine("Your grade -> 1");
                }
                else if ((grade >= 30) && (grade <= 39))
                {
                    Console.WriteLine("Your grade -> 2");
                }
                else if ((grade >= 40) && (grade <= 49))
                {
                    Console.WriteLine("Your grade -> 3");
                }
                else if ((grade >= 50) && (grade <= 59))
                {
                    Console.WriteLine("Your grade -> 4");
                }
                else if ((grade >= 60) && (grade <= 70))
                {
                    Console.WriteLine("Your grade -> 5");
                }
            }
            else
            {
                Console.WriteLine("Please, enter a number");
            }
        }
    }
}