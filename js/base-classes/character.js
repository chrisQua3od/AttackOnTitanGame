var ErenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var ErenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];
var jumpIntervalID;
var MoveImageCureent = 0;
var moveIntervalID;

/*var jumpKeyListenerID;*/
var jumpState = 0;

/**/
var NotMoveWithJump = 0;

class Characters {
    constructor(ID, Name, speed, level, jumpPhotos, movementPhotos, HTML_Element) {
        this.characterID = ID;
        this.characterName = Name;
        this.characterSpeed = speed;
        this.characterLevel = level;
        this.characterJumpPhotos = jumpPhotos;
        this.characterMovementPhotos = movementPhotos;
        this.characterElementHTML = HTML_Element;
        this.position_x = 100;
        this.position_y = 500;
        this.characterElementHTML.style.top = this.position_y + "px";
        this.characterElementHTML.style.left = this.position_x + "px";
        this.jumpPosition = 0;
    }

    /* jump only */
    jumpOnly_function(obj) {
        this.jumpPosition++;
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                this.position_y -= 30;
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
            case 7:
                this.position_y += 45;
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 8:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;
                NotMoveWithJump = 0;
                EREN_STATE = STAND;
                clearInterval(jumpIntervalID);
                stateMachine();
                break;
        }
    }

    /* move and jump */
    jumpWithMove_function(obj) {
        this.jumpPosition++;
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                if (this.position_x < 800)
                    this.position_x += 5;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                if (this.position_x < 800)
                    this.position_x += 5;
                this.position_y -= 30;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
                if (this.position_x < 800)
                    this.position_x += 5;
                this.position_y += 45;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 7:
                if (this.position_x < 800)
                    this.position_x += 5;
                this.position_y += 45;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;
                EREN_STATE = MOVE_FOREARD_FROM_JUMP;
                clearInterval(jumpIntervalID);
                /*$(document).trigger("keyup");*/
                /*if (EREN_STATE == MOVE_FOREARD_FROM_JUMP)
                    stateMachine();*/
                break;
        }
    }

    /* movement only */
    forwardMove() {
        if (MoveImageCureent == this.characterMovementPhotos.length) {
            MoveImageCureent = 0;
        }
        if (this.position_x < 800)
            this.position_x += 20;
        this.characterElementHTML.src = "image/characters move/forward-move/" + this.characterMovementPhotos[MoveImageCureent];
        this.characterElementHTML.style.left = (this.position_x) + "px";
        MoveImageCureent++;
    }

    /* stop movement only */
    stopMove() {
        this.characterElementHTML.src = "image/characters move/forward-move/1.png";
        clearInterval(moveIntervalID);
    }

}

var STAND = 0;
var MOVE_FORWARD_FROM_STAND = 1;
var MOVE_FOREARD_FROM_JUMP = 2;
var MOVING = 3;
var JUMP_FROM_STAND = 4;
var JUMP_FROM_MOVE_FORWARD = 5;
var JUMPING = 6;

var EREN_STATE = STAND;