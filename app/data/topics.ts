import type { Topic } from "~/types";

// Helper function to add category easily
const javaTopic = (topic: Omit<Topic, 'category'>): Topic => ({ ...topic, category: 'java' });
const dsaTopic = (topic: Omit<Topic, 'category'>): Topic => ({ ...topic, category: 'dsa' });

export const topics: Topic[] = [
  // --- Java Topics ---
  javaTopic({
    id: "introduction",
    title: "Introduction to Java",
    content: `
      <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
      <p>It is a general-purpose programming language intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Object-Oriented</li>
        <li>Platform Independent</li>
        <li>Simple</li>
        <li>Secure</li>
        <li>Robust</li>
        <li>Multithreaded</li>
      </ul>
    `,
    examples: [
      {
        title: "Hello World",
        code: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
        explanation: "This is the traditional first program. It prints 'Hello, World!' to the console. `public static void main(String[] args)` is the main entry point of any Java application."
      }
    ]
  }),
  javaTopic({
    id: "variables",
    title: "Variables and Data Types",
    content: `
      <p>Variables are containers for storing data values. In Java, there are different types of variables, for example:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">String</code> - stores text, such as "Hello". String values are surrounded by double quotes</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">float</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">char</code> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">boolean</code> - stores values with two states: true or false</li>
      </ul>
      <p>You must declare the type of a variable before you can use it. Java is statically-typed, meaning variable types are checked at compile time.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Primitive Types vs Reference Types:</h3>
      <p>Java has 8 primitive data types: <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">byte</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">short</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">int</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">long</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">float</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">double</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">boolean</code>, and <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">char</code>. All other types (like <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">String</code>, arrays, and custom classes) are reference types.</p>
    `,
    examples: [
      {
        title: "Declaring Variables",
        code: `
public class Variables {
  public static void main(String[] args) {
    String name = "Java"; // Reference type
    int version = 21;     // Primitive type
    float learningProgress = 0.1f; // Primitive type (Note the 'f')
    boolean isFun = true;  // Primitive type
    char grade = 'A';      // Primitive type

    System.out.println("Language: " + name);
    System.out.println("Version: " + version);
    System.out.println("Progress: " + learningProgress);
    System.out.println("Is it fun? " + isFun);
    System.out.println("Grade: " + grade);
  }
}`,
        explanation: "This example declares variables of different types (String, int, float, boolean, char) and prints their values."
      },
      {
        title: "Type Casting",
        code: `
public class TypeCasting {
    public static void main(String[] args) {
        // Widening Casting (Automatic)
        int myInt = 9;
        double myDouble = myInt; // int to double

        System.out.println(myInt);      // Outputs 9
        System.out.println(myDouble);   // Outputs 9.0

        // Narrowing Casting (Manual)
        double anotherDouble = 9.78;
        int anotherInt = (int) anotherDouble; // double to int

        System.out.println(anotherDouble); // Outputs 9.78
        System.out.println(anotherInt);    // Outputs 9 (Data loss)
    }
}`,
        explanation: "Type casting converts a value from one data type to another. Widening casting (smaller type to larger type) is automatic. Narrowing casting (larger type to smaller type) must be done manually using `(type)` and might lead to data loss."
      }
    ]
  }),
  javaTopic({
    id: "control-flow",
    title: "Control Flow (If/Else, Switch, Loops)",
    content: `
      <p>Control flow statements dictate the order in which the code executes.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Conditional Statements:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">if-else if-else</code>: Used to perform different actions based on different conditions.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">switch</code>: Selects one of many code blocks to be executed. Often used as an alternative to long <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">if-else if</code> chains when checking a single variable against multiple constant values. Remember <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">break</code> statements!</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Loops:</h3>
      <p>Used to execute a block of code repeatedly.</p>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">for</code> loop: Executes a block of code a specific number of times.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">while</code> loop: Executes a block of code as long as a specified condition is true. Condition checked *before* execution.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">do-while</code> loop: Executes the code block once *before* checking the condition. Guarantees at least one execution.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Enhanced for</code> loop (for-each): Iterates through elements in arrays or collections.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Branching Statements:</h3>
       <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">break</code>: Terminates the current loop or switch statement.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">continue</code>: Skips the current iteration of a loop and proceeds to the next iteration.</li>
      </ul>
    `,
    examples: [
      {
        title: "If/Else Example",
        code: `
public class ControlFlow {
  public static void main(String[] args) {
    int time = 22;
    if (time < 10) {
      System.out.println("Good morning.");
    } else if (time < 18) {
      System.out.println("Good day.");
    } else {
      System.out.println("Good evening.");
    }
    // Output: Good evening.
  }
}`,
        explanation: "Checks the value of 'time' and prints an appropriate greeting."
      },
       {
        title: "Switch Example",
        code: `
public class ControlFlow {
  public static void main(String[] args) {
    int day = 4;
    String dayString;
    switch (day) {
      case 1: dayString = "Monday"; break;
      case 2: dayString = "Tuesday"; break;
      case 3: dayString = "Wednesday"; break;
      case 4: dayString = "Thursday"; break; // Matches here
      case 5: dayString = "Friday"; break;
      case 6: dayString = "Saturday"; break;
      case 7: dayString = "Sunday"; break;
      default: dayString = "Invalid day"; break; // Optional default case
    }
    System.out.println(dayString); // Output: Thursday
  }
}`,
        explanation: "Uses a switch statement to find the name of the day based on the integer value. The `break` statement is crucial to prevent 'fall-through' to subsequent cases."
      },
      {
        title: "For Loop Example",
        code: `
public class ControlFlow {
  public static void main(String[] args) {
    System.out.println("Counting to 5:");
    for (int i = 1; i <= 5; i++) {
      if (i == 3) {
        continue; // Skip printing 3
      }
      System.out.println(i);
      if (i == 4) {
         break; // Stop loop after printing 4
      }
    }
    // Output: 1, 2, 4
  }
}`,
        explanation: "Uses a for loop to print numbers, demonstrating `continue` to skip an iteration and `break` to exit the loop early."
      },
      {
        title: "While Loop Example",
        code: `
public class ControlFlow {
  public static void main(String[] args) {
    int count = 0;
    System.out.println("Using while loop:");
    while (count < 3) {
      System.out.println("Count is: " + count);
      count++;
    }
    // Output: Count is: 0, Count is: 1, Count is: 2
  }
}`,
        explanation: "Uses a while loop to print the value of 'count' as long as it is less than 3."
      },
      {
        title: "Do-While Loop Example",
        code: `
public class ControlFlow {
  public static void main(String[] args) {
    int i = 5;
    System.out.println("Using do-while loop:");
    do {
      System.out.println("i is: " + i); // Runs once
      i--;
    } while (i > 5); // Condition (5 > 5) is false
    // Output: i is: 5
  }
}`,
        explanation: "Uses a do-while loop. The code inside the loop runs once before the condition is checked."
      }
    ]
  }),
  javaTopic({
    id: "methods",
    title: "Methods",
    content: `
      <p>A method is a block of code which only runs when it is called. You can pass data (parameters) into a method and methods can return data (return value).</p>
      <p>Methods promote code reusability and organization.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Defining a Method:</h3>
      <pre class="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm"><code>modifiers returnType methodName(parameterList) {
  // method body
}</code></pre>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">modifiers</code>: Optional (e.g., <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">public</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">static</code>).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">returnType</code>: The data type of the value the method returns. Use <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">void</code> if nothing is returned.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">methodName</code>: Name of the method (camelCase convention).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">parameterList</code>: Comma-separated list of input parameters (type and name), optional.</li>
      </ul>
       <h3 class="text-xl font-semibold mt-4 mb-2">Method Overloading:</h3>
       <p>Allows defining multiple methods with the same name in a class, as long as their parameter lists differ (either in number or type of parameters).</p>
    `,
    examples: [
      {
        title: "Simple Method (No Parameters, No Return)",
        code: `
public class Methods {
  // Static method belongs to the class
  static void printMessage() {
    System.out.println("Executing printMessage!");
  }

  public static void main(String[] args) {
    printMessage(); // Call the static method
  }
}`,
        explanation: "Defines and calls a simple static method `printMessage` that takes no arguments and returns nothing (`void`)."
      },
      {
        title: "Method with Parameters and Return Value",
        code: `
public class Methods {
  // Static method to add two integers
  static int add(int x, int y) {
    return x + y; // Returns the sum
  }

  public static void main(String[] args) {
    int num1 = 10;
    int num2 = 5;
    int sum = add(num1, num2); // Call add and store the result
    System.out.println(num1 + " + " + num2 + " = " + sum); // Output: 10 + 5 = 15
  }
}`,
        explanation: "The `add` method takes two `int` parameters and returns their sum (`int`). The `main` method calls `add` and uses the returned value."
      },
      {
        title: "Method Overloading",
        code: `
public class Methods {
  // Method 1: Add two integers
  static int addNumbers(int a, int b) {
    System.out.println("Adding two ints");
    return a + b;
  }

  // Method 2: Add three integers (Overloaded)
  static int addNumbers(int a, int b, int c) {
    System.out.println("Adding three ints");
    return a + b + c;
  }

  // Method 3: Add two doubles (Overloaded)
  static double addNumbers(double a, double b) {
     System.out.println("Adding two doubles");
    return a + b;
  }

  public static void main(String[] args) {
    System.out.println("Sum 1: " + addNumbers(5, 3));       // Calls Method 1
    System.out.println("Sum 2: " + addNumbers(5, 3, 2));    // Calls Method 2
    System.out.println("Sum 3: " + addNumbers(5.5, 3.2));   // Calls Method 3
  }
}`,
        explanation: "Demonstrates method overloading. Three methods named `addNumbers` exist, but they have different parameter lists (two ints, three ints, two doubles). The compiler determines which method to call based on the arguments provided."
      }
    ]
  }),
  javaTopic({
    id: "classes-objects",
    title: "Classes and Objects",
    content: `
      <p>Java is object-oriented. A <strong>Class</strong> is a blueprint or template for creating objects. An <strong>Object</strong> is an instance of a class.</p>
      <p>Classes encapsulate <strong>state</strong> (attributes/fields/instance variables) and <strong>behavior</strong> (methods).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Defining a Class:</h3>
      <pre class="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm"><code>modifiers class ClassName {
  // Fields (attributes)
  dataType fieldName;
  // Constructors
  ClassName(parameters) { ... }
  // Methods
  returnType methodName(parameters) { ... }
}</code></pre>
      <h3 class="text-xl font-semibold mt-4 mb-2">Creating an Object (Instantiation):</h3>
      <p>Use the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">new</code> keyword followed by a call to the class's constructor.</p>
      <pre class="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm"><code>ClassName objectName = new ClassName(arguments);</code></pre>
      <p>Access members (fields and methods) using the dot operator (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">.</code>): <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">objectName.fieldName</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">objectName.methodName()</code>.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Constructors:</h3>
      <p>Special methods used to initialize objects when they are created. They have the same name as the class and no return type. If you don't define a constructor, Java provides a default no-argument constructor.</p>
    `,
    examples: [
      {
        title: "Simple Class and Object",
        code: `
// Define the class (blueprint)
class Dog {
  // Fields (state)
  String name;
  String breed;
  int age;

  // Method (behavior)
  void bark() {
    System.out.println(name + " says: Woof!");
  }
}

public class ClassesObjects {
  public static void main(String[] args) {
    // Create an object (instance) of the Dog class
    Dog myDog = new Dog();

    // Assign values to the object's fields
    myDog.name = "Buddy";
    myDog.breed = "Golden Retriever";
    myDog.age = 3;

    // Access fields and call method
    System.out.println("Dog's Name: " + myDog.name);
    System.out.println("Dog's Breed: " + myDog.breed);
    myDog.bark(); // Output: Buddy says: Woof!
  }
}`,
        explanation: "A `Dog` class is defined with fields and a method. An object `myDog` is created, its fields are set, and its method is called."
      },
      {
        title: "Class with Constructor",
        code: `
class Car {
  String model;
  int year;

  // Constructor with parameters
  public Car(String carModel, int carYear) {
    System.out.println("Car object created!");
    model = carModel; // Initialize fields using parameters
    year = carYear;
  }

  void displayInfo() {
    System.out.println("Model: " + model + ", Year: " + year);
  }
}

public class Constructors {
  public static void main(String[] args) {
    // Create Car objects using the constructor
    Car car1 = new Car("Toyota Camry", 2021);
    Car car2 = new Car("Honda Civic", 2023);

    car1.displayInfo(); // Output: Model: Toyota Camry, Year: 2021
    car2.displayInfo(); // Output: Model: Honda Civic, Year: 2023
  }
}`,
        explanation: "The `Car` class has a constructor that takes `model` and `year` arguments to initialize the object upon creation using `new Car(...)`. This ensures objects are created in a valid initial state."
      }
    ]
  }),
  javaTopic({
    id: "arrays",
    title: "Arrays",
    content: `
      <p>Arrays store a fixed-size sequential collection of elements of the same type.</p>
      <p>Declaration: <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">dataType[] arrayName;</code> or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">dataType arrayName[];</code></p>
      <p>Instantiation: <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">arrayName = new dataType[size];</code></p>
      <p>Initialization: Can be done at declaration <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">dataType[] arrayName = {value1, value2, ...};</code></p>
      <p>Elements are accessed via zero-based index: <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">arrayName[index]</code>.</p>
      <p>The size of an array is fixed once created. Use <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">arrayName.length</code> to get the size.</p>
    `,
    examples: [
      {
        title: "Creating and Accessing Arrays",
        code: `
public class ArraysExample {
  public static void main(String[] args) {
    // Declare and initialize an array of integers
    int[] numbers = {10, 20, 30, 40, 50};

    // Declare, instantiate, and initialize separately
    String[] fruits = new String[3];
    fruits[0] = "Apple";
    fruits[1] = "Banana";
    fruits[2] = "Orange";

    // Access elements
    System.out.println("First number: " + numbers[0]); // Output: 10
    System.out.println("Second fruit: " + fruits[1]); // Output: Banana

    // Get array length
    System.out.println("Length of numbers array: " + numbers.length); // Output: 5
    System.out.println("Length of fruits array: " + fruits.length); // Output: 3

    // Modify an element
    numbers[0] = 15;
    System.out.println("Modified first number: " + numbers[0]); // Output: 15
  }
}`,
        explanation: "Demonstrates declaring, instantiating, initializing, accessing, and modifying array elements, and getting the array length."
      },
      {
        title: "Looping Through an Array",
        code: `
public class ArraysExample {
  public static void main(String[] args) {
    String[] colors = {"Red", "Green", "Blue"};

    System.out.println("Using standard for loop:");
    for (int i = 0; i < colors.length; i++) {
      System.out.println("Color at index " + i + ": " + colors[i]);
    }

    System.out.println("\\nUsing enhanced for loop (for-each):");
    for (String color : colors) {
      System.out.println("Color: " + color);
    }
  }
}`,
        explanation: "Shows iterating through array elements using both a standard `for` loop (with index) and an enhanced `for` loop (for-each)."
      },
      {
        title: "Multidimensional Arrays",
        code: `
public class ArraysExample {
    public static void main(String[] args) {
        // Declare and initialize a 2D array (3 rows, 2 columns)
        int[][] matrix = { {1, 2}, {3, 4}, {5, 6} };

        // Access element at row 1, column 0
        System.out.println("Element at [1][0]: " + matrix[1][0]); // Output: 3

        // Iterate through the 2D array
        System.out.println("\\nIterating through matrix:");
        for (int row = 0; row < matrix.length; row++) { // matrix.length gives number of rows
            for (int col = 0; col < matrix[row].length; col++) { // matrix[row].length gives columns in that row
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println(); // New line after each row
        }
        /* Output:
           1 2
           3 4
           5 6
        */
    }
}`,
        explanation: "Demonstrates a 2D array (an array of arrays). Elements are accessed using two indices `[row][column]`. Nested loops are used for iteration."
      }
    ]
  }),
  javaTopic({
    id: "inheritance",
    title: "Inheritance",
    content: `
      <p>Inheritance is a fundamental principle of Object-Oriented Programming (OOP) where a new class (subclass or derived class) derives properties (fields) and behaviors (methods) from an existing class (superclass or base class).</p>
      <p>It promotes code reuse and establishes an "is-a" relationship (e.g., a <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Dog</code> is an <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Animal</code>).</p>
      <p>Use the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">extends</code> keyword to inherit from a class. Java supports single inheritance for classes (a class can only extend one superclass).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">super</code> keyword: Used to call the superclass's constructor or access members of the superclass.</li>
        <li>Method Overriding: A subclass provides a specific implementation for a method already defined in its superclass. The method signature (name, parameters) must be the same. Use the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">@Override</code> annotation (optional but recommended).</li>
        <li>Polymorphism: Allows objects of different classes (related by inheritance) to be treated as objects of a common superclass.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">final</code> keyword: Can prevent class inheritance (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">final class</code>) or method overriding (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">final method</code>).</li>
        <li>All classes implicitly inherit from the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.lang.Object</code> class.</li>
      </ul>
    `,
    examples: [
      {
        title: "Basic Inheritance",
        code: `
// Superclass
class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

// Subclass inheriting from Animal
class Dog extends Animal {
    String breed;

    // Constructor calls superclass constructor using super()
    public Dog(String name, String breed) {
        super(name); // Must be the first statement in constructor
        this.breed = breed;
    }

    // Dog-specific method
    public void bark() {
        System.out.println(name + " says Woof!");
    }

    // Method Overriding
    @Override
    public void eat() {
        System.out.println(name + " (a " + breed + ") is eating dog food.");
    }
}

public class InheritanceTest {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");

        myDog.eat();    // Calls overridden method in Dog class
        myDog.sleep();  // Calls inherited method from Animal class
        myDog.bark();   // Calls method specific to Dog class

        System.out.println("Dog's name: " + myDog.name); // Access inherited field
        System.out.println("Dog's breed: " + myDog.breed);
    }
}`,
        explanation: "The `Dog` class extends the `Animal` class, inheriting `name`, `eat()`, and `sleep()`. The `Dog` constructor calls the `Animal` constructor using `super()`. `Dog` adds its own field (`breed`) and method (`bark()`), and overrides the `eat()` method."
      },
      {
        title: "Polymorphism Example",
        code: `
class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
     @Override
    public void makeSound() {
        System.out.println("Moo!");
    }
}

public class PolymorphismTest {
    public static void main(String[] args) {
        // Reference type is Animal, Object type can be Animal, Cat, or Cow
        Animal myAnimal;

        myAnimal = new Cat(); // A Cat object referred by an Animal reference
        myAnimal.makeSound(); // Output: Meow! (Cat's version is called)

        myAnimal = new Cow(); // A Cow object referred by an Animal reference
        myAnimal.makeSound(); // Output: Moo! (Cow's version is called)

        // This allows treating different objects uniformly
        Animal[] animals = {new Cat(), new Cow(), new Animal()};
        for (Animal animal : animals) {
            animal.makeSound(); // Calls the appropriate method based on the actual object type
        }
        /* Output:
           Meow!
           Moo!
           Some generic animal sound
        */
    }
}`,
        explanation: "Polymorphism allows treating objects of subclasses (`Cat`, `Cow`) as objects of their superclass (`Animal`). When a method like `makeSound()` is called on an `Animal` reference, the actual method executed depends on the object's runtime type (the specific subclass instance)."
      }
    ]
  }),
  javaTopic({
    id: "exceptions",
    title: "Exception Handling",
    content: `
      <p>An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. Java provides a robust mechanism to handle these runtime errors gracefully.</p>
      <p>Exceptions are objects that represent error conditions. They are typically thrown (raised) when an error occurs.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Exception Hierarchy:</h3>
      <p>All exception types are subclasses of the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.lang.Throwable</code> class. Key branches:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Error</code>: Represents serious problems usually outside the control of the application (e.g., <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">OutOfMemoryError</code>). Applications generally shouldn't try to catch these.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Exception</code>: Represents conditions that applications might want to catch.
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><strong>Checked Exceptions</strong>: Subclasses of <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Exception</code> (excluding <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">RuntimeException</code> and its subclasses). The compiler forces you to handle them using <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">try-catch</code> or declare them using <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">throws</code> (e.g., <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">IOException</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">SQLException</code>).</li>
            <li><strong>Unchecked Exceptions (Runtime Exceptions)</strong>: Subclasses of <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">RuntimeException</code>. The compiler doesn't force handling (e.g., <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">NullPointerException</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayIndexOutOfBoundsException</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArithmeticException</code>).</li>
          </ul>
        </li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Handling Exceptions:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">try</code>: Encloses the code that might throw an exception.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">catch</code>: Catches and handles specific types of exceptions. Multiple catch blocks can be used, ordered from most specific to most general.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">finally</code>: Contains code that *always* executes, whether an exception occurred or not (useful for cleanup like closing resources).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">throw</code>: Manually throws an exception object.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">throws</code>: Declares that a method might throw certain checked exceptions (delegating handling to the caller).</li>
      </ul>
       <h3 class="text-xl font-semibold mt-4 mb-2">Try-with-Resources:</h3>
       <p>A simplified way to handle resources (like files or network connections) that must be closed. Resources declared in the try statement are automatically closed at the end of the block.</p>
    `,
    examples: [
      {
        title: "Basic Try-Catch-Finally",
        code: `
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            // Code that might cause an exception
            int[] numbers = {1, 2, 3};
            System.out.println("Accessing element 5: " + numbers[5]); // Causes ArrayIndexOutOfBoundsException
            System.out.println("This line won't be executed.");
        } catch (ArrayIndexOutOfBoundsException e) {
            // Handle the specific exception
            System.err.println("Error: Array index is out of bounds!");
            System.err.println("Exception message: " + e.getMessage());
            // e.printStackTrace(); // Often useful for debugging
        } catch (Exception e) {
            // Catch any other general exceptions (should be after specific ones)
             System.err.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            // This block always executes
            System.out.println("The 'try-catch' block is finished.");
        }

        System.out.println("Program continues after handling exception...");
    }
}`,
        explanation: "The code tries to access an invalid array index inside the `try` block. The `ArrayIndexOutOfBoundsException` is caught by the corresponding `catch` block. The `finally` block executes regardless, and the program continues after the try-catch structure."
      },
      {
        title: "Checked Exception (throws)",
        code: `
import java.io.IOException;
import java.io.FileReader;
import java.io.BufferedReader;

public class CheckedExceptionExample {

    // Method declares it might throw IOException (a checked exception)
    public static String readFirstLine(String filePath) throws IOException {
        // Try-with-resources automatically closes reader
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            return reader.readLine();
        }
        // No catch here - caller must handle or declare throws
    }

    public static void main(String[] args) {
        try {
            String line = readFirstLine("nonexistentfile.txt");
            System.out.println("First line: " + line);
        } catch (IOException e) {
            // main method handles the exception thrown by readFirstLine
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}`,
        explanation: "`readFirstLine` performs file I/O, which can throw `IOException` (a checked exception). Because it doesn't handle it internally, it declares `throws IOException`. The `main` method calls `readFirstLine` and *must* either catch the `IOException` (as shown) or declare `throws IOException` itself."
      },
       {
        title: "Throwing an Exception",
        code: `
public class ThrowExample {

    public static void checkAge(int age) {
        if (age < 18) {
            // Manually throw an unchecked exception
            throw new ArithmeticException("Access denied - You must be at least 18 years old.");
        } else {
            System.out.println("Access granted - You are old enough!");
        }
    }

    public static void main(String[] args) {
        try {
             checkAge(15); // This will throw the exception
             // checkAge(20); // This would grant access
        } catch (ArithmeticException e) {
            System.err.println("Caught exception: " + e.getMessage());
        }
    }
}`,
        explanation: "The `checkAge` method throws an `ArithmeticException` (an unchecked exception type chosen here for demonstration) if the age is below 18. The `main` method calls `checkAge` within a `try` block and catches the potential exception."
      }
    ]
  }),
   javaTopic({
    id: "arraylist",
    title: "ArrayList (Collections)",
    content: `
      <p>The <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayList</code> class (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.util.ArrayList</code>) is a resizable-array implementation of the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">List</code> interface. Unlike standard arrays, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayList</code> can dynamically grow or shrink in size.</p>
      <p>It stores elements in the order they are added and allows duplicate elements. It provides methods for adding, removing, accessing, and searching elements.</p>
      <p><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayList</code> uses Generics (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded"><Type></code>) to specify the type of objects it will store, providing type safety at compile time.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Methods:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">add(element)</code>: Appends an element to the end of the list.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">add(index, element)</code>: Inserts an element at a specific index.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">get(index)</code>: Returns the element at a specific index.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">set(index, element)</code>: Replaces the element at a specific index.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">remove(index)</code>: Removes the element at a specific index.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">remove(object)</code>: Removes the first occurrence of the specified element.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">size()</code>: Returns the number of elements in the list.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">contains(object)</code>: Returns true if the list contains the specified element.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">clear()</code>: Removes all elements from the list.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">isEmpty()</code>: Returns true if the list contains no elements.</li>
      </ul>
      <p><strong>Note:</strong> <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayList</code> can only store objects (Reference Types). For primitive types (like <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">int</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">double</code>), use their corresponding wrapper classes (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Integer</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Double</code>). Autoboxing often handles this conversion automatically.</p>
    `,
    examples: [
      {
        title: "Creating and Using ArrayList",
        code: `
import java.util.ArrayList; // Import the ArrayList class
import java.util.Collections; // Import for sorting

public class ArrayListExample {
    public static void main(String[] args) {
        // Create an ArrayList to store Strings
        ArrayList<String> cars = new ArrayList<String>();

        // Add elements
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        System.out.println("Initial list: " + cars); // Output: [Volvo, BMW, Ford, Mazda]

        // Get an element
        System.out.println("Element at index 1: " + cars.get(1)); // Output: BMW

        // Set (replace) an element
        cars.set(0, "Opel");
        System.out.println("After setting index 0: " + cars); // Output: [Opel, BMW, Ford, Mazda]

        // Remove an element by index
        cars.remove(2); // Removes "Ford"
        System.out.println("After removing index 2: " + cars); // Output: [Opel, BMW, Mazda]

        // Get the size
        System.out.println("Current size: " + cars.size()); // Output: 3

        // Check if an element exists
        System.out.println("Contains 'BMW'? " + cars.contains("BMW")); // Output: true

        // Iterate using enhanced for loop
        System.out.println("Iterating through cars:");
        for (String car : cars) {
            System.out.println("- " + car);
        }

        // Sort the list
        Collections.sort(cars);
        System.out.println("Sorted list: " + cars); // Output: [BMW, Mazda, Opel]

        // Clear the list
        cars.clear();
        System.out.println("After clearing: " + cars); // Output: []
        System.out.println("Is empty? " + cars.isEmpty()); // Output: true
    }
}`,
        explanation: "Demonstrates creating an `ArrayList` of Strings, adding, getting, setting, removing elements, checking size and contents, iterating, sorting, and clearing the list."
      },
      {
        title: "ArrayList with Integers (Wrapper Class)",
        code: `
import java.util.ArrayList;

public class ArrayListIntegers {
    public static void main(String[] args) {
        // Create an ArrayList to store Integers
        ArrayList<Integer> numbers = new ArrayList<>(); // Diamond operator <> infers type

        // Add primitive int values (Autoboxing converts int to Integer)
        numbers.add(10);
        numbers.add(25);
        numbers.add(5);

        System.out.println("Numbers list: " + numbers); // Output: [10, 25, 5]

        // Access element (Autounboxing converts Integer back to int if needed)
        int firstNumber = numbers.get(0);
        System.out.println("First number: " + firstNumber); // Output: 10

        // Calculate sum
        int sum = 0;
        for (Integer num : numbers) { // Can also use 'int num' due to autounboxing
            sum += num;
        }
        System.out.println("Sum: " + sum); // Output: 40
    }
}`,
        explanation: "Shows using `ArrayList` with the `Integer` wrapper class to store integer values. Java's autoboxing/unboxing feature automatically converts between `int` and `Integer` where needed."
      }
    ]
  }),

  // --- DSA Topics ---
  dsaTopic({
    id: "big-o",
    title: "Big O Notation",
    content: `
      <p>Big O notation is a mathematical notation used in computer science to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. It's used to classify algorithms according to how their run time or space requirements grow as the input size grows.</p>
      <p>Essentially, it tells you how the performance of an algorithm scales with the size of the input data (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">n</code>).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Big O Complexities (Best to Worst):</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(1)</code> - Constant Time: Execution time is constant, regardless of input size (e.g., accessing an array element by index).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(log n)</code> - Logarithmic Time: Execution time grows logarithmically with input size (e.g., binary search). Efficient for large inputs.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(n)</code> - Linear Time: Execution time grows linearly with input size (e.g., iterating through an array once).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(n log n)</code> - Linearithmic Time: Execution time grows by n * log n (e.g., efficient sorting algorithms like Merge Sort, Quick Sort).</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(n²)</code> - Quadratic Time: Execution time grows quadratically (e.g., nested loops iterating over the same input, Bubble Sort). Becomes slow quickly.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(2ⁿ)</code> - Exponential Time: Execution time doubles with each addition to the input size (e.g., recursive calculation of Fibonacci numbers without optimization). Very slow.</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">O(n!)</code> - Factorial Time: Execution time grows factorially (e.g., Traveling Salesman Problem brute-force solution). Extremely slow.</li>
      </ul>
      <p>When analyzing algorithms, we usually focus on the <strong>worst-case scenario</strong> and simplify by dropping constants and lower-order terms (e.g., O(2n + 1) becomes O(n)).</p>
    `,
    examples: [
      {
        title: "O(1) - Constant Time",
        code: `
// Accessing an element in an array by index
int[] arr = {10, 20, 30, 40, 50};
int element = arr[2]; // This takes the same amount of time regardless of arr's size
System.out.println(element);`,
        explanation: "Accessing `arr[2]` is a direct memory access. It doesn't matter if the array has 5 or 5 million elements; getting the element at a specific index takes roughly the same, constant amount of time."
      },
      {
        title: "O(n) - Linear Time",
        code: `
// Finding the maximum value in an unsorted array
int[] arr = {5, 1, 8, 3, 9, 2};
int maxVal = arr[0];
for (int i = 1; i < arr.length; i++) { // Loop runs 'n' times (n = array length)
    if (arr[i] > maxVal) {
        maxVal = arr[i];
    }
}
System.out.println("Max value: " + maxVal);`,
        explanation: "To find the maximum value, we potentially have to look at every single element in the array once. If the array size doubles, the time taken roughly doubles. The time grows linearly with the input size `n`."
      },
      {
        title: "O(n²) - Quadratic Time",
        code: `
// Printing all pairs in an array (Simple Nested Loop)
int[] arr = {1, 2, 3, 4};
for (int i = 0; i < arr.length; i++) {      // Outer loop runs n times
    for (int j = 0; j < arr.length; j++) {  // Inner loop runs n times for each outer iteration
        System.out.println("(" + arr[i] + ", " + arr[j] + ")");
    }
}
// Total operations roughly n * n = n²`,
        explanation: "The inner loop runs `n` times for *each* iteration of the outer loop (which also runs `n` times). This results in approximately `n * n = n²` operations. If the array size doubles, the time taken increases by a factor of four (2²)."
      }
    ]
  }),
  dsaTopic({
    id: "stacks",
    title: "Stacks",
    content: `
      <p>A Stack is a linear data structure that follows the <strong>Last-In, First-Out (LIFO)</strong> principle. Imagine a stack of plates: you add new plates to the top, and you remove plates from the top.</p>
      <p>The last element added to the stack is the first one to be removed.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Core Operations:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">push(element)</code>: Adds an element to the top of the stack. (O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">pop()</code>: Removes and returns the element from the top of the stack. Throws an exception if the stack is empty. (O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">peek()</code> or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">top()</code>: Returns the element at the top of the stack without removing it. Throws an exception if the stack is empty. (O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">isEmpty()</code>: Checks if the stack is empty. (O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">size()</code>: Returns the number of elements in the stack. (O(1))</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Use Cases:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Function call stack (managing active function calls)</li>
        <li>Undo/Redo functionality in software</li>
        <li>Parsing expressions (e.g., checking balanced parentheses)</li>
        <li>Backtracking algorithms (e.g., maze solving)</li>
        <li>Browser history (back button)</li>
      </ul>
      <p>In Java, you can use the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.util.Stack</code> class (older, extends Vector) or preferably use a <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Deque</code> implementation like <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayDeque</code> for stack operations (<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">push</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">pop</code>, <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">peek</code>).</p>
    `,
    examples: [
      {
        title: "Using java.util.Stack",
        code: `
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> bookStack = new Stack<>();

        // Push elements onto the stack
        bookStack.push("The Hobbit");
        bookStack.push("Foundation");
        bookStack.push("Dune");

        System.out.println("Stack: " + bookStack); // Output: [The Hobbit, Foundation, Dune]
        System.out.println("Size: " + bookStack.size()); // Output: 3

        // Peek at the top element
        System.out.println("Top element (peek): " + bookStack.peek()); // Output: Dune

        // Pop elements from the stack
        String topBook = bookStack.pop();
        System.out.println("Popped: " + topBook); // Output: Dune
        System.out.println("Stack after pop: " + bookStack); // Output: [The Hobbit, Foundation]

        System.out.println("Is empty? " + bookStack.isEmpty()); // Output: false

        bookStack.pop();
        bookStack.pop();
        System.out.println("Is empty now? " + bookStack.isEmpty()); // Output: true

        // Trying to pop or peek an empty stack throws EmptyStackException
        // bookStack.pop(); // This would cause an error
    }
}`,
        explanation: "Demonstrates basic stack operations (push, pop, peek, isEmpty, size) using Java's `Stack` class. Notice how 'Dune', the last book pushed, is the first one peeked and popped (LIFO)."
      },
      {
        title: "Using ArrayDeque as a Stack",
        code: `
import java.util.ArrayDeque;
import java.util.Deque; // Use Deque interface

public class DequeStackExample {
    public static void main(String[] args) {
        // Prefer Deque interface, implemented by ArrayDeque
        Deque<Integer> numberStack = new ArrayDeque<>();

        // Use push() for adding to the top
        numberStack.push(10);
        numberStack.push(20);
        numberStack.push(30);

        System.out.println("Stack (ArrayDeque): " + numberStack); // Output: [30, 20, 10] (Top is first)

        // Use peek() to see the top
        System.out.println("Top element (peek): " + numberStack.peek()); // Output: 30

        // Use pop() to remove from the top
        int topNumber = numberStack.pop();
        System.out.println("Popped: " + topNumber); // Output: 30
        System.out.println("Stack after pop: " + numberStack); // Output: [20, 10]

        System.out.println("Size: " + numberStack.size()); // Output: 2
    }
}`,
        explanation: "`ArrayDeque` is generally recommended over `Stack` for LIFO behavior in modern Java. It implements the `Deque` (Double-Ended Queue) interface, which provides stack methods like `push`, `pop`, and `peek`. Note that the string representation might show the 'top' element first."
      }
    ]
  }),
  dsaTopic({
    id: "queues",
    title: "Queues",
    content: `
      <p>A Queue is a linear data structure that follows the <strong>First-In, First-Out (FIFO)</strong> principle. Think of a queue of people waiting for a bus: the first person to join the queue is the first person to get on the bus.</p>
      <p>The first element added to the queue is the first one to be removed.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Core Operations:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">add(element)</code> or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">offer(element)</code>: Adds an element to the rear (end) of the queue. <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">add</code> throws an exception if the queue is full (for capacity-restricted queues), while <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">offer</code> returns <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">false</code>. (Usually O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">remove()</code> or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">poll()</code>: Removes and returns the element from the front (head) of the queue. <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">remove</code> throws an exception if the queue is empty, while <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">poll</code> returns <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">null</code>. (Usually O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">element()</code> or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">peek()</code>: Returns the element at the front of the queue without removing it. <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">element</code> throws an exception if the queue is empty, while <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">peek</code> returns <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">null</code>. (Usually O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">isEmpty()</code>: Checks if the queue is empty. (O(1))</li>
        <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">size()</code>: Returns the number of elements in the queue. (O(1))</li>
      </ul>
       <h3 class="text-xl font-semibold mt-4 mb-2">Common Use Cases:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Handling requests in order (e.g., print queue, web server requests)</li>
        <li>Breadth-First Search (BFS) algorithm in graphs and trees</li>
        <li>Scheduling tasks (e.g., CPU scheduling)</li>
        <li>Simulations involving waiting lines</li>
        <li>Buffering data (e.g., streaming)</li>
      </ul>
      <p>In Java, the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.util.Queue</code> interface defines the queue contract. Common implementations include <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">LinkedList</code> (implements both List and Deque/Queue) and <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">ArrayDeque</code> (often more efficient).</p>
    `,
    examples: [
      {
        title: "Using LinkedList as a Queue",
        code: `
import java.util.LinkedList;
import java.util.Queue; // Use Queue interface

public class QueueLinkedListExample {
    public static void main(String[] args) {
        // LinkedList implements the Queue interface
        Queue<String> customerQueue = new LinkedList<>();

        // Add elements to the rear (offer is generally preferred)
        customerQueue.offer("Alice");
        customerQueue.offer("Bob");
        customerQueue.offer("Charlie");

        System.out.println("Queue: " + customerQueue); // Output: [Alice, Bob, Charlie] (Front is first)
        System.out.println("Size: " + customerQueue.size()); // Output: 3

        // Peek at the front element
        System.out.println("Front element (peek): " + customerQueue.peek()); // Output: Alice

        // Poll elements from the front
        String firstCustomer = customerQueue.poll();
        System.out.println("Served (polled): " + firstCustomer); // Output: Alice
        System.out.println("Queue after poll: " + customerQueue); // Output: [Bob, Charlie]

        System.out.println("Is empty? " + customerQueue.isEmpty()); // Output: false

        customerQueue.poll();
        customerQueue.poll();
        System.out.println("Is empty now? " + customerQueue.isEmpty()); // Output: true

        // Trying to poll or peek an empty queue returns null
        System.out.println("Polling empty queue: " + customerQueue.poll()); // Output: null
        // customerQueue.remove(); // This would throw NoSuchElementException
    }
}`,
        explanation: "Demonstrates basic queue operations (offer, poll, peek, isEmpty, size) using `LinkedList` as the `Queue` implementation. 'Alice', the first customer added, is the first one peeked and polled (FIFO)."
      },
      {
        title: "Using ArrayDeque as a Queue",
        code: `
import java.util.ArrayDeque;
import java.util.Queue; // Use Queue interface

public class QueueArrayDequeExample {
    public static void main(String[] args) {
        // ArrayDeque also implements the Queue interface efficiently
        Queue<Integer> taskQueue = new ArrayDeque<>();

        // Add tasks to the rear
        taskQueue.offer(101);
        taskQueue.offer(102);
        taskQueue.offer(103);

        System.out.println("Task Queue: " + taskQueue); // Output: [101, 102, 103]

        // View the next task
        System.out.println("Next task (peek): " + taskQueue.peek()); // Output: 101

        // Process tasks from the front
        System.out.println("Processing task: " + taskQueue.poll()); // Output: 101
        System.out.println("Remaining tasks: " + taskQueue); // Output: [102, 103]
    }
}`,
        explanation: "`ArrayDeque` can also be used as an efficient FIFO queue. It provides the same `Queue` interface methods (`offer`, `poll`, `peek`)."
      }
    ]
  }),
  dsaTopic({
    id: "linked-lists",
    title: "Singly Linked Lists",
    content: `
      <p>A Linked List is a linear data structure where elements are not stored at contiguous memory locations. Instead, elements are linked using pointers (references in Java).</p>
      <p>A <strong>Singly Linked List</strong> consists of nodes where each node contains:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Data</strong>: The value stored in the node.</li>
        <li><strong>Next</strong>: A reference/pointer to the next node in the sequence, or <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">null</code> if it's the last node.</li>
      </ul>
      <p>The list is accessed starting from the <strong>head</strong> node (the first node).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Advantages over Arrays:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Dynamic Size</strong>: Can easily grow or shrink during runtime.</li>
        <li><strong>Efficient Insertions/Deletions</strong>: Inserting or deleting elements (especially at the beginning or middle) can be faster (O(1) if you have a reference to the previous node, O(n) to find it) compared to arrays where elements might need shifting (O(n)).</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Disadvantages compared to Arrays:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>No Random Access</strong>: Accessing an element by index requires traversing the list from the head (O(n)), unlike arrays (O(1)).</li>
        <li><strong>Extra Memory</strong>: Each node requires extra memory for the 'next' reference.</li>
        <li>Cache Locality: Elements are not necessarily stored together in memory, which can be less cache-friendly than arrays.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Operations:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Insertion (at beginning, end, middle)</li>
        <li>Deletion (at beginning, end, middle)</li>
        <li>Search (find an element)</li>
        <li>Traversal (visit all elements)</li>
      </ul>
      <p>Java provides a built-in <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">java.util.LinkedList</code> class which is actually a <strong>Doubly Linked List</strong> (nodes have references to both the next and previous nodes), but understanding Singly Linked Lists is fundamental.</p>
    `,
    examples: [
      {
        title: "Conceptual Node Structure",
        code: `
// Basic structure of a Node in a Singly Linked List
class Node<T> { // Using Generics for type flexibility
    T data;
    Node<T> next; // Reference to the next node

    // Constructor
    Node(T data) {
        this.data = data;
        this.next = null; // Initially, the next node is null
    }
}

// Example usage (conceptual)
Node<String> head = new Node<>("A");
Node<String> second = new Node<>("B");
Node<String> third = new Node<>("C");

head.next = second; // Link head node to the second node
second.next = third; // Link second node to the third node
// third.next remains null, indicating the end of the list

// List: A -> B -> C -> null
`,
        explanation: "This shows the basic building block of a linked list: the `Node`. Each node holds data and a reference (`next`) to the subsequent node. We link them together manually here to illustrate the concept."
      },
      {
        title: "Simple Singly Linked List Implementation",
        code: `
class SimpleLinkedList<T> {

    private static class Node<T> {
        T data;
        Node<T> next;

        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }

    private Node<T> head = null; // Head of the list, initially null (empty list)
    private int size = 0;

    // Add element to the front (O(1))
    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head; // Point new node's next to the current head
        head = newNode;      // Update head to be the new node
        size++;
    }

    // Add element to the end (O(n))
    public void addLast(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode; // If list is empty, new node is the head
        } else {
            Node<T> current = head;
            while (current.next != null) { // Traverse to the last node
                current = current.next;
            }
            current.next = newNode; // Link the last node to the new node
        }
        size++;
    }

    // Print the list (O(n))
    public void printList() {
        Node<T> current = head;
        System.out.print("List: ");
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

     // Get size (O(1))
    public int getSize() {
        return size;
    }

    public static void main(String[] args) {
        SimpleLinkedList<Integer> list = new SimpleLinkedList<>();
        list.addFirst(10); // List: 10 -> null
        list.addFirst(5);  // List: 5 -> 10 -> null
        list.addLast(20);  // List: 5 -> 10 -> 20 -> null
        list.addLast(30);  // List: 5 -> 10 -> 20 -> 30 -> null

        list.printList(); // Output: List: 5 -> 10 -> 20 -> 30 -> null
        System.out.println("Size: " + list.getSize()); // Output: Size: 4
    }
}
`,
        explanation: "A basic implementation of a Singly Linked List with `addFirst`, `addLast`, and `printList` methods. It shows how nodes are linked and how traversal works. Note that `addLast` requires iterating through the list, making it O(n)."
      },
       {
        title: "Using java.util.LinkedList",
        code: `
import java.util.LinkedList;

public class JavaLinkedListExample {
    public static void main(String[] args) {
        // Java's built-in LinkedList (Doubly Linked)
        LinkedList<String> names = new LinkedList<>();

        // Add elements
        names.add("Zoe");      // Adds to the end
        names.addFirst("Alice"); // Adds to the beginning
        names.addLast("Bob");   // Adds to the end
        names.add(2, "Charlie"); // Adds at index 2

        System.out.println("LinkedList: " + names); // Output: [Alice, Zoe, Charlie, Bob]

        // Access elements (less efficient than ArrayList for random access)
        System.out.println("Element at index 1: " + names.get(1)); // Output: Zoe

        // Remove elements
        names.removeFirst(); // Removes Alice
        names.removeLast();  // Removes Bob
        names.remove(1);     // Removes Charlie (element at index 1 now)

        System.out.println("After removals: " + names); // Output: [Zoe]

        System.out.println("Size: " + names.size()); // Output: 1
    }
}`,
        explanation: "Java's `LinkedList` provides a rich set of methods for adding, removing, and accessing elements at both ends and by index. While convenient, remember it's a Doubly Linked List under the hood, and random access (`get(index)`) is O(n) on average."
      }
    ]
  }),
  dsaTopic({
    id: "binary-search-trees",
    title: "Binary Search Trees (BST)",
    content: `
      <p>A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>The left subtree of a node contains only nodes with keys lesser than the node's key.</li>
        <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
        <li>The left and right subtree each must also be a binary search tree.</li>
        <li>There must be no duplicate nodes (in a standard BST).</li>
      </ul>
      <p>BSTs allow for efficient searching, insertion, and deletion operations.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Time Complexity (Average Case):</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Search: O(log n)</li>
        <li>Insertion: O(log n)</li>
        <li>Deletion: O(log n)</li>
      </ul>
       <h3 class="text-xl font-semibold mt-4 mb-2">Time Complexity (Worst Case):</h3>
       <p>The worst case occurs when the tree becomes skewed (like a linked list), for example, when inserting elements in sorted order. In this case, operations can degrade to O(n).</p>
       <ul class="list-disc list-inside space-y-1">
        <li>Search: O(n)</li>
        <li>Insertion: O(n)</li>
        <li>Deletion: O(n)</li>
      </ul>
      <p>Self-balancing BSTs (like AVL Trees, Red-Black Trees) guarantee O(log n) performance even in the worst case by performing rotations during insertions/deletions.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Tree Traversal Methods:</h3>
       <ul class="list-disc list-inside space-y-1">
        <li><strong>In-order Traversal</strong>: Left -> Root -> Right (Visits nodes in ascending order for a BST)</li>
        <li><strong>Pre-order Traversal</strong>: Root -> Left -> Right (Useful for copying trees)</li>
        <li><strong>Post-order Traversal</strong>: Left -> Right -> Root (Useful for deleting trees)</li>
      </ul>
      <p>Java has <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">TreeSet</code> and <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">TreeMap</code> which are implemented using Red-Black Trees (a type of self-balancing BST).</p>
    `,
    examples: [
      {
        title: "Conceptual BST Node",
        code: `
class TreeNode<T extends Comparable<T>> { // Data must be comparable
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    TreeNode(T data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Example structure (conceptual) for inserting 5, 3, 8, 1, 4, 7, 9
/*
        5
       / \\
      3   8
     / \\ / \\
    1  4 7  9
*/
`,
        explanation: "Defines a generic `TreeNode` for a BST. Each node holds comparable data and references to left and right children. The comment shows a possible structure after inserting several values, maintaining the BST property."
      },
      {
        title: "Simple BST Implementation (Insert & In-order Traversal)",
        code: `
class SimpleBST<T extends Comparable<T>> {

    private static class TreeNode<T extends Comparable<T>> {
        T data;
        TreeNode<T> left;
        TreeNode<T> right;

        TreeNode(T data) { this.data = data; left = right = null; }
    }

    private TreeNode<T> root;

    public SimpleBST() { root = null; }

    // Public insert method
    public void insert(T data) {
        root = insertRecursive(root, data);
    }

    // Recursive helper for insertion
    private TreeNode<T> insertRecursive(TreeNode<T> current, T data) {
        // If the tree/subtree is empty, create a new node
        if (current == null) {
            return new TreeNode<>(data);
        }

        // Compare data to decide direction
        int compareResult = data.compareTo(current.data);

        if (compareResult < 0) { // Go left
            current.left = insertRecursive(current.left, data);
        } else if (compareResult > 0) { // Go right
            current.right = insertRecursive(current.right, data);
        } else {
            // Data already exists, do nothing (or handle duplicates as needed)
            return current;
        }
        return current;
    }

    // Public method for in-order traversal
    public void printInOrder() {
        System.out.print("In-order: ");
        inOrderRecursive(root);
        System.out.println();
    }

    // Recursive helper for in-order traversal (Left -> Root -> Right)
    private void inOrderRecursive(TreeNode<T> node) {
        if (node != null) {
            inOrderRecursive(node.left);
            System.out.print(node.data + " ");
            inOrderRecursive(node.right);
        }
    }

    public static void main(String[] args) {
        SimpleBST<Integer> bst = new SimpleBST<>();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);

        /* Tree structure:
              50
           /      \\
          30        70
         /  \\      /  \\
        20   40    60   80
        */

        bst.printInOrder(); // Output: In-order: 20 30 40 50 60 70 80
    }
}
`,
        explanation: "A basic BST implementation with recursive `insert` and `inOrderRecursive` traversal methods. The `insert` method maintains the BST property by comparing the new data with the current node's data to decide whether to go left or right. In-order traversal visits nodes in sorted order."
      },
       {
        title: "Using Java's TreeSet",
        code: `
import java.util.TreeSet;
import java.util.Set;

public class TreeSetExample {
    public static void main(String[] args) {
        // TreeSet uses a Red-Black Tree (self-balancing BST)
        Set<Integer> numbers = new TreeSet<>();

        // Adding elements - automatically keeps them sorted and unique
        numbers.add(50);
        numbers.add(30);
        numbers.add(70);
        numbers.add(20);
        numbers.add(40);
        numbers.add(60);
        numbers.add(80);
        numbers.add(30); // Duplicate - ignored

        System.out.println("TreeSet (sorted): " + numbers);
        // Output: TreeSet (sorted): [20, 30, 40, 50, 60, 70, 80]

        // Check for element existence (efficient - O(log n))
        System.out.println("Contains 40? " + numbers.contains(40)); // Output: true
        System.out.println("Contains 90? " + numbers.contains(90)); // Output: false

        // Remove an element (efficient - O(log n))
        numbers.remove(30);
        System.out.println("After removing 30: " + numbers);
        // Output: After removing 30: [20, 40, 50, 60, 70, 80]

        // Iteration yields elements in sorted order
        System.out.print("Iterating: ");
        for(int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        // Output: Iterating: 20 40 50 60 70 80
    }
}`,
        explanation: "Java's `TreeSet` provides a ready-to-use implementation based on a self-balancing BST. It automatically maintains elements in sorted order and ensures uniqueness. Operations like `add`, `contains`, and `remove` are typically O(log n)."
      }
    ]
  }),
  dsaTopic({
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    content: `
      <p>Sorting algorithms arrange elements of a list or array in a specific order (e.g., ascending or descending).</p>
      <p>Choosing the right sorting algorithm depends on factors like input size, whether the data is partially sorted, memory constraints, and the need for stability (maintaining the relative order of equal elements).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Sorting Algorithms:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Bubble Sort</strong>: Simple, but inefficient. Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
            <ul><li>Time: O(n²) average/worst, O(n) best (already sorted)</li><li>Space: O(1)</li></ul>
        </li>
        <li><strong>Selection Sort</strong>: Simple. Finds the minimum element from the unsorted part and puts it at the beginning.
            <ul><li>Time: O(n²) average/worst/best</li><li>Space: O(1)</li></ul>
        </li>
         <li><strong>Insertion Sort</strong>: Builds the final sorted array one item at a time. Efficient for small or nearly sorted data.
            <ul><li>Time: O(n²) average/worst, O(n) best</li><li>Space: O(1)</li></ul>
        </li>
        <li><strong>Merge Sort</strong>: Divide and Conquer algorithm. Divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
            <ul><li>Time: O(n log n) average/worst/best</li><li>Space: O(n) (due to temporary arrays for merging)</li><li>Stable: Yes</li></ul>
        </li>
        <li><strong>Quick Sort</strong>: Divide and Conquer algorithm. Picks an element as a pivot and partitions the given array around the picked pivot.
            <ul><li>Time: O(n log n) average/best, O(n²) worst (e.g., already sorted array with bad pivot selection)</li><li>Space: O(log n) average (recursion stack), O(n) worst</li><li>Stable: No (typically)</li></ul>
        </li>
         <li><strong>Heap Sort</strong>: Uses a Binary Heap data structure. Builds a max-heap, then repeatedly extracts the maximum element and places it at the end of the array.
            <ul><li>Time: O(n log n) average/worst/best</li><li>Space: O(1) (in-place)</li><li>Stable: No</li></ul>
        </li>
      </ul>
      <p>Java's built-in <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Arrays.sort()</code> and <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">Collections.sort()</code> use efficient algorithms (like Timsort or Dual-Pivot Quicksort) that offer O(n log n) performance on average.</p>
    `,
    examples: [
      {
        title: "Bubble Sort Implementation",
        code: `
import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            // Last i elements are already in place
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no two elements were swapped by inner loop, then break
            if (!swapped) {
                break; // Optimization: Array is sorted
            }
        }
    }

    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original: " + Arrays.toString(data));
        bubbleSort(data);
        System.out.println("Sorted:   " + Arrays.toString(data));
        // Output: Sorted:   [11, 12, 22, 25, 34, 64, 90]
    }
}`,
        explanation: "Implements Bubble Sort. It repeatedly compares adjacent pairs and swaps them if needed. The outer loop runs n-1 times, and the inner loop compares adjacent elements. An optimization is added to stop early if a pass completes with no swaps."
      },
      {
        title: "Merge Sort Implementation",
        code: `
import java.util.Arrays;

public class MergeSort {

    public static void mergeSort(int[] arr, int n) {
        if (n < 2) { // Base case: array with 0 or 1 element is sorted
            return;
        }
        int mid = n / 2;
        int[] left = new int[mid];
        int[] right = new int[n - mid];

        // Populate left and right subarrays
        System.arraycopy(arr, 0, left, 0, mid);
        System.arraycopy(arr, mid, right, 0, n - mid);
        /* // Alternative way to copy:
        for (int i = 0; i < mid; i++) { left[i] = arr[i]; }
        for (int i = mid; i < n; i++) { right[i - mid] = arr[i]; }
        */

        // Recursively sort the subarrays
        mergeSort(left, mid);
        mergeSort(right, n - mid);

        // Merge the sorted subarrays back into arr
        merge(arr, left, right, mid, n - mid);
    }

    // Helper method to merge two sorted arrays
    private static void merge(int[] arr, int[] left, int[] right, int leftSize, int rightSize) {
        int i = 0, j = 0, k = 0; // i for left, j for right, k for merged arr

        // Compare elements from left and right and merge into arr
        while (i < leftSize && j < rightSize) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        // Copy remaining elements of left (if any)
        while (i < leftSize) {
            arr[k++] = left[i++];
        }
        // Copy remaining elements of right (if any)
        while (j < rightSize) {
            arr[k++] = right[j++];
        }
    }

    public static void main(String[] args) {
        int[] data = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original: " + Arrays.toString(data));
        mergeSort(data, data.length);
        System.out.println("Sorted:   " + Arrays.toString(data));
        // Output: Sorted:   [3, 9, 10, 27, 38, 43, 82]
    }
}`,
        explanation: "Implements Merge Sort using the Divide and Conquer strategy. It recursively divides the array into halves until single elements remain, then merges the sorted halves back together. Requires extra space (O(n)) for the temporary arrays used during merging."
      },
       {
        title: "Using Arrays.sort()",
        code: `
import java.util.Arrays;

public class BuiltInSort {
    public static void main(String[] args) {
        int[] numbers = {5, 1, 4, 2, 8};
        String[] names = {"Charlie", "Alice", "Bob"};

        System.out.println("Original numbers: " + Arrays.toString(numbers));
        Arrays.sort(numbers); // Sorts primitive int array
        System.out.println("Sorted numbers:   " + Arrays.toString(numbers));
        // Output: Sorted numbers:   [1, 2, 4, 5, 8]

        System.out.println("\\nOriginal names: " + Arrays.toString(names));
        Arrays.sort(names); // Sorts array of objects (String implements Comparable)
        System.out.println("Sorted names:   " + Arrays.toString(names));
        // Output: Sorted names:   [Alice, Bob, Charlie]
    }
}`,
        explanation: "Demonstrates using Java's built-in `Arrays.sort()`. This is the recommended way to sort arrays in practice as it uses highly optimized algorithms (like Timsort or Dual-Pivot Quicksort) providing good performance (O(n log n) average)."
      }
    ]
  }),
   dsaTopic({
    id: "searching-algorithms",
    title: "Searching Algorithms",
    content: `
      <p>Searching algorithms are used to find a specific element (target) within a data structure (like an array or list).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Searching Algorithms:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Linear Search</strong>: Simplest method. Sequentially checks each element of the list until a match is found or the whole list has been searched.
            <ul>
              <li>Works on: Sorted or Unsorted data.</li>
              <li>Time Complexity: O(n) average/worst (target is last or not present), O(1) best (target is first).</li>
              <li>Space Complexity: O(1).</li>
            </ul>
        </li>
        <li><strong>Binary Search</strong>: Efficient algorithm for finding an item from a <strong>sorted</strong> list. Works by repeatedly dividing the search interval in half.
             <ul>
              <li>Works on: <strong>Sorted</strong> data only.</li>
              <li>Time Complexity: O(log n) average/worst, O(1) best (target is middle).</li>
              <li>Space Complexity: O(1) (iterative), O(log n) (recursive, due to stack space).</li>
            </ul>
        </li>
        <li><strong>Hashing</strong>: (Covered separately under Hash Tables/Maps) Uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
             <ul>
              <li>Time Complexity: O(1) average, O(n) worst (due to collisions).</li>
            </ul>
        </li>
         <li><strong>Tree Search</strong>: (Covered separately under Trees) Algorithms like searching in a Binary Search Tree (BST).
             <ul>
              <li>Time Complexity (BST): O(log n) average, O(n) worst (skewed tree).</li>
            </ul>
        </li>
      </ul>
      <p>The choice depends heavily on whether the data is sorted and the size of the dataset.</p>
    `,
    examples: [
      {
        title: "Linear Search Implementation",
        code: `
public class LinearSearch {

    // Returns index of target in arr[], or -1 if not present
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Target found at index i
            }
        }
        return -1; // Target not found
    }

    public static void main(String[] args) {
        int[] data = {2, 3, 4, 10, 40, 15, 8};
        int target1 = 10;
        int target2 = 7;

        int index1 = linearSearch(data, target1);
        if (index1 != -1) {
            System.out.println("Target " + target1 + " found at index: " + index1); // Output: 4
        } else {
            System.out.println("Target " + target1 + " not found.");
        }

        int index2 = linearSearch(data, target2);
         if (index2 != -1) {
            System.out.println("Target " + target2 + " found at index: " + index2);
        } else {
            System.out.println("Target " + target2 + " not found."); // Output: Target 7 not found.
        }
    }
}`,
        explanation: "Implements Linear Search. It iterates through the array element by element, comparing each with the target. It returns the index if found, otherwise -1. Simple but inefficient for large datasets."
      },
      {
        title: "Binary Search Implementation (Iterative)",
        code: `
import java.util.Arrays; // Needed for sorting before search

public class BinarySearchIterative {

    // Returns index of target in sorted arr[], or -1 if not present
    public static int binarySearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2; // Avoids potential integer overflow

            // Check if target is present at mid
            if (arr[mid] == target) {
                return mid;
            }

            // If target greater, ignore left half
            if (arr[mid] < target) {
                low = mid + 1;
            }
            // If target is smaller, ignore right half
            else {
                high = mid - 1;
            }
        }

        // Target was not present
        return -1;
    }

    public static void main(String[] args) {
        int[] data = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}; // MUST be sorted
        int target1 = 23;
        int target2 = 7;

        // Ensure array is sorted if not already
        // Arrays.sort(data);

        int index1 = binarySearch(data, target1);
        if (index1 != -1) {
            System.out.println("Target " + target1 + " found at index: " + index1); // Output: 5
        } else {
            System.out.println("Target " + target1 + " not found.");
        }

        int index2 = binarySearch(data, target2);
         if (index2 != -1) {
            System.out.println("Target " + target2 + " found at index: " + index2);
        } else {
            System.out.println("Target " + target2 + " not found."); // Output: Target 7 not found.
        }
    }
}`,
        explanation: "Implements iterative Binary Search. It requires the input array to be sorted. It repeatedly divides the search interval in half based on comparing the target with the middle element. Much faster (O(log n)) than linear search for large sorted arrays."
      },
       {
        title: "Using Arrays.binarySearch()",
        code: `
import java.util.Arrays;

public class BuiltInBinarySearch {
    public static void main(String[] args) {
        int[] numbers = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}; // MUST be sorted

        int target1 = 23;
        int target2 = 7;

        // Perform binary search
        int index1 = Arrays.binarySearch(numbers, target1);
        int index2 = Arrays.binarySearch(numbers, target2);

        System.out.println("Index of " + target1 + ": " + index1); // Output: 5

        // If element is not found, it returns (-(insertion point) - 1)
        System.out.println("Index of " + target2 + ": " + index2); // Output: -2
        // (-2 means it would be inserted at index 1 to maintain order)

        if (index1 >= 0) {
             System.out.println(target1 + " found.");
        } else {
             System.out.println(target1 + " not found.");
        }

        if (index2 >= 0) {
             System.out.println(target2 + " found.");
        } else {
             System.out.println(target2 + " not found.");
        }
    }
}`,
        explanation: "Demonstrates using Java's built-in `Arrays.binarySearch()`. This is the preferred method for binary search on sorted arrays. It returns the index if found, or a negative value `(-(insertion point) - 1)` if not found, which indicates where the element would be inserted."
      }
    ]
  }),
  // --- Add more DSA topics here later ---
  // e.g., Hash Tables, Graphs (BFS, DFS), Heaps, Dynamic Programming etc.
];

// Function to get topics by category
export function getTopics(category?: 'java' | 'dsa') {
  if (category) {
    return topics.filter(topic => topic.category === category);
  }
  return topics; // Return all if no category specified
}

// Function to get a single topic by ID and optionally category
export function getTopic(id: string, category?: 'java' | 'dsa') {
  return topics.find(topic => topic.id === id && (!category || topic.category === category));
}
