class KeyValuePair {
    constructor() {
    }
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue('Dean', { name: 'Dean', surname: 'Dupalov' });
kvp.display();
