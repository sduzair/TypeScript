//? REVERSE A LINKED LIST ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface NodeLL {
    value: number;
    next: NodeLL | null;
}

function createLL() {
    const firstNode: NodeLL = { value: 1, next: null };
    let prevNode: NodeLL = firstNode;
    for (let i = 2; i < 11; i++) {
        const llNode: NodeLL = { value: i, next: null };
        prevNode.next = llNode;
        prevNode = llNode;
    }
    return firstNode;
}

function consoleLogLL(node: NodeLL | null) {
    const values: number[] = [];

    while (node) {
        values.push(node.value);
        node = node.next;
    }
    console.log(values.join(' -> ') + " -> " + "null");
}

function reverseLL(node: NodeLL) {
    return reverseLLInner(null, node);
    function reverseLLInner(firstNode: NodeLL | null, secondNode: NodeLL) {
        if (secondNode.next) {
            const temp: NodeLL = secondNode.next;
            secondNode.next = firstNode;
            return reverseLLInner(secondNode, temp);
        } else {
            secondNode.next = firstNode;
            return secondNode;
        }
    }
}
const ll: NodeLL = createLL();
console.log("Linked List:");
consoleLogLL(ll);
const reversedLL: NodeLL = reverseLL(ll);
console.log("\nReversed Linked List:");
consoleLogLL(reversedLL);