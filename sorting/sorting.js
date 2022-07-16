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
const numbers1 = [99,44,6,2,1,5,63,87,283,4,0,0]

function mergeSort(array){
	//check if there are enough items to sort, this is the edge case
	if (array.length === 1) {
		return array
	}

	//split array into right and left
	const length = array.length
	const middle = Math.floor(length / 2)
	//take the array and split left and right
	const left = array.slice(0,middle)
	//dont need second parameter in right bc it default goes to the end
	const right = array.slice(middle,length)

	//recursively call mergeSort (left) & right -- split the input array in half until a sub-array with only one element is produced and it is returned
	return merge(
		mergeSort(left),
		mergeSort(right)
	)
//create a function that merges the split arrays in a sorted method
	function merge(left, right){
		const result = [];
	   
		//validate: items in array
		while(left.length && right.length){
		   //compare items
		 //console.log(result)  
		   if(left[0] < right[0]){
			 result.push(left.shift());
		   } else {
			 result.push(right.shift());
		  }
		}  
		//some of the elements might still be split so you use concat to merge so that you can some of the elements from either the left or the right. Since we know the result is sorted, the remaining value will be larger and merged at the end
		console.log(result)
		return result.concat(left.slice()).concat(right.slice());
		
		
	  }
	// function merge(left, right){
	// 	declare your result and depending if left or right is smaller you add to result
	//  const result = []
	// 	let leftIndex = 0 // increment left index if you add a left element
	// 	let rightIndex = 0 // increment right index if you add a right element
	//  continue running while the left index is less than the length AND right index is less than the length
	// 	while( leftIndex < left.length && rightIndex < right.length){
	// 		if (left[leftIndex] < right[rightIndex]){
	// 			result.push(left[leftIndex])
	// 			leftIndex++
	// 		}
	// 		else {
	// 			result.push(right[rightIndex])
	// 			rightIndex++
	// 		}
	// 	}
	// 	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
	// }
}
const answer = mergeSort(numbers1)
console.log(answer)

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
