using System;
using System.Collections.Generic;
using System.Linq;

namespace T2_Hill_Jumping
{
    internal class T2
    {
        public static void HillJumping()
        {
            Console.WriteLine("Give points: ");
            int points = Convert.ToInt32(Console.ReadLine()); // First judge

            Console.WriteLine("Give points: ");
            int pointsOne = Convert.ToInt32(Console.ReadLine()); // Second judge

            Console.WriteLine("Give points: ");
            int pointsTwo = Convert.ToInt32(Console.ReadLine()); // Thrid judge

            Console.WriteLine("Give points: ");
            int pointsThree = Convert.ToInt32(Console.ReadLine()); // Fouth judge

            Console.WriteLine("Give points: ");
            int pointsFour = Convert.ToInt32(Console.ReadLine()); // Fifth judge

            List<int> listOfPoints = new List<int>() { points, pointsOne, pointsTwo, pointsThree, pointsFour }; // List of points

            int score = listOfPoints.Sum() - listOfPoints.Min(); // List of points - minimum score

            int scoreFinal = score - listOfPoints.Max(); // List of points - minimumscore - maximum score

            Console.WriteLine("Total points are " + scoreFinal); // Total score, without lowest and highest score
        }
    }
}