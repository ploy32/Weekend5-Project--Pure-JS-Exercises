/*
-------- Ex3.2 - People on the Bus -------- 
Number of people in the bus.
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). 
Each integer array has two items which represent number of people get into bus 
(The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after
the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still
in the bus, and they are probably sleeping there :D Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always
>= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

const busStops = (arr) => {
    const statusPerStation = [arr.length];
    let currentCapacity = arr[0][0];
    for (let i = 1; i < arr.length; i++) {
        statusPerStation.push(arr[i][0] - arr[i][1]);
        currentCapacity += statusPerStation[i];
    }
    return currentCapacity;
};

// Test: Ex3.2

busStops([
    [10, 0],
    [3, 5],
    [5, 8],
]);
// Output: 5

busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
]);
// Output: 17

busStops([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
]);
// Output: 21

busStops([[0, 0]]); // Output: 0
