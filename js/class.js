class Address {
    constructor() {
        this.streetAddress = '';
        this.city = '';
        this.state = '';
        this.postalCode = '';
    }

    setAddress(address) { this.streetAddress = address; }
    setCity(city) { this.city = city; }
    setState(state) { this.state = state; }
    setPostalCode(postalCode) { this.postalCode = postalCode; }

    getAddress() { return streetAddress; }
    getCity() { return city; }
    getState() { return state; }
    getPostalCode() { return postalCode; }
};

class Person {
    constructor (first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.address = new Address();
        this.phone = '';
        this.gender = '';
    }

    setAge(age) { this.age = age; }
    setPhone(phone) { this.phone = phone; }
    setGender(gender) { this.gender = gender; }

    getName() { return `${first} ${last}`; }
    getNameRev() { return `${last} ${first}`; }
    getAge() { return age; }
    getPhone() { return phone; }
    getGender() { return gender; }
};

export {Person, Address};