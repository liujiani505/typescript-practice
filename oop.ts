// Object oriented programming with Typescript

class Fighter {
    name:string
    hp:number = 20
    strength:number
    constructor(name:string ) {
        this.name = name
        this.strength = Math.floor(Math.random()*5) + 1
    }
    attack(target: Fighter){
        console.log(`${this.name} attacks ${target.name} and does ${this.strength} damage`)
        target.hp -= this.strength
    }
}

const ken: Fighter = new Fighter("ken")
const ryu: Fighter = new Fighter("ryu")

while(true){
    ryu.attack(ken)
    if(ken.hp <= 0){
        console.log("Ken Loses")
        break
    }
    ken.attack(ryu)
    if(ryu.hp <= 0){
        console.log("Ryu Loses")
        break
    }
}