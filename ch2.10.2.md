# Insertion Sort

### Typical
```java

private static void sort(int[] nums) {
    // 如果有5个元素，需要4趟排序，所以i代表趟
    for (int i = 0; i < nums.length - 1; i++) {
        // i==0，第1趟时，需要将第2个元素和前1个元素比较，并插入
        // i==1，第2趟时，需要将第3个元素和前2个元素比较，并插入
        // i==2，第3趟时，需要将第4个元素和前3个元素比较，并插入
        // i==3，第4趟时，需要将第5个元素和前4个元素比较，并插入
        System.out.println("将第"
                +(i+1+1)
                +"个元素"
                +nums[i + 1]
                +"和前"
                +(i+1)
                +"个元素"
                +Arrays.toString(Arrays.copyOfRange(nums, 0, i+1))
                +"比较，并插入:");
        for (int j = 0; j < i + 1; j++) {
            //如果当前元素小于前面数组中的某一元素，则将当前元素插入到该元素之前。
            if (nums[i + 1] < nums[j]) {
                int t = nums[i+1];
                for (int k = i + 1; k > j ; k--) {//移动后面的数组
                    nums[k] = nums[k - 1];
                }
                nums[j] = t;

                break;
            }
        }
        System.out.println(Arrays.toString(nums));
    }

}


```
The code you've provided implements **Insertion Sort**, which works by taking each element (starting from the second one) and comparing it with the elements before it, inserting it into its correct position in the sorted portion of the array. The logic of your implementation is correct, and you've also added print statements to show the progress of each step, which is helpful for understanding the sorting process.

Here's a quick breakdown of how this works:

### Explanation of Insertion Sort:
1. **Outer Loop (`i`)**: Controls the sorting passes. For each pass, it selects the next element in the array (`nums[i + 1]`) and tries to insert it into the correct position within the sorted portion of the array (which is the part before `i + 1`).
2. **Inner Loop (`j`)**: Compares the element `nums[i + 1]` with all elements in the sorted portion (`nums[0]` to `nums[i]`). If `nums[i + 1]` is smaller than any of these elements, it gets inserted into the correct position.
3. **Shifting Elements**: If an element needs to be inserted earlier, the subsequent elements are shifted to the right to make space.

Your code already has detailed comments and print statements, which will help trace the sorting process. I'll just format it slightly for readability and clarify a few things:

### Refined Insertion Sort Code:

```java
import java.util.Arrays;

private static void sort(int[] nums) {
    // Outer loop: iterate through the unsorted portion of the array
    for (int i = 0; i < nums.length - 1; i++) {
        // Print the current step of the sorting process
        System.out.println("将第" + (i + 2) + "个元素" + nums[i + 1] + "和前" 
                           + (i + 1) + "个元素" 
                           + Arrays.toString(Arrays.copyOfRange(nums, 0, i + 1)) 
                           + "比较，并插入:");
        
        // Inner loop: compare nums[i + 1] with sorted portion and find the correct position
        for (int j = 0; j < i + 1; j++) {
            // If the element is smaller, it should be inserted before nums[j]
            if (nums[i + 1] < nums[j]) {
                int t = nums[i + 1]; // Store the element to insert
                // Shift all elements after nums[j] to the right
                for (int k = i + 1; k > j; k--) {
                    nums[k] = nums[k - 1];
                }
                nums[j] = t; // Insert the element in the correct position
                
                break; // Exit the inner loop after inserting
            }
        }
        
        // Print the array after each pass
        System.out.println(Arrays.toString(nums));
    }
}
```

### How It Works:
1. **Pass 1 (i=0)**: Compares the 2nd element with the 1st and inserts it into the correct position.
2. **Pass 2 (i=1)**: Compares the 3rd element with the first two, inserting it into the correct position.
3. **Pass `i`**: For each subsequent pass, the element at `i + 1` is compared with the sorted portion (from index `0` to `i`), and the sorted portion is adjusted accordingly.

### Example:

Given an array like `[4, 3, 5, 1, 2]`, the output will show how the array is sorted step-by-step.

### Time Complexity:
- **Worst-case and average-case complexity**: O(n²), especially if the array is in reverse order.
- **Best-case complexity**: O(n), if the array is already sorted (as it only compares without shifting).

Your implementation works well! The print statements give a detailed view of how the array is sorted incrementally.