class MinStack {
    constructor() {
        this.stack = [];
        this.minstack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // Push to minStack: either val or previous min, whichever is smaller
        const currentMin = this.minstack.length === 0 
            ? val 
            : Math.min(val, this.minstack[this.minstack.length - 1]);
        this.minstack.push(currentMin);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length > 0){
            this.stack.pop();
            this.minstack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
         if(this.stack.length > 0){
            return this.stack[this.stack.length - 1];
        }
        return null;
    }

    /**
     * @return {number}
     */
    getMin() {
       if(this.minstack.length > 0){
            return this.minstack[this.minstack.length - 1];
       }
       return null;
    }
}
