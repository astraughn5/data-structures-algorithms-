 //given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
 //For example:
 // const array1 = ['a','b','c','d','x']
 // const array2 = ['z','y','i']
 //should return false
 //Example 2:
 // const array1 = ['a','b','c','d','x']
 // const array2 = ['z','y','x']
 //should return true


const array1 = ['a','b','c','d','x']
const array2 = ['z','y','x', 'e','f','g']

const array3 = ['a','b','c','d','x']
const array4 = ['z','y','i']

 //PREP
 //P:are the parameters only strings in an array? will they always be different sizes? will one ever be blank? are they always lower case or case sensitive? will array 1 always be sorted with array 2 not being sorted? how large can the be array be?
 //R: result is a boolean of true or false based on minimum ONE common item
 //Example: see above

 function commonItems(input1, input2){
	// turn input1 into an object with boolean properties by looping through array
	let obj = {}
	input1.forEach(x => {
		if (!obj[input1[x]]){
			obj[x] = true
		}
	})
	// check if input2 contains the same property by looping through
	//console.log(obj)
	
	for (let j = 0; j < input2.length; j++){
		if (obj[input2[j]]){
			return true
		}
	}
	return false
	
	// time complexity = O(a + b)
	// space complexity = O(a)
 }
 
 //console.log(commonItems(array1,array2)) // will return true
 //console.log(commonItems(array3, array4)) // will return false


 function commonItems1(input1, input2){
	//nested for loop O(a * b) / BRUTE FORCE -- you could get rid of match and else statement and put the return false outside the nested loop
	let match = false

	for (let i = 0; i < input1.length; i++){
		for (let j = 0; j < input2.length; j++){
			if (input1[i] === input2[j]){
				match = true
				break;
			}
			else {
				match = false
			}
		}
	}
	return match
	// time complexity = O(a * b)
	//space complexity = O(1)
 }
 //console.log(commonItems1(array1,array2)) // will return true
// console.log(commonItems1(array3, array4)) // will return false

function commonItems2 (input1, input2){
	return input1.some(item => input2.includes(item))
	//time complexity = O(a * b)
	//space complexity = O(1)
}
//console.log(commonItems2(array1,array2)) // will return true
//console.log(commonItems2(array3, array4)) // will return false


//ARRAY PRACTICE QUESTION
const string = 'Hi My name is Alex'

function reverseString(str){
	let reverse = ''
	let wordSplit = str.split('')
	for (let i = wordSplit.length -1 ; i > 0 ; i--){
		reverse += wordSplit[i]
	}
	//console.log(wordSplit)
	console.log(reverse)
}
//reverseString(string)

function reverseString1(str){
	return str.split('').reverse().join('')
}

//console.log(reverseString1(string))


//Answer -- did not think of checking the input!

function reverseString2 (str){
	if (!str || str.length < 2 || typeof str !== 'string'){
		return 'errrkn'
	}

	const backwards = []
	const totalItems = str.length - 1
	for (let i = totalItems ; i >= 0; i--){
		backwards.push(str[i])
	}
	//console.log(backwards)
	return backwards.join('')


}
//console.log(reverseString2(string))

//PRACTICE - MERGE SORTED ARRAYS
const array5 = [0,3,4,31]
const array6 = [4,6,30]
//merge these arrays in a sorted manner

function mergeSortedArrays(array1, array2){
	if (!array1 || !array2 || Array.isArray(array1) !== true || Array.isArray(array2) !== true){
		return 'error'
	}
	if (array1.length === 0){
		return array2
	}
	if (array2.length === 0){
		return array1
	}
	// console.log(typeof array1)
	// console.log(Array.isArray(array1))

	const mergedArray = [...array1, ...array2]
	mergedArray.sort((a,b) => a - b)
	return mergedArray
}

//console.log(mergeSortedArrays(array5, array6))

//ANSWER 
function mergeSortedArrays1 (array1, array2){
	const mergedArray = []
	let array1Item = array1[0]
	let array2Item = array2[0]

	while (array1Item || array2Item){

	}

	return mergedArray
}

//mergeSortedArrays1(array5, array6)

class HashTable {
	constructor(size){
	  this.data = new Array(size);
	}
	set(key, value){
		const index = this._hash(key)
		this.data[index] = [key,value]
		return index
	}
	get(key){
		const index = this._hash(key)
		return this.data[index]
	}
	_hash(key) {
	  let hash = 0;
	  for (let i =0; i < key.length; i++){
		  hash = (hash + key.charCodeAt(i) * i) % this.data.length
	  }
	  return hash;
	}
  }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')


//P: will it always be an array? will it always be an integer? 
//R: return the first recurring character as integer
/*ways to do this
1. nested loop O(n^2)
2. Set to check the unique value O(n) time complexity but now it has O(n) space complexity 
3. can use a normal object and add the elements in and check if the input exists and return in
*/
function firstRecurringCharacter (array){
	//create an object that keeps the insertion order and the number can be the key
	// loop through and add the element into the Set and since set is unique key, return when we find an element already exists
	let check = new Set()
	for (let i = 0; i <= array.length - 1; i++){
		if (check.has(array[i])){
			return array[i]
		}
		else{
			check.add(array[i])
		}
	}
	return undefined
}

