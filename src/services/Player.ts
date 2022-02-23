class Player {
    private name: String
    constructor(name) {
        this.name = name
    }
    public getName() {
        return this.name
    }
    public setName(name: String) {
        this.name = name
    }
}
export default Player