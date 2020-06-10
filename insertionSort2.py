#[5,2,3,5,4]
#unordered side | ordered Side
#i=2
# 2,3,4,5,1
# 2,3,5,5|1
# 2,3,5,1,5
# 2,3,1,5,5

def insertion(arr):
    counter=0
    for i in range(1,len(arr)):
        #counter+=1
        #j=i
        while(arr[i-1]>arr[i] and i>0):
            #counter=counter+1
            arr[i-1],arr[i]=arr[i],arr[i-1]
            i=i-1
    #print(counter)
    return arr

print(insertion([2,3,4,5,1]))

