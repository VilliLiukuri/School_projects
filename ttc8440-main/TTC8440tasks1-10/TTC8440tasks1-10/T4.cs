using System;



namespace T4_Palindrome
{
    internal class T4
    {
        public static void Palindrome()
        {
            string inputValue, revs = "";
            Console.WriteLine("Give sentence or a string ");
            inputValue = Console.ReadLine();
            for (int i = inputValue.Length - 1; i >= 0; i--) //String Reverse  
            {
                revs += inputValue[i].ToString();
            }
            if (revs == inputValue) // Checking whether string is palindrome or not  
            {
                Console.WriteLine("Sentence / string is palindrome \n -> {0} \n{1} <-", inputValue, revs);
            }
            else
            {
                Console.WriteLine("Sentence / string is not palindrome \n -> {0} \n{1} <-", inputValue, revs);
            }
        }
    }
}