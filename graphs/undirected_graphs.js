//GRAPHS
class Graph { 
	constructor() { 
	  this.numberOfNodes = 0;
	  this.adjacentList = {
	  }; 
	} 
	addVertex(node)  { 
		// if (this.adjacentList === {}){
		// 	this.adjacentList.vertex = node
		// }
		this.adjacentList[node] = []
		this.numberOfNodes++
	} 
	addEdge(node1, node2) { 
	  this.adjacentList[node1].push(node2)
	  this.adjacentList[node2].push(node1) //since it is undirected you need to flip the code
	} 
	showConnections() { 
	  const allNodes = Object.keys(this.adjacentList); 
	  for (let node of allNodes) { 
		let nodeConnections = this.adjacentList[node]; 
		let connections = ""; 
		let vertex;
		for (vertex of nodeConnections) {
		  connections += vertex + " ";
		} 
		console.log(node + "-->" + connections); 
	  } 
  	}
	  
	bfs(source, destination){ //use this to see if a path exists, this is the iterative approach of a cyclic graph
		const queue = [source]
		const visited = {}

		while(queue.length){
			let current = queue.shift()
			if (visited[current]){
				continue
			}
			if (current === destination){
				return true
			}
			visited[current] = true
			let neighbor = this.adjacentList[current]
			for (let i = 0; i < neighbor.length; i++){
				queue.push(neighbor[i])
			}
		}
		return false
	}  

	
	
  } 
  
function dfsPrint(graph, source){ //this is only for directed graphs, undirected will be endless loop
	let result = []
	const stack = [source]
	while(stack.length > 0){
		const current = stack.pop()
		result.push(current)
		//console.log(current)
		console.log(graph)
		//console.log(graph.adjacentList[current])
		for (let neighbor of graph.adjacentList[current]){
			stack.push(neighbor)
		}
	}
	return result
}

function bfsPrint(graph, source){ //only for directed graphs
	const queue = [source]
	let result = []
	while (queue.length > 0){
		const current = queue.shift()
		result.push(current)
		for (let neighbor of graph.adjacentList[current]){
			queue.push(neighbor)
		}
	}
}


  const myGraph = new Graph()
  myGraph.addVertex('0')
  myGraph.addVertex('1')
  myGraph.addVertex('2')
  myGraph.addVertex('3')
  myGraph.addVertex('4')
  myGraph.addVertex('5')
  myGraph.addVertex('6')
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '6'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  //myGraph.addEdge('6', '5');
  //myGraph.showConnections()
	console.log(myGraph.bfs('0','k')) 

	//console.log(myGraph)
//console.log(dfsPrint(myGraph, '0'))
//console.log(bfsPrint(myGraph, '2'))

