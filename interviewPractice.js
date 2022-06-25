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
const array2 = ['z','y','x']

const array3 = ['a','b','c','d','x']
const array4 = ['z','y','i']

 //PREP
 //P:are the parameters only strings in an array? will they always be different sizes? will one ever be blank? are they always lower case or case sensitive? will array 1 always be sorted with array 2 not being sorted? how large can the be array be?
 //R: result is a boolean of true or false based on minimum ONE common item
 //Example: see above

 function commonItems(input1, input2){
	// create a flattened array with all elements O(a * b)
	// use a filter to check if the element x has the same element O(n)
	// if array length is > 1 then return true otherwise return false O(1)
	//nested for loop
	let match = false

	for (let i = 0; i < input1.length; i++){
		for (let j = 0; j < input2.length; j++){
			if (input1[i] === input2[j]){
				match = true
			}
			else {
				match = false
			}
		}
	}
	return match
 }
 
 
 console.log(commonItems(array1,array2)) // will return true
 console.log(commonItems(array3, array4)) // will return false