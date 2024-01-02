using System;

namespace T15_Employee
{
    internal class T15
    {
        public static void employee()
        {
            Employee employee = new Employee("Kirsi Kernel", "Teacher", 1200);
            Boss boss = new Boss("Hanna Husso", "Head of Institute", 9000, "Audi", 5000);

            Console.WriteLine("Employee:");
            Console.WriteLine(employee + "\n");

            Console.WriteLine("Boss:");
            Console.WriteLine(boss + "\n");

            employee.Name = "Kirsi Kernel";
            employee.Profession = "Principal Teacher";
            employee.Salary = 2200;

            Console.WriteLine("Employee:");
            Console.WriteLine(employee + "\n");
        }
        class Employee
        {
            private string name;
            private string profession;
            private decimal salary;

            public Employee(string name, string profession, decimal salary)
            {
                this.name = name;
                this.profession = profession;
                this.salary = salary;
            }

            public string Name
            {
                get { return name; }
                set { name = value; }
            }

            public string Profession
            {
                get { return profession; }
                set { profession = value; }
            }

            public decimal Salary
            {
                get { return salary; }
                set { salary = value; }
            }

            public override string ToString()
            {
                return $"Name: {name} Profession: {profession} Salary: {salary}";
            }
        }

        class Boss : Employee
        {
            private string car;
            private decimal bonus;

            public Boss(string name, string profession, decimal salary, string car, decimal bonus)
                : base(name, profession, salary)
            {
                this.car = car;
                this.bonus = bonus;
            }

            public string Car
            {
                get { return car; }
                set { car = value; }
            }

            public decimal Bonus
            {
                get { return bonus; }
                set { bonus = value; }
            }

            public override string ToString()
            {
                return base.ToString() + $" Car: {car} Bonus: {bonus}";
            }
        }
    }
}