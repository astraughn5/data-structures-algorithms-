function checkBalance(str){
let stack = []
  for (let i = 0; i < str.length; i++){
    if(str[i] == '(' || str[i] == '[' ||str[i] == '{'){
      stack.push(str[i])    
    }    
    //console.log(stack)
	let check
    if (str[i] == ')'){
		check = stack.pop()
		console.log(check)
		if (check == '{' || check == '['){
		return false
	  }
    }
	if (str[i] == '}'){
		check = stack.pop()	
		//console.log(stack.pop())
		if (check == '(' || check == '['){
		return false
		}
	  }
	  if (str[i] === ']'){
		//console.log(stack)
		check = stack.pop()	
		if (check === '(' || check === '{'){
		return false
		}
	  }
  	}
	console.log(stack)

	if (stack.length===0){
    	return true   
  	}else{
		  return false
	}
    
}


//console.log(checkBalance("[()]{}{[()()]()}")) // result is true , balanced
//console.log(checkBalance("[(])")) // result is false, unbalanced
console.log(checkBalance("[]()[][]([)]")) //result is false, does not return false if there is a single pair