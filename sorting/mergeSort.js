//implement merge sort

function mergeSort(arr){
	//edge case
	  if (arr.length === 1){
		return arr
	  }
	
	
	//split the array
	  const middle = Math.floor(arr.length / 2)
	  const left = arr.slice(0,middle)
	  const right = arr.slice(middle, arr.length)
	
	
	//recursive call 
	  return merge( 
		mergeSort(left),
		mergeSort(right)
	  )
	
	
	//merge function that has the result, runs a loop to compare and push to result, returns the results
	  function merge(left,right){
		let result = []
		while(left.length && right.length ){
			if(left[0] < right[0]){
				result.push(left.shift())
		  }else{
			result.push(right.shift())
		  }
		}
		
		return result.concat(left.slice()).concat(right.slice())
	  }
	}

	//console.log(mergeSort([4,3,100,9,1,6,77,32]))
	
	function indexFind (n, arr){
		const merge = mergeSort(arr)
		return merge[n]
		
	}
	//console.log(indexFind(4, [90,28,15,1,24,35,17]))



