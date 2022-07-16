//SINGLY LL! 

//create your node class
class NodeClass1 {
	constructor(value){
		this.value = value
		this.next = null
	}
}
const a = new NodeClass1(1)
const b = new NodeClass1(2)
const c = new NodeClass1(3)
const d = new NodeClass1(4)
a.next = b
b.next = c
c.next = d

function printLinkedList (head){
	let current = head
	while (current !== null){
		console.log(current.value)
		current = current.next
	}
}

function recursivePrintLinkedList(head){
	if (head === null){
		return
	}
	console.log(head.value)
	recursivePrintLinkedList(head.next)
}
//recursivePrintLinkedList(a)

function traverseAndCount(head){
	let counter = 0
	let current = head
	while(current !== null){
		console.log(current.value)
		counter++
		current = current.next
	}
	console.log(counter)
}
//printLinkedList(a)
//traverseAndCount(a)

function returnValuesInArray(head){
	if (head === null){
		return
	}
	let arr = []
	let current = head
	while(current !== null){
		arr.push(current.value)
		current = current.next
	}
	console.log(arr)
	return arr
}
//returnValuesInArray(a)

function recursiveReturnValuesInArray(head){
	let arr = []
	fillValues(head,arr)
	return arr
}
function fillValues(head,arr){
		if (head === null){
			return
		}
		arr.push(head.value)
		return fillValues(head.next, arr)
	}

//console.log(recursiveReturnValuesInArray(a))

function traverseAndSum(head){
	let sum = 0
	let current = head
	while(current !== null){
		sum += current.value
		current = current.next
	}
	return sum
}
//console.log(traverseAndSum(a))

function reverse(head){
	let current = head 
	
	let prev = null
	while(current !== null){
		let nextTemp = current.next
		current.next = prev
		prev = current
		current = nextTemp
	}
	return prev
}
console.log(reverse(a))


// ----------------------------------
class NodeClass {
	constructor(value){
		this.value = value
		this.next = null
	}
}

class LinkedList { //SINGLY
	constructor(value){
		this.head = {
			value: value,
			next: null,
		}
		this.tail = this.head
		this.length = 1
	}
	append(value){
		// const newNode = {
		// 	value: value,
		// 	next: null
		// }
		const newNode = new NodeClass(value)

		this.tail.next = newNode
		this.tail = newNode
		this.length += 1
		return this
	}

	prepend(value){
		// const newNode = {
		// 	value: value,
		// 	next: null
		// }
		const newNode = new NodeClass(value)
		newNode.next = this.head
		this.head = newNode
		this.length += 1
		return this
	}
	
	printList(){
		const array = []
		let currentNode = this.head
		while (currentNode !== null){
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		 return array
	}
	

	traverseToIndexForward(index){
		let counter = 0
		let currentNode = this.head
		while (counter !== index){
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	

	insert (index, value){
		if (index >= this.length){
			this.append(value)
			return this.printList()
		}
		if (index === 0){
			this.prepend(value)
			return this.printList()
		}
		const newNode = new NodeClass(value)
		const leader = this.traverseToIndexForward(index - 1)
		leader.next = newNode
		newNode.next = leader.next
		this.length++
		return this.printList()

	}

	reverse(){
		if (!this.head.next){
			return this.head
		}
		let firstItem = this.head
		this.tail = this.head
		let secondItem = firstItem.next
		while (secondItem){
			const temp = secondItem.next
			secondItem.next = firstItem
			firstItem = secondItem
			secondItem = temp
		}
		this.head.next = null
		this.head = firstItem
		return this.printList()
	}

	remove (index){
		if (index >= this.length){
			return `The array is only ${this.length - 1} indexes.`
		}

		if (index === 0){
			this.length--
			this.head = this.head.next
			this.head.previous = null
			return this.printList()
		}

		const leader = this.traverseToIndexForward(index - 1)
		const unwantedNode = leader.next
	

		if (index === this.length - 1){
			leader.next = null
			this.tail = leader
		}
		else {
			leader.next = unwantedNode
		}
		this.length--
		return this.printList()
		/* my attempt -- worked besides 0 index
		if (index === 0){
			const removeItem = this.head
			this.head = this.traverseToIndex(1)
			this.head.next = this.traverseToIndex(1)
		}
		const removeItem = this.traverseToIndex(index)
		const leader = this.traverseToIndex(index - 1)
		const holdPointer = removeItem.next
		leader.next = holdPointer
		//delete removeItem
		this.length--
		return this.printList()
		*/
	}


}
//const myLinkedList = new LinkedList(10)
//myLinkedList.append(5)
// myLinkedList.prepend(1)
// //myLinkedList.append(18)
// console.log(myLinkedList.insert(1,3))
// // console.log(myLinkedList.insert(1,66))
// console.log(myLinkedList.remove(1))
// console.log(myLinkedList.remove(1))
// // console.log(myLinkedList.remove(3))
// //console.log(myLinkedList.printList())
// console.log(myLinkedList)
//console.log(myLinkedList.reverse())



