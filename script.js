//your JS code here. If required.
let input = prompt("Enter a input ?");

let number = parseInt(input);
let fact = 1;
for(let i=1; i<=number; i++)
	{
		fact = fact*i;
	}
alert("The factorial of "+number+" is "+fact);