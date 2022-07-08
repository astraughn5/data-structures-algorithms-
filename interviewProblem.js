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
console.log(bubbleSort(numbers))