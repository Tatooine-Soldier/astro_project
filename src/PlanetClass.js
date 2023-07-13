export default class Planet {
    constructor(name, order, distance, rising, magnitude, radius) {
        this.name = name;
        this.order = order;
        this.distance = distance;
        this.rising = rising;
        this.magnitude = magnitude;
        this.radius = radius;
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