//console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])) // result = 2
//console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])) // result = 1
//console.log(firstRecurringCharacter([2,3,4,5])) // result = undefined

class NodeClass {
	constructor(value){
		this.value = value
		this.next = null
		//this.previous = null //doubly
	}
}

class LinkedList { //this is a doubly linkedlist not a singly, if you remove previous it will go back to singly
	constructor(value){
		this.head = {
			value: value,
			next: null,
			//previous: null //doubly
		}
		this.tail = this.head
		this.length = 1
	}
	append(value){
		// const newNode = {
		// 	value: value,
		// 	next: null
		// }
		const newNode = new NodeClass(value)

		this.tail.next = newNode
		//newNode.previous = this.tail //doubly
		this.tail = newNode
		this.length += 1
		return this
	}

	prepend(value){
		// const newNode = {
		// 	value: value,
		// 	next: null
		// }
		const newNode = new NodeClass(value)
		newNode.next = this.head
		//this.head.previous = newNode //doubly
		this.head = newNode
		this.length += 1
		return this
	}
	
	printList(){
		const array = []
		let currentNode = this.head
		while (currentNode !== null){
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		 return array
	}
	

	traverseToIndexForward(index){
		let counter = 0
		let currentNode = this.head
		while (counter !== index){
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	/*traverseToIndexBackward (index){ //doubly
		let counter = this.length - 1
		let currentNode = this.tail
		while (counter != index){
			currentNode = currentNode.previous
			counter--
		}
		return currentNode
	}*/

	insert (index, value){
		if (index >= this.length){
			this.append(value)
			return this.printList()
		}
		if (index === 0){
			this.prepend(value)
			return this.printList()
		}
		const newNode = new NodeClass(value)
		const leader = this.traverseToIndexForward(index - 1)
		//const follower = leader.next //doubly
		leader.next = newNode
		newNode.next = leader.next
		//newNode.previous = leader //doubly
		//follower.previous = newNode //doubly
		this.length++
		return this.printList()

	}

	reverse(){
		if (!this.head.next){
			return this.head
		}
		let firstItem = this.head
		this.tail = this.head
		let secondItem = firstItem.next
		while (secondItem){
			const temp = secondItem.next
			secondItem.next = firstItem
			firstItem = secondItem
			secondItem = temp
		}
		this.head.next = null
		this.head = firstItem
		return this.printList()
	}

	remove (index){
		if (index >= this.length){
			return `The array is only ${this.length - 1} indexes.`
		}

		if (index === 0){
			this.length--
			this.head = this.head.next
			this.head.previous = null
			return this.printList()
		}

		const leader = this.traverseToIndexForward(index - 1)
		const unwantedNode = leader.next
		//const follower = unwantedNode.next //doubly
		// * (leader) * (unwantedNode) * (follower)

		if (index === this.length - 1){
			leader.next = null
			this.tail = leader
		}
		else {
			leader.next = unwantedNode
			//follower.previous = leader //doubly
		}
		this.length--
		return this.printList()
		/* my attempt -- worked besides 0 index
		if (index === 0){
			const removeItem = this.head
			this.head = this.traverseToIndex(1)
			this.head.next = this.traverseToIndex(1)
		}
		const removeItem = this.traverseToIndex(index)
		const leader = this.traverseToIndex(index - 1)
		const holdPointer = removeItem.next
		leader.next = holdPointer
		//delete removeItem
		this.length--
		return this.printList()
		*/
	}


}
//const myLinkedList = new LinkedList(10)
//myLinkedList.append(5)
// myLinkedList.prepend(1)
// //myLinkedList.append(18)
// console.log(myLinkedList.insert(1,3))
// // console.log(myLinkedList.insert(1,66))
// console.log(myLinkedList.remove(1))
// console.log(myLinkedList.remove(1))
// // console.log(myLinkedList.remove(3))
// //console.log(myLinkedList.printList())
// console.log(myLinkedList)
//console.log(myLinkedList.reverse())


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
//   myStack.push('udemy')
//   myStack.push('discord')
//   //console.log(myStack.push('discord'))
//   //console.log(myStack.peek())
//   myStack.pop()
//   myStack.pop()
//   //myStack.pop()
//   console.log(myStack)
  //console.log(myStack.isEmpty())
  
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
  
  const myStack = new Array();
  myStack.push('google')
  myStack.push('udemy')
  myStack.push('discord')
  console.log(myStack.array.length)
  console.log(myStack.array)

//   //console.log(myStack.push('discord'))
  
  myStack.pop()
  console.log(myStack.array)
  console.log(myStack.peek())
  //myStack.pop()
  //myStack.pop()
  //console.log(myStack)
  //console.log(myStack.isEmpty())