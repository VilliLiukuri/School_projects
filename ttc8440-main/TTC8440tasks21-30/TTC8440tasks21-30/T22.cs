using System;
using System.Collections.Generic;

namespace T22_Cards
{
    internal class T22
    {
        public static void Cards()
        {
            CardDeck deck = new CardDeck();
            deck.Shuffle();
            deck.PrintCards();
        }
        public enum Suit
        {
            Heart,
            Square,
            Cross,
            Spade
        }

        public enum Value
        {
            Ace = 1,
            Two = 2,
            Three = 3,
            Four = 4,
            Five = 5,
            Six = 6,
            Seven = 7,
            Eight = 8,
            Nine = 9,
            Ten = 10,
            Jack = 11,
            Queen = 12,
            King = 13
        }

        public class Card
        {
            public Suit Suit { get; set; }
            public Value Value { get; set; }

            public Card(Suit suit, Value value)
            {
                Suit = suit;
                Value = value;
            }

            public override string ToString()
            {
                return $"{Value} of {Suit}s";
            }
        }

        public class CardDeck
        {
            private List<Card> cards = new List<Card>();

            public CardDeck()
            {
                foreach (Suit suit in Enum.GetValues(typeof(Suit)))
                {
                    foreach (Value value in Enum.GetValues(typeof(Value)))
                    {
                        cards.Add(new Card(suit, value));
                    }
                }
            }

            public void Shuffle()
            {
                Random random = new Random();
                int n = cards.Count;
                while (n > 1)
                {
                    n--;
                    int k = random.Next(n + 1);
                    Card card = cards[k];
                    cards[k] = cards[n];
                    cards[n] = card;
                }
            }

            public void PrintCards()
            {
                foreach (Card card in cards)
                {
                    Console.WriteLine(card);
                }
            }
        }
    }
}