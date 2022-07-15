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

numbers = [5,2,100,9,26,5]

function insertSort(array){
	//starting at index 0, check if next value is less than
	// swap if yes, stay if no
	const length = array.length
	for (let i = 0; i < length; i++){
		if (array[i] < array[0]){
			//move number to the first position
			array.unshift(array.splice(i,1)[0])
		} else {
			//find where number should go
			for (let j =1; j < i; j++){
				if (array[i] > array[j-1] && array[i] < array[j]){
					//move nuber to the right spot
					array.splice(j,0,array.splice(i,1)[0])
				}
			}
		}
	}

}
//insertSort(numbers)

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
 //better solution
const insertionSort1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    while (array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }
  return array;
};
 
// insertionSort1(numbers);
// console.log(numbers)



function bubbleSort1(array){
	const length = array.length
	for (let i = 0; i < length; i++){
		for (let j = 0; j < length; j++){
			if (array[j] > array[j+1]){
				//swap numbers
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
}
// bubbleSort1(numbers)
// console.log(numbers)




function selectionSort(array){
	const length = array.length
	for (let i = 0; i < length; i++){
		//console.log(array)
		let min = i
		let temp = array[i]

		for (let j = i+1; j < length; j++){
			if (array[j] < array[min]){
				min = j 
			}
		}

		array[i] = array[min]
		array[min] = temp
	}
return array
}

// selectionSort(numbers)
// console.log(numbers)

function bubbleSort(array){
	let sort = []
	for (let i = 0; i < array.length; i++){
		for (let j = i + 1; j < array.length; j++)
		if (array[i] < array[j]){
			sort.push(array[i])
			sort.push(array[j])
		}
		else {
			sort.push(array[j])
		}
	}
	console.log('done')
	return sort
}
//console.log(bubbleSort(numbers))


//merge sort
const numbers1 = [99,44,6,2,1,5,63,87,283,4,0]

function mergeSort(array){
	if (array.length === 1) {
		return array
	}

	//split array into right and left
	const length = array.length
	const middle = Math.floor(length / 2)
	const left = array.slice(0,middle)
	const right = array.slice(middle,length)

	return merge(
		mergeSort(left),
		mergeSort(right)
	)

	function merge(left, right){
		const result = []
		let leftIndex = 0
		let rightIndex = 0
		while( leftIndex < left.length && rightIndex < right.length){
			if (left[leftIndex] < right[rightIndex]){
				result.push(left[leftIndex])
				leftIndex++
			}
			else {
				result.push(right[rightIndex])
				rightIndex++
			}
		}
		return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
	}
}
//const answer = mergeSort(numbers1)
//console.log(answer)

//quick sort
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
//quickSort(numbers, 0, numbers.length - 1);
//console.log(numbers);


//SORTING QUESTIONS

//#1 - Sort 10 schools around your house by distance:
//answer - insertion sort, reason -> small data set 
//class answer - insertion sort, reason -> fast on small sorts, easy to code, space complexity of O(1)

//#2 - eBay sorts listings by the current Bid amount:
//answer - heap sort -> root will be the highest value
//class answer - radix or counting sort. reason -> a bid is within a reasonable dollar range and can be assumed its a fixed integer where you can beat O(n log n) with O(nk) or )(n+k)

//#3 - Sport scores on ESPN
//answer - merge sort -> pretty fast and not worried about worst case or memory
//class answer - Quick sort -> not quick but worried about all the formats of data and memory that it will need to keep

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//answer - merge sort - large database and you might not have the memory to hold it all if you chose quick sort
//class answer - merge sort - large data can impact performance

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//answer - insertion sort reason -> partially sorted
//class answer - insertion sort -> same reason, partially sorted

//#6 - Temperature Records for the past 50 years in Canada
//answer - merge sort -> assume outside database and its alot of data
//class answer - if no decimal places, radix or counting sort
// if decimal places -> quick sort, in memory sorting and save on space complexity

//#7 - Large user name database needs to be sorted. Data is very random.
//answer - merge sort reason-> memory might be an issue but this is faster than quick sort
//class answer - merge sort if we arent concerned with memory, or quick sort if a good pivot can be chosen and data set isnt that large

//#8 - You want to teach sorting for the first time
//answer - bubble sort or selection sort - help understand comparison sorting
//class answer - bubble sort



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