#[5,4,6,7,2]

def iSort(arr):
    for i in range(1,len(arr)):                     # looping through full array started at the 2nd number in array
        j=i                                         # Creating an incrementer for the while loop   
        while(arr[j-1] > arr[j] and j>0):           
                                                    #While the previous number in the array is greater then the currentNumber we're looking at
            arr[j-1],arr[j]=arr[j],arr[j-1]         #Swap those two values
            j-=1                                    #Decrement i to move one spot inward
    
    return arr                                      #Return sorted list

print(iSort([5,4,6,7,2]))
