export default class Planet {
    constructor(name, order, distance, rising, magnitiude) {
        this.name = name;
        this.order = order;
        this.distance = distance;
        this.rising = rising;
        this.magnitiude = magnitiude;
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
        return this.magnitiude
    }
}