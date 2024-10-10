# Bubble sort

### Typical
```java
package tt.lab.algorithm;

import java.util.Arrays;

public class Solution {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(sort(new int[]{4, 1, 2, 5, 3})));
    }
    private static int[] sort(int[] array) {
        //i表示趟数．
        for (int i=0;i<array.length-1;i++){//如果有5(n=5)个元素，只要进行4(n-1)趟排序．(即n-1 = ii.length-1)．
            //j控制每趟排序中比较的元素
            for(int j=0;j<array.length-1-i;j++){//第１次排序要比较４(n-1)对数据，第２次要比较３(n-2)对数据... (即n-1 = ii.length-1-0, n-2 = ii.length-1-1, ...)

                //排序过程：
                //第１趟排序，i==0, 即ii.length-1-i==4，所以只要比较0-1, 1-2, 2-3, 3-4
                //第２趟排序，i==1, 即ii.length-1-i==3，所以只要比较0-1, 1-2, 2-3
                //第３趟排序，i==2, 即ii.length-1-i==2，所以只要比较0-1, 1-2
                //第４趟排序，i==3, 即ii.length-1-i==1，所以只要比较0-1
                boolean b = array[j]>array[j+1];//判断第１个数是否比第２个大
                if(b){//如果第１个数大于第２个数，交换．
                    int t = array[j];
                    array[j]=array[j+1];
                    array[j+1] = t;
                }
            }
        }

        return array;
    }


}


```
Your code is now a correct implementation of **Bubble Sort**, which compares adjacent elements and swaps them if they are out of order. It efficiently moves the largest elements to the end of the array in each pass, reducing the number of comparisons for subsequent passes.

Here's a summary of how this works:

### Explanation of the Bubble Sort Algorithm:
1. **Outer Loop (`i`)**: Controls how many passes are made. In each pass, one more element at the end is in the correct position, so we reduce the number of elements to check.
2. **Inner Loop (`j`)**: Controls comparisons in each pass. It compares adjacent elements (`array[j]` and `array[j + 1]`) and swaps them if the element at `j` is greater than the one at `j + 1`.
3. **Efficiency**: In each pass, the largest unsorted element "bubbles" to the end of the array, reducing the number of elements to compare in the next pass.




### How Bubble Sort Works:
- **Pass 1**: Compares all elements and moves the largest element to the end.
- **Pass 2**: Ignores the last (sorted) element, compares the rest, and moves the second-largest element to the second-last position.
- **Pass `i`**: Each subsequent pass ignores more elements at the end as they are already in the correct position.

### Time Complexity:
- **Worst-case and average-case complexity**: O(n²), since it compares every pair of adjacent elements multiple times.
- **Best-case complexity**: O(n), if the array is already sorted.

Your algorithm works fine as is, but an optimization is possible by adding a **flag** to stop the algorithm early if no swaps were made in a pass (indicating the array is already sorted). Let me know if you want this optimization!

### Naive
Always compare with the last unsorted element.
```java
    private static int[] sort2(int[] array) {
        //i表示趟数．
        for (int i=0;i<array.length-1;i++){
            for(int j=0;j<array.length-1-i;j++){
                boolean b = array[j]>array[array.length-1-i];//判断第j个数是否比最后一个数大
                if(b){//如果第j个数大于最后一个数，交换．
                    int t = array[j];
                    array[j]=array[array.length-1-i];
                    array[array.length-1-i] = t;
                }
            }
        }

        return array;
    }
```
The code you've provided appears to implement a version of the bubble sort algorithm, but there is a logical error in it. The way it's written, it compares each element to the last unsorted element (`array[array.length - 1 - i]`), which isn't typical for a bubble sort, and this leads to incorrect sorting behavior.

Here’s what’s happening in your code:
- You loop over the array and in each pass (`i`), you compare the element at `j` with the element at `array.length - 1 - i`.
- If the element at `j` is greater than the element at `array.length - 1 - i`, they are swapped, which is not the usual behavior for a sorting algorithm like bubble sort. Normally, adjacent elements are compared and swapped.

To fix this, we need to compare each element with the next element (`array[j]` with `array[j + 1]`), and swap them if they are out of order. Here's the corrected version of the bubble sort:


### Explanation of Changes:
1. **Comparison logic**: Now, `array[j]` is compared with `array[j + 1]`, which is the correct way to compare adjacent elements in bubble sort.
2. **Swap condition**: If `array[j] > array[j + 1]`, the elements are swapped to ensure smaller elements "bubble" to the beginning of the array.

Now, the function should correctly sort the array in ascending order.