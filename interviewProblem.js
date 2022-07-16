//go through 15 steps to try to solve the google practice interview to make the naive solution

const array1 = [1,2,3,9]
const sum1 = 8
//output false

const array2 = [1,2,3,4,4]
const sum2 = 5
//output [4,4]

//P: are the arrays always integers? are they always whole numbers? will it always be in an array? should i assume the array can be very large? the sum will always be a whole number?
//R: a matching pair that equals the sum. it will only be 2 numbers? provided in an array? will it be blank if there is no pair? will there always be one pair? will it always return the first one that meets the criteria?


//brute force - quadratic
function findPair1 (array, sum){
	let stack = []
	//loop through array and add the index with the other indexes -- nested loop O(n^2) - quadratic
	for (let i = 0; i < array.length; i++){
		for (let j = i + 1; j < array.length; j++){
			if (array[i] + array[j] === sum){
				if (stack.length < 2){
					stack.push(array[i], array[j])
				}
			}
		}
	}
	// if sum equals 8, return the pair else return no match or empty array
	console.log(stack)
}

//findPair1(array1, sum1)
//findPair1(array2, sum2)


//const array1 = [1,2,3,9]
//const sum1 = 8
//output false

//const array2 = [1,2,3,4,4]
//const sum2 = 8
//not the best approach bc it is quadratic and will not scale well
//better approach would be 
function findPair2 (array, sum){
	// make the function O(n)
	// make the array have a complementary value for each index
	// check the complementary value for an element
	// return the index matching the complementary and the element
	
	//this solution does not return the pairs and is only checking boolean
	let mySet = new Set()

	for (let i = 0; i < array.length; i++){
		if (mySet.has(array[i])) {
			return true;
		  }
		mySet.add(sum - array[i])
	}
	return false

	// console.log(mySet)
	// console.log(stack)

}
function findPair3(nums,target){ //this one returns the indexes of the values
	const difference = new Set()
    let stack = []
    for (let i = 0; i < nums.length; i++){
        if (difference.has(nums[i])){
            stack.push(nums.indexOf(target-nums[i]),i)
        }
        difference.add(target - nums[i])
    }
    return stack
}

// console.log(findPair2(array1, sum1))
// console.log(findPair2(array2, sum2))


function findFactorialRecursive(number){
	if (number === 2){
		return 2
	}
	return number * findFactorialRecursive(number - 1)
}

//console.log(findFactorialRecursive(5))

function findFactorialIterative(number){
	let answer = 1
	if (number === 2){
		answer = 2
	}
	for (let i = number; i >= 1; i--){
		answer = i * answer
	}
	return answer
}
//console.log(findFactorialIterative(5))

function fibonnaciRecursive(n){ // O(2^N)
	if (n < 2){
		return n
	}

	return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2)
}
//console.log(fibonnaciRecursive(8))


function fibonnaciIterative(n){ //O(n)
	let arr = [0,1]
	for (let i = 2; i <= n; i++){
		arr.push(arr[i-2] + arr[i-1])
	}

	return arr[n]

}
//console.log(fibonnaciIterative(3))




//BFS vs DFS

//If you know a solution is not far from the root of the tree:
//BFS - bc it starts at the root node

//If the tree is very deep and solutions are rare: 
//BFS bc DFS will take a long time in the deep section

//If the tree is very wide:
// DFS (BFS will need too much memory to keep track of all the nodes in queue)

//If solutions are frequent but located deep in the tree:
//DFS - better at diving deep first

//Determining whether a path exists between two nodes:
//DFS - good at answering does this path exist bc it follows the branches 

//Finding the shortest path:
//BFS 

