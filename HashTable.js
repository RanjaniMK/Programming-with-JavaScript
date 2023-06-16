class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }

    calculateHash(key) {
        return key.toString().length % this.size;
       }

       add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
           this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
           this.length++;
        }
        this.values[hash][key] = value;
      }
      search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          return this.values[hash][key];
        } else {
          return null;
        }
        class HashEntry{
            constructor(key, data){
                this.key = key;
                // data to be stored
                this.value = data;
                // reference to new entry
                this.next = null;
            }
        }
                
        let entry = new HashEntry(3, "Educative");
        console.log (String(entry.key) + ", " + entry.value);
   }

}