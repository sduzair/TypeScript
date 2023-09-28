class C {
    private _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

const obj = new C();