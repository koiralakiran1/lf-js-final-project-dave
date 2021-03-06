
export var spriteConfigs = {};
export var gttdConfigs = {};
export var ddImageConfigs = {};

var spriteImage = new Image();
var ddImage1 = new Image();
var ddImage2 = new Image();
var ddImage3 = new Image();
var ddImage4 = new Image();
var goThruTheDoorImage = new Image();


spriteImage.onload = function() {
    console.log('Image loaded');
    spriteConfigs = {
        0: {// BLACK_BACKGROUND
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 0,
            maxIndexX: 10, //total 11
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        1: {// BLOCK_RED_BRICK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        2: {// BLOCK_BLUE_BRICK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        3: {// BLOCK_GREYBROWN_PATTERN
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        4: {// BLOCK_REDBROWN_PATTERN
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        5: {// BLOCK_SKYBLUE_WATERY
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 5,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        // 6: {// BLOCK_TRIANGLE_BOTTOM_LEFT
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 6,
        //     indexY: 0,
        //     maxIndexX: 10,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        // 7: {// BLOCK_TRIANGLE_TOP_LEFT
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 7,
        //     indexY: 0,
        //     maxIndexX: 10,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        // 8: {// BLOCK_TRIANGLE_TOP_RIGHT
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 8,
        //     indexY: 0,
        //     maxIndexX: 10,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        // 9: {// BLOCK_TRIANGLE_BOTTOM_RIGHT
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 9,
        //     indexY: 0,
        //     maxIndexX: 10,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        6: {// EXTRA_TUNNEL_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        7: {// EXTRA_TUNNEL_BOTTOM
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        8: {// EXTRA_BLOCK_PINK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        10: {// BLOCK_SILVER_STEEL
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 10,
            indexY: 0,
            maxIndexX: 10,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },

        11: {// CONSUMABLE_GEM_SKYBLUE_DIAMOND
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        12: {// CONSUMABLE_GEM_RED_DIAMOND
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        13: {// CONSUMABLE_PINK_SPHERE
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        14: {// CONSUMABLE_GUN
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        15: {// CONSUMABLE_REDYELLOW_RING
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        16: {// CONSUMABLE_GREENGREY_WAND
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 5,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        17: {// CONSUMABLE_REDYELLOW_CROWN
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 6,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        18: {// CONSUMABLE_LAMP_KEY not of 2nd row
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 4,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        19: {// CONSUMABLE_JETPACK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 8,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        20: {// CONSUMABLE_LIFE
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 9,
            indexY: 1,
            maxIndexX: 9,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },

        21: {// KILLER_ORANGE_FIRE
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 5,
            maxIndexX: 3,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        22: {// KILLER_PINK_FLAME
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 6,
            maxIndexX: 3,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        23: {// KILLER_SKYBLUE_WATER
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 7,
            maxIndexX: 2,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        // 24: {// KILLER_ENEMY_BROWN
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 0,
        //     indexY: 10,
        //     maxIndexX: 3,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        // 25: {// KILLER_ENEMY_PINK
        //     isAnimation: false,
        //     imageSource: spriteImage,
        //     indexX: 2,
        //     indexY: 10,
        //     maxIndexX: 0,
        //     singleWidth: 64,
        //     singleHeight: 64,
        //     spritePosX: function() {
        //         return this.indexX * this.singleWidth;
        //     },
        //     spritePosY: function() {
        //         return this.indexY * this.singleHeight;
        //     },
        // },
        26: {// KILLER_DAVE_BURN
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 10,
            maxIndexX: 1,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        31: {// EXTRA_LIFE
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        32: {// EXTRA_DOOR
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        33: {// EXTRA_TUNNEL_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        34: {// EXTRA_TUNNEL_BOTTOM
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        35: {// EXTRA_BLOCK_PINK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 8,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
        },
        36: {// EXTRA_DAVE_BULLET_GREY_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 12,
            maxIndexX: 1,
            singleWidth: 32,
            singleHeight: 16,
            spritePosX: function() {
                return (this.indexX * this.singleWidth);
            },
            spritePosY: function() {
                return (this.indexY * 64)+112;
            },
        },
        37: {// EXTRA_ENEMY_BULLET_YELLOW_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 12,
            maxIndexX: 1,
            singleWidth: 64,
            singleHeight: 16,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64)+128;
            },
        },
        38: {// EXTRA_DAVE_BULLET_GREY_LEFT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 12,
            maxIndexX: 1,
            singleWidth: 32,
            singleHeight: 16,
            spritePosX: function() {
                return (this.indexX * this.singleWidth);
            },
            spritePosY: function() {
                return (this.indexY * 64)+112;
            },
        },
        39: {// EXTRA_ENEMY_BULLET_YELLOW_LEFT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 12,
            maxIndexX: 1,
            singleWidth: 64,
            singleHeight: 16,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64)+128;
            },
        },
        41: {// MAIN_CHARACTER_STILL
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 3,
            maxIndexX: 0,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * this.singleHeight);
            },
        },
        42: {// MAIN_CHARACTER_MOVE_FRONT
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 3,
            maxIndexX: 3,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * this.singleHeight);
            },
        },
        43: {// MAIN_CHARACTER_MOVE_BACK
            isAnimation: true,
            imageSource: spriteImage,
            indexX: 5,
            indexY: 3,
            maxIndexX: 7,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * this.singleHeight);
            },
        },
        44: {// MAIN_CHARACTER_JUMP_FRONT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 3,
            maxIndexX: 4,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * this.singleHeight);
            },
        },
        45: {// MAIN_CHARACTER_JUMP_BACK
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 8,
            indexY: 3,
            maxIndexX: 8,
            singleWidth: 64,
            singleHeight: 64,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * this.singleHeight);
            },
        },
        71: {// letterA
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 11,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        72: {// letterC
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 11,
            maxIndexX: 1,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        73: {// letterD
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 11,
            maxIndexX: 1,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        74: {// letterE
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 11,
            maxIndexX: 3,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        79: {// letterL
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 8,
            indexY: 11,
            maxIndexX: 3,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        80: {// letterN
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 9,
            indexY: 11,
            maxIndexX: 3,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        81: {// letter O
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 10,
            indexY: 11,
            maxIndexX: 10,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        83: {// letterR
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 12,
            indexY: 11,
            maxIndexX: 12,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        84: {// letterS
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 13,
            indexY: 11,
            maxIndexX: 13,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        87: {// letter V
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 16,
            indexY: 11,
            maxIndexX: 17,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        88: {// letter :
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 17,
            indexY: 11,
            maxIndexX: 17,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return (this.indexY * 64);
            },
        },
        90: {// digit0
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 0,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        91: {// digit1
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 1,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        92: {// digit2
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 2,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        93: {// digit3
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 3,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        94: {// digit4
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 4,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        95: {// digit5
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 5,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        96: {// digit6
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 6,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        97: {// digit7
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 7,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        98: {// digit8
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 8,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
        99: {// digit9
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 9,
            indexY: 12,
            maxIndexX: 0,
            singleWidth: 32,
            singleHeight: 48,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return ((this.indexY-1) * 64 + 48);
            },
        },
    };
};
goThruTheDoorImage.onload = function() {
    console.log('gttd loaded');
    gttdConfigs = { //gttdImage
            isAnimation: false,
            imageSource: goThruTheDoorImage,
            indexX: 0,
            indexY: 0,
            maxIndexX: 0,
            singleWidth: 344,
            singleHeight: 28,
            spritePosX: function() {
                return this.indexX * this.singleWidth;
            },
            spritePosY: function() {
                return this.indexY * this.singleHeight;
            },
    };
};
ddImage1.onload = function() {
    console.log('dd1 loaded');
    ddImageConfigs[0] = {
        isAnimation: true,
        imageSource: ddImage1,
        indexX: 0,
        indexY: 0,
        maxIndexX: 0,
        singleWidth: 419,
        singleHeight: 169,
        spritePosX: function() {
            return this.indexX * this.singleWidth;
        },
        spritePosY: function() {
            return this.indexY * this.singleHeight;
        },
    };
};
ddImage2.onload = function() {
    console.log('dd2 loaded');
    ddImageConfigs[1] = {
        isAnimation: true,
        imageSource: ddImage2,
        indexX: 0,
        indexY: 0,
        maxIndexX: 0,
        singleWidth: 419,
        singleHeight: 173,
        spritePosX: function() {
            return this.indexX * this.singleWidth;
        },
        spritePosY: function() {
            return this.indexY * this.singleHeight;
        },
    };
};
ddImage3.onload = function() {
    console.log('dd3 loaded');
    ddImageConfigs[2] = {
        isAnimation: true,
        imageSource: ddImage3,
        indexX: 0,
        indexY: 0,
        maxIndexX: 0,
        singleWidth: 427,
        singleHeight: 165,
        spritePosX: function() {
            return this.indexX * this.singleWidth;
        },
        spritePosY: function() {
            return this.indexY * this.singleHeight;
        },
    };
};
ddImage4.onload = function() {
    console.log('dd4 loaded');
    ddImageConfigs[3] = {
        isAnimation: true,
        imageSource: ddImage4,
        indexX: 0,
        indexY: 0,
        maxIndexX: 0,
        singleWidth: 427,
        singleHeight: 169,
        spritePosX: function() {
            return this.indexX * this.singleWidth;
        },
        spritePosY: function() {
            return this.indexY * this.singleHeight;
        },
    };
    ddImageConfigs.frameIndex = 0;
    ddImageConfigs.tickCount = 0;
    ddImageConfigs.ticksPerFrame = 10;
    ddImageConfigs.animate = function() {
        this.tickCount++;
        if(this.tickCount >= this.ticksPerFrame) {
            this.tickCount = 0;
            this.frameIndex++;
            if(this.frameIndex > 3) {
                this.frameIndex = 0;
            }
        }
    };
    ddImageConfigs.render = function(canvasContext, drawPosX, drawPosY, drawWidth, drawHeight) {
        canvasContext.drawImage(
            this[this.frameIndex].imageSource,
            this[this.frameIndex].spritePosX(),
            this[this.frameIndex].spritePosY(),
            this[this.frameIndex].singleWidth,
            this[this.frameIndex].singleHeight,
            drawPosX,
            drawPosY,
            drawWidth,
            drawHeight
        );
    };
};

spriteImage.src = './assets/imageAssets/highres/pngs/all_in_one_transp.png';
goThruTheDoorImage.src = './assets/imageAssets/highres/pngs/gttd.png';
ddImage4.src = './assets/imageAssets/highres/pngs/dd4.png';
ddImage1.src = './assets/imageAssets/highres/pngs/dd1.png';
ddImage2.src = './assets/imageAssets/highres/pngs/dd2.png';
ddImage3.src = './assets/imageAssets/highres/pngs/dd3.png';