//
class Node {
	constructor(value){
	  this.left = null;
	  this.right = null;
	  this.value = value;
	}
  }
  
  class BinarySearchTree {
	constructor(){
	  this.root = null;
	}
	insert(value){
	  const newNode = new Node(value);
	  if (this.root === null) {
		this.root = newNode;
	  } else {
		let currentNode = this.root;
		while(true){
		  if(value < currentNode.value){
			//Left
			if(!currentNode.left){
			  currentNode.left = newNode;
			  return this;
			}
			currentNode = currentNode.left;
		  } else {
			//Right
			if(!currentNode.right){
			  currentNode.right = newNode;
			  return this;
			} 
			currentNode = currentNode.right;
		  }
		}
	  }
	}
	lookup(value){
	  if (!this.root) {
		return false;
	  }
	  let currentNode = this.root;
	  while(currentNode){
		if(value < currentNode.value){
		  currentNode = currentNode.left;
		} else if(value > currentNode.value){
		  currentNode = currentNode.right;
		} else if (currentNode.value === value) {
		  return currentNode;
		}
	  }
	  return null
	}
	remove(value) {
	  if (!this.root) {
		return false;
	  }
	  let currentNode = this.root;
	  let parentNode = null;
	  while(currentNode){
		if(value < currentNode.value){
		  parentNode = currentNode;
		  currentNode = currentNode.left;
		} else if(value > currentNode.value){
		  parentNode = currentNode;
		  currentNode = currentNode.right;
		} else if (currentNode.value === value) {
		  //We have a match, get to work!
		  
		  //Option 1: No right child: 
		  if (currentNode.right === null) {
			if (parentNode === null) {
			  this.root = currentNode.left;
			} else {
			  
			  //if parent > current value, make current left child a child of parent
			  if(currentNode.value < parentNode.value) {
				parentNode.left = currentNode.left;
			  
			  //if parent < current value, make left child a right child of parent
			  } else if(currentNode.value > parentNode.value) {
				parentNode.right = currentNode.left;
			  }
			}
		  
		  //Option 2: Right child which doesnt have a left child
		  } else if (currentNode.right.left === null) {
			currentNode.right.left = currentNode.left;
			if(parentNode === null) {
			  this.root = currentNode.right;
			} else {
			  
			  //if parent > current, make right child of the left the parent
			  if(currentNode.value < parentNode.value) {
				parentNode.left = currentNode.right;
			  
			  //if parent < current, make right child a right child of the parent
			  } else if (currentNode.value > parentNode.value) {
				parentNode.right = currentNode.right;
			  }
			}
		  
		  //Option 3: Right child that has a left child
		  } else {
  
			//find the Right child's left most child
			let leftmost = currentNode.right.left;
			let leftmostParent = currentNode.right;
			while(leftmost.left !== null) {
			  leftmostParent = leftmost;
			  leftmost = leftmost.left;
			}
			
			//Parent's left subtree is now leftmost's right subtree
			leftmostParent.left = leftmost.right;
			leftmost.left = currentNode.left;
			leftmost.right = currentNode.right;
  
			if(parentNode === null) {
			  this.root = leftmost;
			} else {
			  if(currentNode.value < parentNode.value) {
				parentNode.left = leftmost;
			  } else if(currentNode.value > parentNode.value) {
				parentNode.right = leftmost;
			  }
			}
		  }
		return true;
		}
	  }
	}
	breadthFirstSearch(){
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while (queue.length > 0){
			currentNode = queue.shift();
			list.push(currentNode.value);
			if (currentNode.left){
				queue.push(currentNode.left)
			}
			if (currentNode.right){
				queue.push(currentNode.right);
			}
		}
		console.log(list)
		return list
	}
	breadthFirstSearchRecursive(queue,list){
		if (!queue.length){
			return list;
		}
		let currentNode = queue.shift();
		list.push(currentNode.value);
		if (currentNode.left){
			queue.push(currentNode.left)
		}
		if (currentNode.right){
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchRecursive(queue, list)
	}
	DFSInOrder(){
		return traverseInOrder(this.root, [])
	}

	DFSPreOrder(){
		return traversePreOrder(this.root, [])
	}

	DFSPostOrder(){
		return traversePostOrder(this.root, [])
	}

	
  }

  function traverseInOrder(node, list){
	if (node.left){
		traverseInOrder(node.left, list)
	}
	list.push(node.value)
	if (node.right){
		traverseInOrder(node.right, list)
	}
	return list;
}
function traversePreOrder(node, list){
	list.push(node.value)
	if (node.left){
		traversePreOrder(node.left, list)
	}
	if (node.right){
		traversePreOrder(node.right, list)
	}
	return list;
}
function traversePostOrder(node, list){
	if (node.left){
		traversePostOrder(node.left, list)
	}
	if (node.right){
		traversePostOrder(node.right, list)
	}
	list.push(node.value)
	return list;
}
   //     9
  //  4     20
  //1  6  15  170
//   const tree = new BinarySearchTree();
//   tree.insert(9)
//   tree.insert(4)
//   tree.insert(6)
//   tree.insert(20)
//   tree.insert(170)
//   tree.insert(15)
//   tree.insert(1)
//   tree.remove(170)
//   JSON.stringify(traverse(tree.root))
//  // tree.breadthFirstSearch()
//   //console.log(tree.breadthFirstSearchRecursive([tree.root],[]))
//   console.log(tree.DFSInOrder())
//   console.log(tree.DFSPreOrder())
//   console.log(tree.DFSPostOrder())
 
  
  function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
  }
  let calculations = 0
  function fibonacci(n){
	calculations++  
	if (n < 2){
		  return n
	  }
	  return fibonacci(n-1) + fibonacci(n-2)
  }
  //console.log(fibonacci(7))
  

  function fibonacciMem(){
	  let cache = {}
	  return function fib (n){
		calculations++  
		if (n in cache){
			  return cache[n]
		  }else {
			  if (n < 2){
				  return n
			  }else{
				  cache[n] = fib(n-1) + fib(n-2)
				  return cache[n]
			  }
		  }
	  }
  }

  function fibBottomUp(n){
	  let answer = [0,1]
	  for (let i =2; i <= n; i++){
		  answer.push(answer[i-2] + answer[i-1])
	  }
	  return answer.pop()
  }

  const fastFib = fibonacciMem()
  console.log(fastFib(10))
  console.log('calculations', calculations)