
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

// access the first element in an array
console.log(' the first element in my array is: ' + selectedColors[0]);
