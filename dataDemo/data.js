/*

    JS is Loose - Typed like Python

    python declaration
        num = 1         - num is an integer
        letter = 'A'    - letter is a string / char
    
    JS declaration
        variables:

        var num = 1;
        -or-            - num is an integer
        let num = 1;

        var letter = 'A';
        -or-            - letter is a char
        let letter = 'A';

        constants:

        const NUM2 = 10;    - num2 is an integer that cannot change value (professional enviroments put these in ALL CAPS
*/

// declare a variable to hold a name
let name = 'Pac-Man';

// display the value of name to the console
console.log(`${name} evades ghosts on boards of dots and fruit!`);

// JS object - store values in values / key pairs
let inky ={
    name : 'Inky',
    color: 'Blue'
};

let pinky ={
    name : 'Pinky',
    color: 'Pink'
};

let blinky ={
    name : 'Blinky',
    color: 'Red'
};

let clyde ={
    name : 'Clyde',
    color: 'Orange'
};

// display key value from an object
console.log(`${inky.name} is ${inky.color}`);
console.log(`${blinky.name} is ${blinky.color}`);
console.log(`${pinky.name} is ${pinky.color}`);
console.log(`${clyde.name} is ${clyde.color}`);

// arrays in JS can be made in two ways:
// 1. Initialization List
// 2. Empty array where values are pushed
let values = [1, 2, 3, 4, 5];

let group2Teams = [];

// use the .push() command to add data to an array
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');

// display the info from the arrays

console.log(values);

console.log(group2Teams);

/*
    // use relational operators to implement decisions

    >   - greater than
    <   - less than
    >=  - greater than or equal
    <=  - less than or equal
    ==  - is equal (loose comparison) 1 = '1' - true
    === - is equal to (strict comparison does not include the data type)
            1 === '1' - false
    ! - logical not (flips the value of the boolean)
    !=  - is not equal
    &&  - logical and (inclusive)
    ||  - logical or (optional)

    // single alternative
    if (condition)
    {
        statement(s);
    }

    // dual alternative
    if (condition)
    {
        statements(s);
    }
    else
    {
        statements(s);
    }

    // multiple alternative
    if (condition)
    {
        statements(s);
    }
    else if(condition)
    {
        statements(s);
    }
    else
    {
        statements(s);
    }

    switch(variable)
    {
        case value:
            statements(s);
            break;
        case anotherValue:
            statements(s);
            break;
        default:
            statement(s);
            break;
    }
*/

/*
    // looping

    // pretest and posttest loops

        // while - pretest - conditon control loops (Must have a false statement)

            while (condition)
            {
                statement(s);
            }

        // for - pretest - count control loops
            
            for (start, condition, amount to change)
            {
                statement(s);
            }
            

        // do-while - posttest

            do
            {
                statement(s);
            } while(condition);

// use a for loop to access and display the contents of the arrays one-by-one
*/

for(var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}