using System;

namespace T12_Tank
{
    internal class T12
    {
            public static void Tankki()
            {
                // Create a new tank
                Tank tank = new Tank();

                // Set the tank's properties
                tank.Name = "Volvo";
                tank.Type = "P1800";
                tank.CrewNumber = 3;


                // Accelerate the tank to a valid speed
                if (tank.AccelerateTo(15))
                {
                    Console.WriteLine($"Accerlate\n");
                    Console.WriteLine($"Tank speed: {tank.Speed}");
                    Console.WriteLine($"Tank name: {tank.Name}");
                    Console.WriteLine($"Tank type: {tank.Type}");
                    Console.WriteLine($"Tank crewnumber {tank.CrewNumber} \n \n");        
                }
                else
                {
                    Console.WriteLine("Invalid speed value. \n \n");
                }

            // Slow the tank to a valid speed
            if (tank.SlowTo(90))
            {
                Console.WriteLine("Slowto \n");
                Console.WriteLine($"Tank speed: {tank.Speed}");
                Console.WriteLine($"Tank name: {tank.Name}");
                Console.WriteLine($"Tank type: {tank.Type}");
                Console.WriteLine($"Tank crewnumber {tank.CrewNumber} \n \n");
            }
            else
            {
                Console.WriteLine("Invalid speed value. \n \n");
            }

            // Try to accelerate the tank to an invalid speed
            if (tank.AccelerateTo(188))
                {
                    Console.WriteLine($"Tank speed: {tank.Speed} \n \n");
                }
                else
                {
                    Console.WriteLine("Invalid speed value. \n \n");
                }
            }

        public class Tank
        {
            private int _crewNumber = 4;
            private float _speed;
            private readonly float _speedMax = 100;

            public string Name { get; set; }
            public string Type { get; set; }
            public int CrewNumber
            {
                get => _crewNumber;
                set
                {
                    if (value < 2)
                    {
                        Console.WriteLine("\n" + "CrewNumber cannot be less than 2. Value has been set to " + _crewNumber + "\n");
                    }
                    else if (value > 6)
                    {
                        Console.WriteLine("\n" + "CrewNumber cannot be greater than 6. Value has been set to " + _crewNumber + "\n");
                    }
                    else
                    {
                        _crewNumber = value;
                    }
                }
            }

            public float Speed => _speed;
            public float SpeedMax => _speedMax;

            public bool AccelerateTo(float speed)
            {
                if (speed >= 0 && speed <= _speedMax)
                {
                    _speed = speed;
                    return true;
                }
                return false;
            }

            public bool SlowTo(float speed)
            {
                if (speed >= 0 && speed <= _speedMax)
                {
                    _speed = speed;
                    return true;
                }
                return false;
            }
        }
    }
}