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