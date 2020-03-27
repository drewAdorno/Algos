import math
'''Sara is looking to hire an awesome web developer and has received applications from various sources. Her
assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values.
Because array elements are already in order, all duplicate values will be grouped together. As with all these
array challenges, do this without using any built-in array methods.
Second: solve this without using any nested loops.'''

def removeDuplicates(arr):
    newArr=[arr[0]]

    for i in range(1,len(arr)):
        if arr[i]!=newArr[len(newArr)-1]:
            newArr.append(arr[i])
    return newArr

# Array: Remove Negatives
# Implement removeNegatives() that accepts an array, removes negative values, and returns the same array
# (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
# Second: don’t use nested loops.


def removeNegatives(arr):
    x = 0
    while x < len(arr):
        if arr[x] < 0:
            arr.pop(x)
        else:
            x+=1
    return arr


#1,-2,3,4,5

#  Array: Second-to-Last
# Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short,
# return null.
def secondToLast(arr):
    if(len(arr)>=2):
        return arr[len(arr)-2]
    else:
        return None
#  Array: Nth-to-Last
# Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short,
# return null.
#condition_if_true if condition else condition_if_false

def nth_to_last(arr, i):
    return arr[len(arr) - i] if len(arr) >= i else None
     

#  Array: Second-Largest
# Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short,
# return null.
def secondLargest(arr):
    arr.sort(reverse=True)
    return arr[1] if len(arr)>=2 else None

#  Array: Nth-Largest
# Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth largest element, where (N-1) elements are larger. Return null if needed.
def nth_largest(arr, n):
    arr.sort(reverse=True)
    print(arr)
    return arr[n - 1] if len(arr)>=n else None
