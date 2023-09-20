//? REVERSE A LINKED LIST ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface NodeLL<T extends string | number> {
    value: T;
    next: NodeLL<T> | null;
}

function createLL<T extends string | number>(array: T[]) {
    const firstNode: NodeLL<T> = {
        value: array[0],
        next: null
    };
    let currentNode: NodeLL<T> = firstNode;
    for (let i = 1; i < array.length; i++) {
        currentNode.next = {
            value: array[i],
            next: null
        };
        currentNode = currentNode.next;
    }
    return firstNode;
}

function consoleLogLL<T extends number | string>(node: NodeLL<T> | null) {
    const values: T[] = [];

    while (node) {
        values.push(node.value);
        node = node.next;
    }
    console.log(values.join(' -> ') + " -> " + "null");
}

function reverseLL<T extends string | number>(node: NodeLL<T>) {
    return reverseLLInner(null, node);
    function reverseLLInner(firstNode: NodeLL<T> | null, secondNode: NodeLL<T>) {
        if (secondNode.next) {
            const temp: NodeLL<T> = secondNode.next;
            secondNode.next = firstNode;
            return reverseLLInner(secondNode, temp);
        } else {
            secondNode.next = firstNode;
            return secondNode;
        }
    }
}

const ll: NodeLL<number> = createLL([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Linked List:");
consoleLogLL(ll);
const reversedLL: NodeLL<number> = reverseLL(ll);
console.log("\nReversed Linked List:");
consoleLogLL(reversedLL);