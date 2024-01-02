using System;
using System.Collections.Generic;

namespace T21_NewCD
{
    internal class T21
    {
        public static void NewCD()
        {
            List<Song> songs = new List<Song>()
        {
            new Song("War Pigs", TimeSpan.FromMinutes(7).Add(TimeSpan.FromSeconds(57))),
            new Song("Paranoid", TimeSpan.FromMinutes(2).Add(TimeSpan.FromSeconds(48))),
            new Song("Planet Caravan", TimeSpan.FromMinutes(4).Add(TimeSpan.FromSeconds(30))),
            new Song("Iron Man", TimeSpan.FromMinutes(5).Add(TimeSpan.FromSeconds(53))),
            new Song("Electric Funeral", TimeSpan.FromMinutes(4).Add(TimeSpan.FromSeconds(51))),
            new Song("Hand of Doom", TimeSpan.FromMinutes(7).Add(TimeSpan.FromSeconds(8))),
            new Song("Rat Salad", TimeSpan.FromMinutes(2).Add(TimeSpan.FromSeconds(31))),
            new Song("Fairies Wear Boots", TimeSpan.FromMinutes(6).Add(TimeSpan.FromSeconds(13)))
        };

            CD cd = new CD("Paranoid", "Black Sabbath", songs);

            Console.WriteLine("CD Information:");
            Console.WriteLine("Name: " + cd.Name);
            Console.WriteLine("Artist: " + cd.Artist);
            Console.WriteLine("Number of Songs: " + cd.NumberOfSongs);
            Console.WriteLine("Total Length: " + cd.TotalLength.ToString(@"mm\:ss") + " (min:sec)");

            Console.WriteLine("\nSongs:");
            foreach (Song song in cd.Songs)
            {
                Console.WriteLine(song.Name + " - " + song.Length.ToString(@"mm\:ss"));
            }
        }
        class Song
        {
            public string Name { get; set; }
            public TimeSpan Length { get; set; }

            public Song(string name, TimeSpan length)
            {
                Name = name;
                Length = length;
            }
        }

        class CD
        {
            public string Name { get; set; }
            public string Artist { get; set; }
            public List<Song> Songs { get; set; }

            public int NumberOfSongs
            {
                get { return Songs.Count; }
            }

            public TimeSpan TotalLength
            {
                get
                {
                    TimeSpan totalLength = new TimeSpan(0);
                    foreach (Song song in Songs)
                    {
                        totalLength += song.Length;
                    }
                    return totalLength;
                }
            }

            public CD(string name, string artist, List<Song> songs)
            {
                Name = name;
                Artist = artist;
                Songs = songs;
            }
        }
    }
}