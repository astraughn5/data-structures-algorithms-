//declare a node
class Node{
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
insertFirstAppend(value){
	this.head = new Node(value, this.head)
	this.length ++
}

//insert last
insertLastPrepend(value){
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
		previous = current //node before index
		count++
		current = current.next //node after index
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
			return true
		}
	}
	return false
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
linkedList.insertFirstAppend(40)
linkedList.insertFirstAppend(30)
linkedList.insertFirstAppend(10)
linkedList.insertLastPrepend(50)
//linkedList.insertNodeAtIndex(5,1)
linkedList.insertNodeSorted(31)
console.log(linkedList.printListInArray())
//console.log(linkedList.checkCycle())
console.log(linkedList)
console.log(linkedList.reverseList())
//linkedList.removeAtIndex(0)
//linkedList.getValueFromIndex(10)
//linkedList.clearList()
//console.log(linkedList)
