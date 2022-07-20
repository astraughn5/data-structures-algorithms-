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
	let i = 1
	let j = 1
	while (array1Item || array2Item){
		if(!array2Item || array1Item < array2Item){ //using !array2Item bc array 2 is smaller than array 1, if array1Item is less than array 2, undefined is always < a value
			mergedArray.push(array1Item)
			array1Item = array1[i]
			i++
		} else {
			mergedArray.push(array2Item)
			array2Item = array2[j]
		 	j++
		}
		// if (array2Item > array1Item){
		// 	mergedArray.push(array2Item)
		// 	array2Item = array2[j]
		// 	j++
		// }
	}

	return mergedArray
}

//mergeSortedArrays1(array5, array6)



  
 
  
//   const myStack = new Array();
//   myStack.push('google')
//   myStack.push('udemy')
//   myStack.push('discord')
//   console.log(myStack.array.length)
//   console.log(myStack.array)

//   //console.log(myStack.push('discord'))
  



  

class Node {
	constructor(value){
		this.left = null,
		this.right = null,
		this.value = value
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}
	insert(value){
		const newNode = new Node(value)
		if (!this.root){
			this.root = newNode
		} else {
			let currentNode = this.root
			while(true){
				if (value < currentNode.value){
					if (!currentNode.left){
						currentNode.left = newNode
						return this
					}
					currentNode = currentNode.left
				} else {
					if (!currentNode.right){
						currentNode.right = newNode
						return this
					}
					currentNode = currentNode.right
				}
			}
		}
	}

	lookup(value){
		if (!this.root){
			return false
		}
		let currentNode = this.root

		while(currentNode){
			if (value < currentNode.value){
				currentNode = currentNode.left
			} else if (value > currentNode.value){
				currentNode = currentNode.right
			} else if (value === currentNode.value){
				return currentNode
			}
		}
		return null
	}

	remove(value){

	}

}
function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	console.log(tree)
	return tree;
  }

// const newTree = new BinarySearchTree()
// newTree.insert(9)
// newTree.insert(12)
// newTree.insert(7)
// newTree.insert(20)
// console.log(newTree.lookup(7))
//JSON.stringify(traverse(newTree.root))

//GRAPHS
class Graph { 
	constructor() { 
	  this.numberOfNodes = 0;
	  this.adjacentList = {
	  }; 
	} 
	addVertex(node)  { 
		// if (this.adjacentList === {}){
		// 	this.adjacentList.vertex = node
		// }
		this.adjacentList[node] = []
		this.numberOfNodes++
	} 
	addEdge(node1, node2) { 
	  this.adjacentList[node1].push(node2)
	  this.adjacentList[node2].push(node1) //since it is undirected you need to flip the code
	} 
	showConnections() { 
	  const allNodes = Object.keys(this.adjacentList); 
	  for (let node of allNodes) { 
		let nodeConnections = this.adjacentList[node]; 
		let connections = ""; 
		let vertex;
		for (vertex of nodeConnections) {
		  connections += vertex + " ";
		} 
		console.log(node + "-->" + connections); 
	  } 
  } 
  } 

  const myGraph = new Graph()
  myGraph.addVertex('0')
  myGraph.addVertex('1')
  myGraph.addVertex('2')
  myGraph.addVertex('3')
  myGraph.addVertex('4')
  myGraph.addVertex('5')
  myGraph.addVertex('6')
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');