//if needing to implement a queue, linked lists are better
class NodeClass {
	constructor(value){
		this.value = value
		this.next = null
	}
}
class Queue { //FIFO
	constructor(){
	  this.first = null;
	  this.last = null;
	  this.length = 0;
	}
	peek() { //return first person in queue
		if (this.isEmpty()){
			return null
		}
		return this.first
	}
	enqueue(value){ //add person at end of queue 
		const person = new NodeClass(value)
		if (this.isEmpty()){ // adding Alex
			this.first = person
			this.last = person
		}else { // adding Julie -- Alex + Julie		
			this.last.next = person
			this.last = person
		}
		this.length++
		return this
	}
	dequeue(){ //remove person at the front of queue
		if (this.isEmpty()){
			return null
		}
		if (this.first === this.last){
			this.last = null
		}
		this.first = this.first.next
		this.length--
		return this
	}
	isEmpty(){
		if (this.length === 0){
			return 'Queue is Empty'
		}
	}
  }
  
//   const myQueue = new Queue();
//   myQueue.enqueue('Alex')
//   myQueue.enqueue('Julie')
//   myQueue.enqueue('Gary')
//   myQueue.dequeue()
//   myQueue.dequeue()
//   myQueue.dequeue()
//   console.log(myQueue)