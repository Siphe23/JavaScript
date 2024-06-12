// Exercise 1: Temperature check

// If-Else Statements
function checkTemperatureIf(temp) {
    if (temp < 0) {
      console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
      console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
      console.log("It's mild.");
    } else {
      console.log("It's warm.");
    }
  }
  
  // Switch Statements
  function checkTemperatureSwitch(temp) {
    switch (true) {
      case temp < 0:
        console.log("It's freezing!");
        break;
      case temp >= 0 && temp <= 15:
        console.log("It's cold.");
        break;
      case temp >= 16 && temp <= 25:
        console.log("It's mild.");
        break;
      default:
        console.log("It's warm.");
    }
  }
  
  // Exercise 2: Divisibility Check
  
  // If-Else Statements
  function checkDivisibilityIf(num) {
    if (num % 2 === 0 && num % 3 === 0) {
      console.log("Divisible by both.");
    } else if (num % 2 === 0) {
      console.log("Divisible by 2.");
    } else if (num % 3 === 0) {
      console.log("Divisible by 3.");
    } else {
      console.log("Not divisible by 2 or 3.");
    }
  }
  
  // Switch Statements
  function checkDivisibilitySwitch(num) {
    switch (true) {
      case num % 2 === 0 && num % 3 === 0:
        console.log("Divisible by both.");
        break;
      case num % 2 === 0:
        console.log("Divisible by 2.");
        break;
      case num % 3 === 0:
        console.log("Divisible by 3.");
        break;
      default:
        console.log("Not divisible by 2 or 3.");
    }
  }
  
  // Exercise 3: For loops
  
  // 1. Print numbers from 1 to 10
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2. Print all even numbers between 1 and 20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // 3. Calculate the sum of all numbers from 1 to 100
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  
  // 4. Print each element of the array
  const numbers1 = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
  }
  
  // 5. Find and print the largest number in the array
  const numbers2 = [3, 7, 2, 5, 10, 6];
  let max = numbers2[0];
  for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
      max = numbers2[i];
    }
  }
  console.log(max);
  
  // Exercise 4: While loops
  
  // 1. Print numbers from 1 to 10
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  
  // 2. Print all even numbers between 1 and 20
  i = 1;
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
  
  // 3. Calculate the sum of all numbers from 1 to 100
  sum = 0;
  i = 1;
  while (i <= 100) {
    sum += i;
    i++;
  }
  console.log(sum);
  
  // 4. Print all multiples of 5 less than 50
  i = 5;
  while (i < 50) {
    console.log(i);
    i += 5;
  }
  
  // Exercise 5: Do-While loops
  
  // 1. Print numbers from 1 to 10
  i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
  
