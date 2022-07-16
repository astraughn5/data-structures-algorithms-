//DOUBLY LL !
/*class NodeClass {
	constructor(value){
		this.value = value
		this.next = null
		//this.previous = null //doubly
	}
}*/

class LinkedList { //this is a doubly linkedlist not a singly, if you remove previous it will go back to singly
	constructor(value){
		this.head = {
			value: value,
			next: null,
			//previous: null //doubly
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
		//newNode.previous = this.tail //doubly
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
		//this.head.previous = newNode //doubly
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
	/*traverseToIndexBackward (index){ //doubly
		let counter = this.length - 1
		let currentNode = this.tail
		while (counter != index){
			currentNode = currentNode.previous
			counter--
		}
		return currentNode
	}*/

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
		//const follower = leader.next //doubly
		leader.next = newNode
		newNode.next = leader.next
		//newNode.previous = leader //doubly
		//follower.previous = newNode //doubly
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
		//const follower = unwantedNode.next //doubly
		// * (leader) * (unwantedNode) * (follower)

		if (index === this.length - 1){
			leader.next = null
			this.tail = leader
		}
		else {
			leader.next = unwantedNode
			//follower.previous = leader //doubly
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
