class Node:
    def __init__(self, value):
        self.value=value
        self.next=None

class List:
    def __init__(self):
        self.head=None

    def add_Node(self, value):
        if self.head:
            runner=self.head
            while(runner.next):
                runner=runner.next
            runner.next=Node(value)
        else:
            self.head=Node(value)
        return self
    
    def print_list(self):
        if self.head:
            output_string=""
            runner=self.head
            while(runner):
                output_string+=f'{runner.value} '
                runner=runner.next
            print(output_string)
        else:
            print('List is empty')

new_list=List()
new_list.print_list()
new_list.add_Node(5).add_Node(25).add_Node(100)
new_list.print_list()