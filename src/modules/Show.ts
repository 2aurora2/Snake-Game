import CONST from '../assets/const/index'

class Show {
    private _score: number;
    private _level: number;

    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;

    constructor(score: number = 0, level: number = 1) {
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this._score = score;
        this._level = level;
    }

    get score() {
        return this._score;
    }

    get level() {
        return this._level;
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this._score + '';
        if (this._score === CONST.UPPERNODE[this._level - 1]) {
            this.levelUp();
        }
    }

    // 升级
    levelUp() {
        if (this._level < CONST.MAXLEVEL) {
            this.levelEle.innerHTML = ++this._level + '';
        }
    }
}

export default Show;
