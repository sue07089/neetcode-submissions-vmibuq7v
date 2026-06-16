class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(arr, target){
            let left = 0;
            let right =  arr.length-1;
            while(left <= right){
                let mid = Math.floor((left+right)/2);
                if(target === arr[mid]) return true;
                if(target > arr[mid]){
                    //look right
                    left = mid + 1;
                }
                else{
                    right = mid -1;
                }
            }
            return false;

    }

    searchMatrix(matrix, target) {
        //binary search on row in inner loop
        for(let i = 0; i < matrix.length; i++){
            let arr = [...matrix[i]];
            if (this.binarySearch(arr, target)) return true;
        }
        return false;
    }
}
