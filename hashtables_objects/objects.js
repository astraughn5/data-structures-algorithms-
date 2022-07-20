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

	print(){
		console.log(this.data)
	}
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  myHashTable.print()



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