//Given a pointer to the head of a linked list, insert a new node before the head.

function insertNodeAtHead(head, data) {
    
    let newNode = new SinglyLinkedListNode(data);
    
    if (head) {
        newNode.next = head
        head = newNode
        return head
    } 
    head = newNode
    return head
}