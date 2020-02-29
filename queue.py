class Node:
    def __init__(self, value):
        self.value=value
        self.next=None
class Queue:
    def __init__(self):
        self.head=None
    def enqueue(self, value):
        if self.head:
            runner=self.head
            while(runner.next):
                runner=runner.next
            runner.next=Node(value)
        else:
            self.head=Node(value)
        return self
    
    def front(self):
        return self.head.value
    
    def isEmpty(self):
        if self.head:
            return False
        else:
            return True
    
    def dequeue(self):
        temp=self.head.value
        self.head=self.head.next
        return temp

queue1=Queue()
queue1.enqueue(1).enqueue(5).enqueue(10).enqueue(25)
print(queue1.dequeue())
print(queue1.dequeue())
print(queue1.dequeue())
print(queue1.dequeue())