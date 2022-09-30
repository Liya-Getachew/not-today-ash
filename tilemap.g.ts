// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3c000b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000007020000000000000000000000000000000000000000000000000000000000000000000007000600000000000000000002000000000000000000000602000000000000000000000000000000000000000000000000000000000000000600020202020200000007060000020000000002000000000000000200000700000000000600000006000000000000000000060005000000000000010100000000000000020202020200000000000006000007000000020000000200020200020202000002000700070001000600020202010101010101020200000000000000000000000000000000000002020202020200000000000000000000000000000200000202020202000200000000020202020202030300000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000030303030303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
............................................................
............................................................
............................................................
............................................................
.........................2..........2.......................
.......................2...........2........................
.........22222.......2....2.......2.........................
......22.......22222.............2...2.22.222..2.....2...222
22222222..................222222..............2..22222.2....
22222222....................................................
222222......................................................
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
