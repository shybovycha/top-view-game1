class Point {
    x: number;
    y: number;
}

class RespawnPoint extends Point {
    team: string;
}

class Map {
    tilemap: Object;
    tileId: Object;
    data: [[number]];
    texture: Object;
}

class MapImpl extends Map {
    respawnPoints: [[RespawnPoint]];

    constructor() {
        super();
    }
}

class FillableValue<T> {
    current: T;
    max: T;
}

class Character {
    team: string;
    position: Point;

    weapon: Weapon;
    armor: Armor;
    skills: [Skill];
    equipment: [Equipment];

    actionPoints: FillableValue<number>;
    healthPoints: FillableValue<number>;

    eventListeners: [EventListener];

    move(to: Point) {}
    shoot(target: Character) {}

}

class Weapon {
    accuracy: number;
    damage: number;
    radius: number;

    shoot(target: Character) {}
}

class Armor {
    armorPoints: FillableValue<number>;
    dodgeChance: number;

    defend() {}
}

class Skill {
    constructor(owner: Character) {}

    trigger() {}
}

class Equipment {
    uses: FillableValue<number>;
}

class AICharacter extends Character {

}

class Mission {}