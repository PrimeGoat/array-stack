class Stack {
	constructor() {
		this.items = [];
	}
	push(data) {
		return this.items.push(data);
	}
	pop(data) {
		return this.items.pop();
	}
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.items);

console.log(myStack.pop());

console.log(myStack.items);