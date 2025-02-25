class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}




//q1
// import Stack from './Stack.js';


// function reverseArrayUsingStack(arr) {
//     const stack = new Stack();
//     arr.forEach(element => stack.push(element));

//     const reversedArr = [];
//     while (!stack.isEmpty()) {
//         reversedArr.push(stack.pop());
//     }

//     return reversedArr;
// }

// const arr = [51, 2000, 4, 27];
// console.log("Original Array:", arr);

// const result = reverseArrayUsingStack(arr);

// console.log("Reversed Array:", result);




//q2
class QueueUsingTwoStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

const queue = new QueueUsingTwoStacks();
console.log("Original Queue:");
queue.enqueue("b");
queue.enqueue(27);
queue.enqueue(4);
console.log("Items in the queue after enqueueing:", ["b", 27, 4]);

console.log("\nDequeued Item:", queue.dequeue());

console.log("Final Queue after dequeue:");
console.log("Remaining items in the queue:", [queue.stack2.items[0], queue.stack2.items[1] || "empty"]);



//q3


// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));
// }

// const arr = [1, 2, 3, 4, 5];

// console.log("Original Array:", arr);
// const result = sumArray(arr);
// console.log("Sum of Array:", result);

//q4
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     display() {
//         let current = this.head;
//         const elements = [];
//         while (current) {
//             elements.push(current.data);
//             current = current.next;
//         }
//         console.log(elements.join(' -> '));
//     }

//     reverse() {
//         let prev = null;
//         let current = this.head;
//         let next = null;
        
//         while (current) {
//             next = current.next; 
//             current.next = prev; 
//             prev = current;      
//             current = next;
//         }
        
//         this.head = prev;
//     }
// }

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

// console.log("Original Linked List:");
// list.display();

// list.reverse();

// console.log("Reversed Linked List:");
// list.display();



//q5
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }

    deleteMiddle() {
        if (!this.head || !this.head.next) {
            return null;
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }

        if (prev) {
            prev.next = slow.next;
        }

        return slow.data;
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(33);
list.append(40);
list.append(55);

console.log("Original Linked List:");
list.display();

const deletedMiddle = list.deleteMiddle();
console.log("Deleted Middle Node:", deletedMiddle);

console.log("Updated Linked List:");
list.display();
