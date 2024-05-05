"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = exports.RANK_FLAG = exports.RANK_LANDMINE = exports.RANK_ENGINEER = exports.RANK_COMMANDER = exports.RANK_BOMB = void 0;
exports.RANK_BOMB = "0";
exports.RANK_COMMANDER = "1";
exports.RANK_ENGINEER = "9";
exports.RANK_LANDMINE = "10";
exports.RANK_FLAG = "11";
const COMPARE_RANK1_LOSE = -1;
const COMPARE_DRAW = 0;
const COMPARE_RANK1_WIN = 1;
class Piece {
    constructor(colorChar, rankStr) {
        this.colorChar = colorChar;
        this.rankStr = rankStr;
    }
    getPieceColor() {
        return this.colorChar;
    }
    getRank() {
        return this.rankStr;
    }
    isMovable() {
        return this.rankStr != exports.RANK_LANDMINE && this.rankStr != exports.RANK_FLAG;
    }
    // compares rank1 and rank2
    // returns  1 if rank1 is greater than rank2
    //          0 if they are equal
    //          -1 if rank 1 is lower than rank2
    // Input parameters are strings
    compareRank(otherPiece) {
        const rank1 = this.rankStr;
        const rank2 = otherPiece.rankStr;
        // the opponent is a bomb, which destroys any piece that hits it
        if (rank1 == exports.RANK_BOMB || rank2 == exports.RANK_BOMB) {
            return COMPARE_DRAW;
        }
        // the opponent is a flag, which any of your pieces can capture
        if (rank2 == exports.RANK_FLAG) {
            return COMPARE_RANK1_WIN;
        }
        // the opponent is a landmine, which only the engineer can disable
        if (rank2 == exports.RANK_LANDMINE) {
            // engineer disables landmine
            if (rank1 == exports.RANK_ENGINEER) {
                return COMPARE_RANK1_WIN;
            }
            else {
                // no other piece can disable it
                return COMPARE_RANK1_LOSE;
            }
        }
        // 2 regular pieces
        // the lower the number, the higher the rank (1 beats 2, 2 beats 3, etc.)
        var rank1Int = parseInt(rank1);
        var rank2Int = parseInt(rank2);
        if (rank1Int >= 1 && rank1Int <= 9 && rank2Int >= 1 && rank2Int <= 9) {
            if (rank1Int < rank2Int) {
                return COMPARE_RANK1_WIN;
            }
            else if (rank1Int === rank2Int) {
                return COMPARE_DRAW;
            }
            else {
                return COMPARE_RANK1_LOSE;
            }
        }
        // should not reach this point
        return COMPARE_DRAW;
    }
}
exports.Piece = Piece;
