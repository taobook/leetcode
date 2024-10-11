# Selection Sort


Your code implements **Selection Sort**, which is a simple comparison-based sorting algorithm. The logic is correct, and it's neatly structured with utility methods from `SortUtils` like `swap` and `print` to aid in debugging and visualization. The main idea behind selection sort is to repeatedly find the minimum element from the unsorted portion of the array and place it at the beginning.

Here's a quick breakdown of the key parts of your code:

### Selection Sort Algorithm:
1. **Outer Loop (`i`)**: For each pass, it treats the portion of the array from index `i` onwards as unsorted. It assumes that the first element of the unsorted portion (`arr[i]`) is the smallest.
2. **Inner Loop (`j`)**: It searches for the smallest element in the unsorted portion of the array (`arr[i + 1]` to `arr[arr.length - 1]`). If it finds a smaller element, it updates the index `min`.
3. **Swapping**: Once the smallest element is found, it swaps it with the first element of the unsorted portion (`arr[i]`), thereby growing the sorted portion of the array.

### Code Example:

Here’s your code with a few explanations:

```java
package tt.lab.algorithm.sort;
import static tt.lab.algorithm.sort.SortUtils.*;
import java.util.Arrays;

public class SelectionSortC {
    public static void main(String[] args) {
       int[] unsorted = getUnsorted(); // Fetches an unsorted array
       print("unsorted", unsorted); // Prints the unsorted array
       sort(unsorted); // Sorts the array using selection sort
       print("sorted", unsorted); // Prints the sorted array
    }

    public static void sort(int[] arr) {
        // Outer loop: Move the boundary of the unsorted subarray one element at a time
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i; // Assume the first element is the smallest
            
            // Inner loop: Find the smallest element in the remaining unsorted array
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j; // Update index of the minimum element
                }
            }
            
            // Swap the found minimum element with the first element of the unsorted portion
            swap(arr, i, min);
        }
    }
}
```

### Utility Functions:
I assume you have the following utility functions in `SortUtils`:

1. **`swap(int[] arr, int i, int j)`**: Swaps the elements at index `i` and `j` in the array.
   ```java
   public static void swap(int[] arr, int i, int j) {
       int temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
   }
   ```

2. **`print(String message, int[] arr)`**: Prints the array with a label for better visualization.
   ```java
   public static void print(String message, int[] arr) {
       System.out.println(message + ": " + Arrays.toString(arr));
   }
   ```

3. **`getUnsorted()`**: Returns an unsorted array, which you use in the `main` method. You might have something like this:
   ```java
   public static int[] getUnsorted() {
       return new int[] {64, 25, 12, 22, 11}; // Example unsorted array
   }
   ```

### How Selection Sort Works:
- On each pass, it finds the smallest element in the unsorted portion of the array and places it at the beginning of that portion.
- After each pass, the boundary between the sorted and unsorted portions moves one step to the right.
- By the end of the sorting process, the entire array is sorted.

### Example Walkthrough:
For an input array like `[64, 25, 12, 22, 11]`, selection sort works as follows:
- **Pass 1**: Finds the minimum (11) and swaps it with the first element (64). Array becomes `[11, 25, 12, 22, 64]`.
- **Pass 2**: Finds the minimum (12) and swaps it with the second element (25). Array becomes `[11, 12, 25, 22, 64]`.
- **Pass 3**: Finds the minimum (22) and swaps it with the third element (25). Array becomes `[11, 12, 22, 25, 64]`.
- **Pass 4**: No swap is needed as the array is already sorted.

### Time Complexity:
- **Worst-case and average-case complexity**: O(n²) due to the two nested loops.
- **Best-case complexity**: O(n²), even if the array is already sorted, because it still performs all the comparisons.

This implementation of selection sort is correct and works efficiently for small datasets. For larger datasets, more advanced algorithms like merge sort or quicksort are typically used due to their better time complexity.