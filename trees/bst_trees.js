class Node {
	constructor(data, left = null, right = null){
		this.data = data 
		this.left = left 
		this.right = right 
	}
}

class BST {
	constructor(){
		this.root = null
	}

	add(data){
		const newNode = new Node(data)
		if (!this.root){
			this.root = newNode
			return
		}else {
			let currentNode = this.root
			while(true){
				if (data < currentNode.data){
					if (!currentNode.left){
						currentNode.left = newNode
						return
					}
					currentNode = currentNode.left
				} else if (data > currentNode.data){
					if (!currentNode.right){
						currentNode.right = newNode
						return
					}
					currentNode = currentNode.right
				}
			}
		}
	}

	findMin(){
		let currentNode = this.root
		while (currentNode.left !== null){
			currentNode = currentNode.left
		}
		return currentNode.data
	}

	findMax(){
		let currentNode = this.root
		while(currentNode.right !== null){
			currentNode = currentNode.right
		}
		return currentNode.data
	}

	findNode(data){
		if (!this.root){
			return false
		}
		let currentNode = this.root
		while(currentNode){
			if (data < currentNode.data){
				currentNode = currentNode.left
			} else if (data > currentNode.data){
				currentNode = currentNode.right
			} else if (data === currentNode.data){
				return currentNode
			}
		}
		return null
	}

	isPresent(data){
		let currentNode = this.root
		while(currentNode){
			if (data === currentNode.data){
				return true
			}

			if (data < currentNode.data){
				currentNode = currentNode.left
			} else {
				currentNode = currentNode.right
			}
		}
		return false
	}

	remove(data){
		const removeNode = function (node,data){
			if (node === null){
				return null
			}
			if (data === node.data){
				// node has no children
				if (node.left === null && node.right === null){
					return null
				}
				//node has no left child (1 child)
				if (node.left === null){
					return node.right
				}
				//node has no right child (1 child)
				if (node.right === null){
					return node.left
				}
				// node has two children
				let tempNode = node.right
				while (tempNode.left !== null){
					tempNode = tempNode.left
				}
				node.data = tempNode.data
				node.right = removeNode(node.right, tempNode.data)
				return node
			}else if(data < node.data){
				node.left = removeNode(node.left, data)
				return node
			}else {
				node.right = removeNode(node.right, data)
				return node
			}
		}
		//call the function and pass in the root and look for the node we are looking to delete
		this.root = removeNode(this.root, data)
	}

	dfsInOrder(){
		function traverseInOrder(node, list){
			if (node.left){
				traverseInOrder(node.left, list)
			}
			list.push(node.data)
			if (node.right){
				traverseInOrder(node.right, list)
			}
			return list;
		}
		return traverseInOrder(this.root, [])
	}

	dfsPreOrder(){
		function traversePreOrder(node, list){
			list.push(node.data)
			if (node.left){
				traversePreOrder(node.left, list)
			}
			if (node.right){
				traversePreOrder(node.right, list)
			}
			return list;
		}
		return traversePreOrder(this.root, [])
	}

	dfsPostOrder(){
		function traversePostOrder(node, list){
			if (node.left){
				traversePostOrder(node.left, list)
			}
			if (node.right){
				traversePostOrder(node.right, list)
			}
			list.push(node.data)
			return list;
		}
		return traversePostOrder(this.root, [])
	}

	bfs(){
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while (queue.length > 0){
			currentNode = queue.shift();
			list.push(currentNode.data);
			if (currentNode.left){
				queue.push(currentNode.left)
			}
			if (currentNode.right){
				queue.push(currentNode.right);
			}
		}
		console.log(list)
		return list
	}

	findMinHeight(node = this.root) {
		if (node == null) {
			return -1;
		};
		let left = this.findMinHeight(node.left);
		let right = this.findMinHeight(node.right);
		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		};
	}

	findMaxHeight(node = this.root) {
		if (node == null) {
			return -1;
		};
		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);
		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		};
	}

	isBalanced() {
		return (this.findMinHeight() >= this.findMaxHeight() - 1)
	  }
	
	isValidBST(root){
		function helper(root, min, max){
			if (!root){
				return true
			}

			if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
				return false
			}
			return helper(root.left, min, root.val) && helper(root.right, root.val, max)
		}
		return helper(root,null,null)
	}
}

// const invertTree = (tree) => {
// 	if(!tree) {
// 	  return;
// 	}
	
// 	const left = invertTree(tree.left);
// 	const right = invertTree(tree.right);
	
// 	tree.left = right;
// 	tree.right = left;
	
// 	return tree;
//   }

// var invertTree = function(root) {
//     if (!root) return null
//     const invert = (root) => {
//         if (!root){return}
//         let left = root.left
//         root.left = root.right
//         root.right = left
//         invert(root.left)
//         invert(root.right)
//         return root
//     }
    
//     root = invert(root)
//     return root
// };

var invertTree = root => {
    if (!root) return root;
    let tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
    return root;
};

const bst = new BST()
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);
//bst.remove(4)
//console.log(bst.findNode(3))
//console.log(bst.findMax())
//console.log(bst.findMin())
//console.log(bst.isPresent(3))
console.log('not inverted',bst)


console.log(invertTree(bst))
//console.log('inverted',bst)
// console.log(bst.findMinHeight())
// console.log(bst.findMinHeight())
// console.log(bst.isBalanced())
// console.log(bst.isValidBST(9))
//bst.bfs()
// console.log(bst.dfsInOrder())
// console.log(bst.dfsPreOrder())
// console.log(bst.dfsPostOrder())