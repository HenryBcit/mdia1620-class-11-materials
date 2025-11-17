# Three Different but Similar Functions

## Overview

Practice designing functions, writing it, and simulating the sequence

## Getting Started

1. **Clone the repository:**

```bash
git clone "https://github.com/HenryBcit/mdia1620-class11-material.git"
```

2. **Run the prepare file:**

```bash
node prepare.js
```

3. **Find `init.js`:**

- Use `cd` and `ls` repeatedly until you reach the deepest folder.
- Use `ls` to confirm `init.js` is present.

4. **Run the simulation:**

```bash
node init.js
```

You should see "simulation start".


## Level 1 — Problem Statement: Grading Assignment

### Objective
- Using multiple if else, prepare functions to evaluate the grade

### Instructions
1. start with `mdial1620_class11_exercise_problem_1
2. Read the sequences and locate ```//write your code below here```
3. check the simulation to see if it make sense.
4. uncomment 1 function at a time to test
5. make sure the end result is a log that shows the number grade and letter grade


### Tasks
Write a program that takes a student's score and performs the following steps:
1.	Validate the input: Make sure the input is a number. If not, throw an error.
2.	Evaluate the grade:
  - If the score is between 90 and 100, the grade should be "A".
  - If the score is between 80 and 89, the grade should be "B".
  - If the score is between 70 and 79, the grade should be "C".
  - If the score is between 60 and 69, the grade should be "D".
  - If the score is below 60, the grade should be "F".
3.	Format the result: display a string showing the original score and the corresponding grade.

### Constraints:
  - Each function should have a single clear purpose.
  - Avoid side effects (like printing inside utility functions).


## Level 2 — Problem Statement: Tracking Distance Ran

### Objective
- Do it again but without anyone to start you off

### Task
Write a program that takes multiple distances (in kilometers or miles) and performs the following steps:
1.	Validate the input: Ensure that each distance entered is a valid number. If not, throw an error.
2.	Calculate the total distance: Sum up the total distance run.
3.	Format the result: Display a string that shows the total distance and the corresponding unit. If below 1000 use meters, if above, use kilometers.

### Constraints:
- Each function should have a single, clear purpose.
- Avoid side effects (like printing inside utility functions).
- The program should be able to handle multiple distances over different runs and sum them up.



## Level 3 — Problem Statement: Tracking Types of Food Eaten

### Objective
- Do it again but in a slightly different variation.

### Tasks
Write a program that takes multiple types of food you ate and performs the following steps:
1.	Validate the input: Ensure that each food item is a string (representing the name of the food). If not, throw an error.
2.	Calculate the total number of different foods eaten: Count the number food eaten and store all food eaten so far
3.	Format the result: Display a string showing all the food eaten and the total number of foods eaten. If it's over 10, tell them they ate too much
