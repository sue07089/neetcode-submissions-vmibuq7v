class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /**
     * 1.have another array and since number are in range [1, n], as you traverse, 
     * add the i number at newArr[i] , if there is already a number then thats the duplicate
     * 2. treat array as linked list , use floyds algo slow and fast pointers to detect a cycle
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];
        do{
             slow = nums[slow];
            fast = nums[nums[fast]];
        }
        while(fast != slow)

        slow = nums[0];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

    return slow;

    }
}
