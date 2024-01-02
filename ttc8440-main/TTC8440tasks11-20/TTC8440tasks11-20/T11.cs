using System;
using System.Collections.Generic;

namespace T11_CD
{
    internal class T11
    {
        public static void CD()
        {
            Cd cd1 = new Cd();
            Console.WriteLine("CD: \n \n" + cd1);
        }
        // new class
        public class Cd
        {
            public string Artist { get; }
            public string Name { get; }
            public string Genre { get; }
            public double Year { get; }

            // Create a List and add a collection
            readonly List<string> songList = new List<string>();


            public Cd()
            {
                this.Artist = "Musta sapatti";
                this.Name = "Paranoid";
                this.Genre = "Hevimetalli";
                this.Year = 1970;
                string[] songs = {
                    "Paranoid -02:56",
                    "Paranoid -02:56",
                    "Paranoid -02:56",
                    "Paranoid -02:56",
                    "Paranoid -02:56",
                    "Paranoid -02:56",
                    "Paranoid -02:56"
                };
                songList.AddRange(songs);
            }

            public override string ToString()
            {
                {
                    return "    -Artist: " +
                        Artist + "\n    -Name: " +
                        Name + "\n    -Genre: " +
                        Genre + "\n    -Price: " +
                        Year + "\n    -Songs: " +
                        "\n    - Name: " +
                        String.Join("\n    - Name: ", songList);
                }
            }
        }
    }
}


