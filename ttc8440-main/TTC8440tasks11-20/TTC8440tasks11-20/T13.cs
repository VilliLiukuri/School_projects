using System;

namespace T13_Elvevator
{
    internal class T13
    {
        public static void Elevatorio()
        {
            Elevator elevator = new Elevator();
            Console.WriteLine("Elevator is now in floor : " + elevator.CurrentFloor);

            while (true)
            {
                Console.Write("Give a new floor number (1-5) > ");
                string input = Console.ReadLine();

                if (input == "")
                {
                    break;
                }

                if (!int.TryParse(input, out int floor))
                {
                    Console.WriteLine("Invalid input. Please enter a number between 1 and 5.");
                    continue;
                }

                if (elevator.GoTo(floor, out string message))
                {
                    Console.WriteLine("Elevator is now in floor : " + elevator.CurrentFloor);
                }

                else
                {
                    Console.WriteLine(message);
                }
            }
        }
        public class Elevator
        {
            private int currentFloor = 1;

            public int CurrentFloor
            {
                get { return currentFloor; }
            }

            public bool GoTo(int floor, out string message)
            {
                message = "";
                if (floor < 1)
                {
                    message = "Cant go trough the floor!";
                    return false;
                }
                else if (floor > 5)
                {
                    message = "Cant go trough roof!";
                    return false;
                }
                else
                {
                    currentFloor = floor;
                    return true;
                }
            }
        }
    }
}