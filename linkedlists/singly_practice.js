//declare a node
/*class Node{
	constructor(value, next = null){
		this.value = value
		this.next = next
	}
}

//initialize list
class SinglyLinkedList {
	constructor(){
		this.head = null
		this.length = 0
	}

//insert first
insertFirstPrepend(value){
	this.head = new Node(value, this.head)
	this.length ++
}
prepend(value){
    if (this.length === 0){
      this.head = new Node (value)
    } else {
      this.head = new Node(value, this.head)  
    }  
  this.length++
}
append(value){
    let current = this.head
    while(current.next !== null){
      current = current.next
    }
    current.next = new Node(value)
    this.length++
	return
  }

insertNode(value,index){
    let current = this.head
    let counter = 0
    let previous
    const node = new Node(value)
    if(index > this.length){
     return this.append(value)
    }

    if (index ===  0){
       return this.prepend(value)
    }

    while(counter < index ){
      previous = current
      current = current.next
      counter++
    }
    node.next = current
    previous.next = node
    this.length++
    return
  }
	

//insert last
insertLastAppend(value){ //O(1) solution would be having a this.tail
	let node = new Node(value)
	let current
	if (this.head == null){
		this.head = node
	}else{
		current = this.head
		while (current.next !== null){ // when we get to the end we stop
			current = current.next
		}
	current.next = node // the list has ended and we add the node to the current.next
	}
	this.length ++
	return this
}

//insert node at index
insertNodeAtIndex(value,index){
	//if index is out of range of Linked List
	if(index > 0 && index > this.length){
		//this.insertLastPrepend(value) -> can make it to add to the end of LL if out of range
		return
	}
	//if first index
	if(index === 0){
		//this.insertFirstAppend(value) -> can use first function or
		this.head = new Node(value, this.head)
		return
	}
	const node = new Node(value)
	let current
	let previous

	current = this.head
	let count = 0
	while (count < index){
		console.log('count',count)
		previous = current //node before index
		console.log('previous', previous)
		count++
		current = current.next //node after index
		console.log('current', current)
	}
	node.next = current
	previous.next = node
	this.length++
}

//insert node in sorted way -- the linked list needs to be pre-sorted
insertNodeSorted(value){
	let current = this.head
	let node = new Node (value)
	if (this.length === 0){
		this.insertFirstAppend(value)
	}
	if (node.value <= current.value){
		node.next = this.head
		this.head = node
	} else {
		while(current.next != null && node.value > current.next.value){
			current = current.next // 0 ---- 5  -----  10 --> we want to add 8 so we find the 5 and make it current
		}
		node.next = current.next // since 5 is current, we set 8's next value to 10
		current.next = node // since 5 is current, we set 8 as the next value to 8 
	} // we create this 5 ---> 8 --> 10
	
	


	this.length++
	return 
}

removeAtIndex1(index){
	let current = this.head
	let counter = 0
	let prev 
	if (index > 0 && index > this.length){
	  return
	}

	if (index === 0){
	  this.head = current.next
	} else{
		while(counter < index){
			console.log(counter)
			counter++
			prev = current 
			current = current.next
		}
		prev.next = current.next
	}
	this.length--
	return
  }
  
//remove node at index
removeAtIndex(index){
	if (index > 0 && index > this.length){
		return this
	}
	let current = this.head
	let previous
	let count = 0

	//remove first
	if (index === 0){
		this.head = current.next
	} else { //remove other
		while (count < index){
			count++
			previous = current
			current = current.next
		}
		previous.next = current.next
	}
	this.length--
	return 
}

getValue(index){
	let current = this.head
	let counter = 0
	while(counter <= index){
		if ( counter === index){
			return current.value
			}
		counter++
	  current = current.next
	  
	}
}  
//get value from index
getValueFromIndex(index){
	let current = this.head
	let count = 0

	while (current !== null){
		if (count == index){
			console.log(current.value)
		}
	count++
	current = current.next
	}
	return
}

//print list in array
printListInArray(){
	let current = this.head
	let arr = []
	while (current !== null){
		arr.push(current.value)
		current = current.next
	}
	return arr
}

//clear list 
clearList(){
	this.head = null
	this.length = 0
	return 
}

//check if a cycle
checkCycle(){
	let fast = this.head
	let slow = this.head
	while (fast && fast.next){
		fast = fast.next.next
		slow = slow.next
		if(fast === slow){
			console.log(fast.value)
			return true
		}
	}
	return false
}
reverse(){
	let prev = null 
	let current = this.head
	let next = null
	while(current !== null){
	next = current.next 
	current.next = prev
	prev = current
	current = next
	}
	return prev
  }
  
  
//reverse a singlely linked list
reverseList(){
	let prev = null
	let current = this.head
	let next = null

	while(current !== null){
		next = current.next
		current.next = prev
		prev = current
		current = next
	}
	return prev
}
}
const linkedList = new SinglyLinkedList()
// linkedList.insertFirstPrepend(40)
// linkedList.insertFirstPrepend(30)
// linkedList.insertFirstPrepend(10)
// linkedList.insertLastAppend(50)
linkedList.prepend(30)
linkedList.prepend(20)
linkedList.prepend(10)
linkedList.prepend(5)
linkedList.insertNode(15,5)
//linkedList.removeAtIndex1(2)
//linkedList.removeAtIndex(1)
//linkedList.insertNode(15,1)
//console.log(linkedList.getValue(0))
//linkedList.insertLastAppend(20)
//linkedList.insertNodeAtIndex(5,1)
//linkedList.insertNodeSorted(31)
console.log(linkedList.printListInArray())

console.log(linkedList.reverse())
//console.log(linkedList.checkCycle())
console.log(linkedList)
//console.log(linkedList.reverseList())
//linkedList.removeAtIndex(0)
//linkedList.getValueFromIndex(10)
//linkedList.clearList()
//console.log(linkedList)
*/

class Node{
	constructor(value, next = null){
		this.value = value
		this.next = next
	}
}

class LL {
	constructor(){
		this.head = null
		this.length = 0
	}

	insert(value, index){
		let current = this.head
		let count = 0
		let prev
		let node = new Node(value)
		//check if index is greater than length
		//check if index = 0
		while (count < index){
			count++
			prev = current
			current = current.next
		}
		node.next = current
		prev.next = node
		this.length++
		return
	}

	prepend(value){
	  let current = this.head
	  if(!current){
		  this.head = new Node(value)
	  }else{
		  this.head = new Node(value, this.head)
	  }
	this.length++ 
	  return this
	}

	append(value){
		let current = this.head
		while(current.next !== null){
			current = current.next
		}
		current.next = new Node(value)
		this.length++
		return this
	}

	remove(index){
		let current = this.head
		let prev 
		let count = 0
		//check if index > length
		//check if index == 0
		while(count < index){
			prev = current
			current = current.next
			count++
		}
		prev.next = current.next
		this.length--
		return
	}
}

