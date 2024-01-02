/*
    Make a program that asks the user for people's names and their year of birth. Name and Year of Birth are separated by a comma. 
    Entering names is finished by entering an empty entry. Create a struct to save and present people's data. After this, 
    the program tells how many names were given and displays them in order of age from youngest to oldest.
*/
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace T5_Names
{
    internal class T5
    {

        public static void Names()
        {
            List<Person> persons = new List<Person>();
            var personC = persons.OrderBy(x => x);


            while (true) //kysytään käyttäjältä nimiä ja ikiä
            {
                Console.WriteLine("Give a name and a birth year, seperated by a comma. Empty input will stop the input: ");
                string inputs = Console.ReadLine();

                if (inputs == "") //siihen asti että annetaan tyhjää
                {
                    break;
                }

                string[] parts = inputs.Split(new string[] { "," }, StringSplitOptions.None); //erotellaan nimet ja iät inputista
                string name = parts[0];                                                       //ja lisätään person Classina persons-listaan
                int age = Convert.ToInt32(parts[1]);
                persons.Add(new Person(name, age));
            }

            Console.WriteLine("Amount of given names: " + persons.Count); //tulostetaan inputtien määrä

            foreach (Person person in persons)
            {
                Console.WriteLine(person);
            }
        }

        public class Person //luodaan Person class jolla on nimi sekä ikä
        {
            public string Name { get; }
            public int Age { get; set; }

            public Person(string name, int age)
            {
                this.Name = name;
                this.Age = age;
            }
            public override string ToString()
            {
                return "Name: " + this.Name + " " + "Age: " + (2022 - this.Age);
            }
        }
    }
}