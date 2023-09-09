import inquirer from "inquirer";


const {num1,num2,operator} = await inquirer.prompt(
  [
    {
      message: "Enter First Number: ",
      name: "num1",
      type: "number",
    },
    {
      message: "Enter Second Number: ",
      name: "num2",
      type: "number",
    },
    {
      message: "Select Operator: ",
      name: "operator",
      type: "list",
      choices:[ "+","-","*","/"]
    }
  ]
);

const Calculator = (num1:number ,num2:number ,operator:string) => {
  num1 = Number(num1);
  num2 = Number(num2);
  
  if(operator === "+"){
    return num1 + num2;
  }
  
  else if(operator === "-"){
    return num1 - num2;
  }
  else if(operator === "*"){
    return num1 * num2;
  }
  else if(operator === "/"){
    return num1 / num2;
  }
  else{
    console.error("Invalid Operator");
  }
}

let result = Calculator(num1,num2,operator);
console.log("------------------------------------");
console.log(`\tResult: ${num1} ${operator} ${num2} =  ${result}`);
console.log("------------------------------------");
