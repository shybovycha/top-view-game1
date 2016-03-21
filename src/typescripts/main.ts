/// <reference path="phaser.d.ts"/>

/*class ImageResource {
    private _spritesheetId: string;
    private _spriteMapping: {[id: number]: string};

    get spritesheet(): string {
        return this._spritesheetId;
    }

    get spriteMapping(): {[id: number]: string} {
        return this._spriteMapping;
    }

    constructor(spritesheet: string, spriteMapping: {[id: number]: string}) {
        this._spritesheetId = spritesheet;
        this._spriteMapping = spriteMapping;
    }
}

class BaseMap {
    images: ImageResource;
    data: [[number]];
    texture: Phaser.RenderTexture;
    cellWidth: number;
    cellHeight: number;

    constructor(game: Phaser.Game) {
        var tmpStage = new Phaser.Stage(game);

        for (var i = 0; i < this.data.length; i++) {
            for (var t = 0; t < this.data[i].length; t++) {
                var cell = this.data[i][t];
                var spriteName = this.images.spriteMapping[cell];
                var x = i * this.cellWidth,
                    y = t * this.cellHeight;
                var cellSprite = new Phaser.Sprite()

                // tmpStage.addChildAt(x, y, spriteName);
                game.add.sprite()
            }
        }
    }
}*/

class Map {
    tilemap: Phaser.Tilemap;
    layer: Phaser.TilemapLayer;
    data: [[number]];
    tileWidth: number;
    tileHeight: number;

    constructor(game: Phaser.Game, tilesImageId: string) {
        this.tilemap = game.add.tilemap(null, this.tileWidth, this.tileHeight);
        this.tilemap.addTilesetImage(tilesImageId);

        this.layer = this.tilemap.create('Ground',
            this.data.length,
            Math.max.apply(null, this.data.map((e) => { return e.length; })),
            this.tileWidth,
            this.tileHeight);

        for (var i = 0; i < this.data.length; i++) {
            for (var t = 0; t < this.data[i].length; t++) {
                this.tilemap.putTile(this.data[i][t], i, t, this.layer);
            }
        }

        this.layer.resizeWorld();
    }
}

class Level1 extends Map {
    constructor(game: Phaser.Game, tilesImageId: string) {
        this.tileWidth = 96;
        this.tileHeight = 96;
        this.data = [
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11]];

        super(game, tilesImageId);
    }
}

class SimpleGame {
    game: Phaser.Game;
    map: Map;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    preload() {
        this.game.load.image('tiles', 'assets/tiles.jpg');
    }

    create() {
        this.map = new Level1(this.game, 'tiles');
    }
}

window.onload = () => {
    var game = new SimpleGame();
};