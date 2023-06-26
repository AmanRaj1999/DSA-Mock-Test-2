// Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10

console.log(queue.size()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.isEmpty()); // Output: true
