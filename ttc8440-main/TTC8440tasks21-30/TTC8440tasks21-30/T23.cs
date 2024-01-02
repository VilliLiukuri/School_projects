using System;
using System.Collections.Generic;

namespace T23_Queue
{
    internal class T23
    {
        public static void Queue()
        {
            CheckoutQueue checkoutQueue = new CheckoutQueue();

            while (true)
            {
                Console.Write("Enter customer name (or empty to stop): ");
                string customerName = Console.ReadLine();

                if (string.IsNullOrEmpty(customerName))
                {
                    break;
                }

                checkoutQueue.GoToQueue(customerName);
            }

            Console.WriteLine();
            Console.WriteLine("Customers in queue: {0}", checkoutQueue.Length);

            while (checkoutQueue.Length > 0)
            {
                Console.WriteLine(checkoutQueue.ExitQueue());
            }
        }
        public interface ICheckoutQueue
        {
            void GoToQueue(string customerName);
            string ExitQueue();
            int Length { get; }
        }

        public class CheckoutQueue : ICheckoutQueue
        {
            private Queue<string> customers;

            public CheckoutQueue()
            {
                customers = new Queue<string>();
            }

            public void GoToQueue(string customerName)
            {
                customers.Enqueue(customerName);
                Console.WriteLine("Added customer {0}. Customers in queue: {1}", customerName, Length);
            }

            public string ExitQueue()
            {
                if (customers.Count == 0)
                {
                    throw new InvalidOperationException("Queue is empty");
                }

                return customers.Dequeue();
            }

            public int Length
            {
                get { return customers.Count; }
            }
        }
    }
}