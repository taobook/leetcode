

![img.png](img/bt_2.png)
```java
//针对1，2，3从左到右扫描，遇到每个数字，要么选，要么不选。
//数的每一层针对一个数字

private void dfs(int[] nums, int start, List<Integer> curr, List<List<Integer>> res) {
    if(start==nums.length) {
        res.add(new ArrayList<>(curr));//[], [1], [1, 2] [1, 2, 3] [1, 3] [2, 3] [3]
        return;
    }
    //选
    curr.add(nums[start]);
    dfs(nums, start+1, curr, res);

    //不选
    curr.remove(curr.size()-1);
    dfs(nums, start+1, curr, res);
}

```