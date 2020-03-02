
/************************************************************************************************************************
 * Description:         A simple Java Script file that includes subsets of all basic Javascript commands that 
 *                      a newbie will find useful for school projects, aside projects, and refersher elements. 
 *                      Fyi, I am working on a javascriptcourse and thought my progress should be logged in a file and shared with 
 *                      other aspiring programmers via github. 
 *                      I have made effort to place enought comment descpriton on every function/code implemented and woiuld hope this 
 *                      meet the norms for documentatoin. Please feel free to opttimize this file for projects use and provide feedback if this was 
 *                      helpful.
 * Name:                Lloyd Harris
 * Date:                 02/28/2020
 * Ver:                 2020.1
 * *********************************************************************************************************************************************/

/*@ variables name declarions. variable types usages. veriables instantiation */



let name = 'Lloyd';
console.log(name);


let firstName = 'Lloyd';
    let lastName = ' Harris';
        let interestRate = 0.3;
            interestRate = 1;

//Use constant to prevent the value of a variable from changing
const intRate = 0.3;
//intRate = 4; this will invoke an error during runtime becuase the varilable is immutable. see previous declaration above this line. 

console.log(intRate);
console.log(interestRate);

/* usage of primitives and reference type variables */
let myName = 'Mark'; // this is a string literal.
let age  = 14; // Number literal
let isApproved = true ; // this is a boolean Literal. Value can be true of false. These are reserved keywords. 
let fName = undefined; 
let lName = null; // present as a placholder for users to pick an option in the future. 


/* Example of javascript being used a dynamic language. Hint: The difference between static and dynamic languages is evident from the name itself. In java for instance
    ia variable is declared as a string (i.e,. String name = "Fox", this static declarition means wherever name appears in the scope of the function will always be seen as a 
    string object by the compiler) in contrast, Java script will accept name object as either a string or a constant based on the desired usage. I.e in Java script you can set
    name as a string or a numeric object. let name = "Five", let name = 5 */



/*Working with Objects */

let person = { // this is an example of an object literal . each object in a literal can have keys and value pairs. 
  name: 'Mark', // name is the key and Mark is the value 
  age:  '15',   // same as above 
}

console.log (person);

/*two ways to access values from a property. 1, is the dot notation and the other is the bracket notation. */
person.name = ('Fred');

console.log(person.name);

// bracket notation.

let selection = 'name';
person[selection] = 'Ann';

console.log(person.name);

// Usage of Array objects 

let selectedColors = ['red', 'blue',];

console.log(selectedColors);
// example proof of JS being a dynamic language. We access the array element at index 1 and change it's value to anotheritem.
selectedColors[0]= 'Black';

//Another proof that JS is dynamic. Will store any kind of object unlike Java or other strong programming langugates.
selectedColors[2] = 1;

// Example and use of the lenght property
console.log('the length of this array is ' +  selectedColors.length); // displays the length of the selectedColors array.

/*functions are one of the building blocks in JS. It is basically a set of statements that performs a task or calculate a value. */
//A simple function that prints hello world to the console and gets invoved oustide of the curly braces.

    function greet(){
        console.log('Hello World');
    }
    // function is called outside of the curly braces.
     greet();

    //Another example of funcation that takes a name parameter and greets the user

    function    greetMe(name){
        console.log('Hello' + name + "I hope you are having a good day with these programming basics!")
    }

    //function call
    greetMe('John');

    /* The default value for a java script param is undefined. below is another example of a function overload that has three paramatres with only 1 argument in the final func call */

    function greetMe(firstName, lastName, nickName){
        console.log("Hello" + firstName + " " + lastName + "Can" + nickName + " " + "as your nick name? ")
    }
    //function call
greetMe("Manny");

// access the first element in an array
console.log(selectedColors);
