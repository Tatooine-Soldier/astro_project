export default class Planet {
    constructor(name, order, distance, rising, magnitude) {
        this.name = name;
        this.order = order;
        this.distance = distance;
        this.rising = rising;
        this.magnitude = magnitude;
    }

    getName() {
        return this.name
    }

    getDistance() {
        return this.distance;
    }

    getRising() {
        return this.rising
    }

    getMagnitiude() {
        return this.magnitude
    }
}