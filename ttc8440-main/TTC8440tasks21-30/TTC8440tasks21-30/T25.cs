using System;
using System.Collections.Generic;
using static T24_Vehicle.T24;

namespace T25_Movie
{
    internal class T25
    {
        public static void Movie()
        {
            // create a director
            Director directorOne = new Director()
            {
                Name = "Steven Spielberg",
                BirthYear = 1946
            };

            // create some actors
            Actor actorOne = new Actor()
            {
                Name = "Tom Hanks",
                BirthYear = 1956
            };

            Actor actorTwo = new Actor()
            {
                Name = "Matt Damon",
                BirthYear = 1970
            };

            // create a movie with the director and actors
            List<Actor> actorsOne = new List<Actor>() { actorOne, actorTwo };
            movie movieOne = new movie("Saving Private Ryan", 1998, directorOne, actorsOne);

            // create another movie with different data
            Director directorTwo = new Director()
            {
                Name = "Christopher Nolan",
                BirthYear = 1970
            };

            Actor actorThree = new Actor()
            {
                Name = "Leonardo DiCaprio",
                BirthYear = 1974
            };

            Actor actorFour = new Actor()
            {
                Name = "Tom Hardy",
                BirthYear = 1977
            };

            List<Actor> actorsTwo = new List<Actor>() { actorThree, actorFour };
            movie movieTwo = new movie("Inception", 2010, directorTwo, actorsTwo);

            // print out the movie information
            Console.WriteLine("Movie One:");
            Console.WriteLine("Name: " + movieOne.Name);
            Console.WriteLine("Year: " + movieOne.Year);
            Console.WriteLine("Director: " + movieOne.Director.Name + " -" + movieOne.Director.BirthYear);
            Console.WriteLine("Actors:");
            foreach (Actor actor in movieOne.Actors)
            {
                Console.WriteLine(" -" + actor.Name + " -" + actor.BirthYear);
            }

            Console.WriteLine();

            Console.WriteLine("Movie Two:");
            Console.WriteLine("Name: " + movieTwo.Name);
            Console.WriteLine("Year: " + movieTwo.Year);
            Console.WriteLine("Director: " + movieTwo.Director.Name + " -" + movieTwo.Director.BirthYear);
            Console.WriteLine("Actors:");
            foreach (Actor actor in movieTwo.Actors)
            {
                Console.WriteLine(" -" + actor.Name + " -" + actor.BirthYear);
            }
        }
    class Human
    {
        public string Name { get; set; }
        public int BirthYear { get; set; }
    }

    class Director : Human
    {
    }

    class Actor : Human
    {
    }

    class movie
    {
        public string Name { get; set; }
        public int Year { get; set; }
        public Director Director { get; }
        public List<Actor> Actors { get; }

        public movie(string name, int year, Director director, List<Actor> actors)
        {
            Name = name;
            Year = year;
            Director = director;
            Actors = actors;
        }
    }
}
}