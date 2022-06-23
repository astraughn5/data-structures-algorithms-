// O(n) example
const fish = ['nemo'];
const fishSchool = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'nemo']
const large = new Array(100).fill('nemo');

function findFish(array){
	let t0 = performance.now();
	for (let i = 0; i < array.length; i++){
		if (array[i] === 'nemo'){
			console.log('Found nemo');
		}
	}
	let t1 = performance.now();
	console.log('Call to find the fish took ' + (t1-t0) + 'ms');
}

//findFish(large)
 
//how can measure the Big O of a for loop?
// guess: O(n) since it is a for loop where n is the number of times it needs to loop


// O(1) example
const array = [0,1,2,3,4,5]
function consoleLogFirstItem (array) {
	console.log(array[0]) // O(1)
	console.log(array[1]) // O(1)
   }
//consoleLogFirstItem(array) // function is O(2) everytime since there are 2 operations


//O(n^2) which is called quadratic time
const boxes = [1,2,3,4,5]

function logPairs(array){
	for (let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length; j++){
			console.log(array[i] , array[j])
		}
	}
}
logPairs(boxes)
//this is O(n) * O(n) = O(n^2)