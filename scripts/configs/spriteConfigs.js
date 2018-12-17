export var spriteConfigs = {};

var spriteImage = new Image();


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
        6: {// BLOCK_TRIANGLE_BOTTOM_LEFT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 6,
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
        7: {// BLOCK_TRIANGLE_TOP_LEFT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 7,
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
        8: {// BLOCK_TRIANGLE_TOP_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 8,
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
        9: {// BLOCK_TRIANGLE_BOTTOM_RIGHT
            isAnimation: false,
            imageSource: spriteImage,
            indexX: 9,
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
            indexY: 2,
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
            indexY: 2,
            maxIndexX: 2,
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
            indexY: 2,
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
            indexY: 2,
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
            indexY: 2,
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
    };    
};
spriteImage.src = './assets/imageAssets/highres/pngs/all_in_one.png';