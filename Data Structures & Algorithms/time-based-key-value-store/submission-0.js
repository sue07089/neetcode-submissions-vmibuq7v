class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set = (key, value, timestamp) => {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key).push([timestamp, value]);
    }

    get = (key, timestamp) => {
        const arr = this.store.get(key);
        if (!arr || arr.length === 0) return "";

        let left = 0;
        let right = arr.length - 1;
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid][0] <= timestamp) {
                result = arr[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}