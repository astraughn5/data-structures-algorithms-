//implement stacks by using an array
class Array { //LIFO
	constructor(){
	  this.array = []
	}

	peek() { //see the top item (last item)
		return this.array[this.array.length-1]
	}
	push(value){ //add an item
		this.array.push(value)
		return this
	}
	pop(){ //remove the last item
		this.array.pop()
		return this

	}
	isEmpty(){
		if (this.length === 0){
			return 'Stack is Empty'
		}
	}
  }

//dont use linked lists for stacks, use arrays
class Stack { //LIFO
	constructor(){
	  this.top = null;
	  this.bottom = null;
	  this.length = 0;
	}
	peek() { //see the top item (last item)
		return this.top
	}
	push(value){ //add an item
		const node = new NodeClass(value)

		if (this.isEmpty()){ // * -- top & bottom
			this.top = node
			this.bottom = node
		}else { //* (head) + * (bottom)
			const holdingPointer = this.top
			this.top = node
			this.top.next = holdingPointer
		}
		this.length++
		return this
	}
	pop(){ //remove the last item
		if (!this.top){
			return null
		}
		else if(this.top === this.bottom){ //*
			this.top = null
			this.bottom = null
		}
		else { // * -- * -- *
			//const holdingPointer = this.top
			this.top = this.top.next
		}
		this.length--
		return this

	}
	isEmpty(){
		if (this.length === 0){
			return 'Stack is Empty'
		}
	}
  }
  
//   const myStack = new Stack();
//   myStack.push('google')
// myStack.push('udemy')
// myStack.push('discord')
//   //console.log(myStack.push('discord'))
//   //console.log(myStack.peek())
//   myStack.pop()
//   myStack.pop()
//   //myStack.pop()
// console.log(myStack)
  //console.log(myStack.isEmpty())


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