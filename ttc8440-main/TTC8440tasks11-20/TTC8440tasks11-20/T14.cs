using System;

namespace T14_Amplifier
{
    internal class T14
    {
        public static void Amplifieri()
        {
            Amplifier amplifier = new Amplifier();

            while (true)
            {
                Console.Write("Give a new volume value (0-100) > ");
                string input = Console.ReadLine();

                if (input == "")
                {
                    break;
                }

                if (!int.TryParse(input, out int volume))
                {
                    Console.WriteLine("Invalid input. Please enter a number between 1 and 100.");
                    continue;
                }

                if (amplifier.GoTo(volume, out string message))
                {
                    Console.WriteLine("Volume is now set in : " + amplifier.currentVolume);
                }

                else
                {
                    Console.WriteLine(message);
                }
            }
        }
        public class Amplifier
        {
            public int currentVolume;


            public bool GoTo(int volume, out string message)
            {
                message = "";
                if (volume < 0)
                {
                    currentVolume = 0;
                    message = "Too low volume - Amplifier volume is set to minimum :  " + currentVolume;
                    return false;
                }
                else if (volume > 100)
                {
                    currentVolume = 100;
                    message = "Too much volume - Amplifier volume is set to maximum :  " + currentVolume;
                    return false;
                }
                else
                {
                    currentVolume = volume;
                    return true;
                }
            }
        }
    }
}