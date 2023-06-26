// Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
