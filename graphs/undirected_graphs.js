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
// const myGraph = new Graph()
// myGraph.addVertex('0')
// myGraph.addVertex('1')
// myGraph.addVertex('2')
// myGraph.addVertex('3')
// myGraph.addVertex('4')
// myGraph.addVertex('5')
// myGraph.addVertex('6')
// myGraph.addEdge('3', '1'); 
// myGraph.addEdge('3', '4'); 
// myGraph.addEdge('4', '6'); 
// myGraph.addEdge('4', '5'); 
// myGraph.addEdge('1', '2'); 
// myGraph.addEdge('1', '0'); 
// myGraph.addEdge('0', '2'); 
// //myGraph.addEdge('6', '5');
// //myGraph.showConnections()
//   console.log(myGraph.bfs('0','k')) 

//   //console.log(myGraph)
// //console.log(dfsPrint(myGraph, '0'))
// //console.log(bfsPrint(myGraph, '2'))


//creating an algo to check if a path exists for an undirected graph
const edges = [
	['i','j'],
	['k','i'],
	['m','k'],
	['k','l'],
	['o','n']
]
//driver parent function
function undirectedPath(edges, nodeA, nodeB){ //using DFS to find edge and avoid cycles
 const graph = buildGraph(edges)
 return hasPath(graph, nodeA, nodeB, new Set()) //use a set for O(1) for insert and search
}
//traversal function with a set to guard against cycles
const hasPath = (graph, src, dst, visited) => {
	if (src === dst) return true

	if (visited.has(src)) return false
	visited.add(src)
	if(graph[src] !== undefined){
		for (let neighbor of graph[src]){
			if (hasPath(graph, neighbor, dst, visited) === true){
				return true
			}
		}
	}
	return false
}
//function to convert edge list to adjancency list
const buildGraph = (edges) => {
 const graph = {}

 for (let edge of edges){
	const [ a, b ] = edge
	if (!(a in graph)) graph[a] = []
	if (!(b in graph)) graph[b] = []
 	graph[a].push(b)
	graph[b].push(a)
 }
 return graph
}
  
console.log(undirectedPath(edges, 'i', 'l'))


const graph1 = {
	0: [8,1,5],
	1: [0],
	5: [0,8],
	8: [0,5],
	2: [3,4],
	3: [2,4],
	4: [3,2]
}

//count of components within a graph
const connectedComponentsCount = graph => {
	const visited = new Set()
	let count = 0

	for (let node in graph){
		if (explore(graph,node, visited) === true){
			count++
		}
	}
	return count
}
//dfs search
function explore(graph, current, visited){
	
	if (visited.has(String(current))){
		return false
	}
	visited.add(String(current))

	for (let neighbor of graph[current]){
		explore(graph, neighbor, visited)
	}
	return true 
}
console.log(connectedComponentsCount(graph1))

//count the number of nodes within a component and return the largest one
const largestNodeIsland = graph => {
	const visited = new Set()
	let longest = 0
	for (let node in graph){
		const size = exploreIslands(graph,node, visited)
		if (size > longest){
			longest = size
		}
	}
	return longest
}

function exploreIslands(graph, node, visited){
	if (visited.has(String(node))){
		return 0
	}
	let countNode = 1
	visited.add(String(node))

	for (let neighbor of graph[node]){
		countNode += exploreIslands(graph, neighbor, visited)
		//countNode++
	}
	return countNode 
}
//console.log(largestNodeIsland(graph1))

//shortest path, given a start and end node and want to return the shortest length (path length = the number of edges here)

//bfs for graph
const shortestPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph1(edges)
	const queue = [ [nodeA, 0] ]
	const visited = new Set([ nodeA ])

	while(queue.length > 0){
		const [node, distance] = queue.shift()

		if (node === nodeB) return distance

		for(let neighbor of graph[node]){
			if (!visited.has(neighbor)){
				visited.add(neighbor)
				queue.push( [neighbor, distance +1] )
			}
		}
	}

	return -1
}

const buildGraph1 = (edges) => {
	const graph = {}
	for (let edge of edges){
		const [ a, b ] = edge
		if (!(a in graph)){
			graph[a] = []
		}
		if (!(b in graph)){
			graph[b] = []
		}
		graph[a].push(b)
		graph(b).push(a)
	}

	return graph
}

//Island count
const grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W']
]
const islandCount = (grid) => {
	const visited = new Set()
	let count = 0
	for (let r = 0; r < grid.length; r++){
		for (let c = 0; c < grid[0].length; c++){
			if (explore1(grid, r, c, visited) === true){
				count++
			}
		}
	}
	return count
}

const explore1 = (grid, r, c, visited) => {
	const rowInBounds = 0 <= r && r < grid.length
	const colInBounds = 0 <= c && c < grid[0].length
	if (!rowInBounds || !colInBounds){
		return false
	}
	if (grid[r][c] === 'W'){
		return false
	}

	const pos = r + ',' + c
	if (visited.has(pos)){
		return false
	}
	visited.add(pos)

	//by using 1 base case you can guard against being out of bounds
	explore1(grid, r - 1, c, visited)
	explore1(grid, r + 1, c, visited)
	explore1(grid, r, c - 1, visited)
	explore1(grid, r, c + 1, visited)

	return true
}
//console.log(islandCount(grid))



//minimum island
const minIsland = (grid) => {
	const visited = new Set()
	let minSize = Infinity
	for (let r = 0; r < grid.length; r++){
		for (let c = 0; c < grid[0].length; c++){
			const size = explore2(grid, r, c, visited)
			if (size < minSize && size > 0){
				minSize = size
			}
		}
	}
	return minSize
}

const explore2 = (grid, r, c, visited) => {
	const rowInBounds = 0 <= r && r < grid.length
	const colInBounds = 0 <= c && c < grid[0].length

	if (!rowInBounds || !colInBounds){
		return 0
	}

	if (grid[r][c] === 'W'){
		return 0
	}
	const pos = r + ',' + c
	if (visited.has(pos)){
		return 0
	}
	visited.add(pos)
	
	let size = 1
	size += explore1(grid, r - 1, c, visited)
	size += explore1(grid, r + 1, c, visited)
	size += explore1(grid, r, c - 1, visited)
	size += explore1(grid, r, c + 1, visited)
	
	return size
}
//console.log(minIsland(grid))