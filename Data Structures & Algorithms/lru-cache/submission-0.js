class Node {
    constructor(key = 0, value = 0){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _insertToFront(node) {
       node.next = this.head.next;
       node.prev = this.head;
       this.head.next.prev = node;
       this.head.next = node;
       
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key);
             this._remove(node);
             this._insertToFront(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this._remove(node);
            this._insertToFront(node);
            return;
        }

        const node = new Node(key, value);
        this.cache.set(key, node);
        this._insertToFront(node);

        if (this.cache.size > this.capacity) {
            const lru = this.tail.prev;
            this._remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
