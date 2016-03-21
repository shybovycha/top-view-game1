/// <reference path="phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Map = (function () {
    function Map(game, tilesImageId) {
        this.tilemap = game.add.tilemap(null, this.tileWidth, this.tileHeight);
        this.tilemap.addTilesetImage(tilesImageId);
        this.layer = this.tilemap.create('Ground', this.data.length, Math.max.apply(null, this.data.map(function (e) { return e.length; })), this.tileWidth, this.tileHeight);
        for (var i = 0; i < this.data.length; i++) {
            for (var t = 0; t < this.data[i].length; t++) {
                this.tilemap.putTile(this.data[i][t], i, t, this.layer);
            }
        }
        this.layer.resizeWorld();
    }
    return Map;
})();
var Level1 = (function (_super) {
    __extends(Level1, _super);
    function Level1(game, tilesImageId) {
        this.tileWidth = 96;
        this.tileHeight = 96;
        this.data = [
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11],
            [11, 11, 11, 11, 11]];
        _super.call(this, game, tilesImageId);
    }
    return Level1;
})(Map);
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('tiles', 'assets/tiles.jpg');
    };
    SimpleGame.prototype.create = function () {
        this.map = new Level1(this.game, 'tiles');
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=main.js.map