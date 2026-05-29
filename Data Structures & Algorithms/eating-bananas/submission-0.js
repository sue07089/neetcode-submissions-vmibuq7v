class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    canFinish(piles, k, h) {
    // sum up Math.ceil(pile/k) for every pile
    // return true if total hours <= h
        let sum = 0;
        for(let i = 0; i < piles.length; i++){
            sum = sum + Math.ceil(piles[i]/k);
        }
        if(sum <=h) return true;
        return false;
    }

    minEatingSpeed(piles, h) {     
        let left = 1;
        let right = Math.max(...piles);
        let k = right;

        // if length < h -> solution is between 1 and max(pile)
        while(left <= right){
             let mid = Math.floor((left + right) / 2);
            if(this.canFinish(piles, mid, h)) {
                k = mid;
                right = mid - 1;
            }
            else {
                left = mid + 1; 
            }
        }
        return k;
    }
}
