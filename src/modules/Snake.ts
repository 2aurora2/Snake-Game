import CONST from '../assets/const/index'

class Snake {
    private snakeEle: HTMLElement;
    private head: HTMLElement;
    private bodies: HTMLCollection;
    private isLive: boolean = true;

    constructor() {
        this.snakeEle = document.getElementById('snake');
        this.head = document.querySelector("#snake > div");
        this.bodies = this.snakeEle.getElementsByTagName('div');
    }

    // 获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X(val) {
        if (val === this.X) {
            return;
        }
        if (val < CONST.MINROW || val > CONST.MAXROW) {
            // 触碰边缘抛出异常
            throw new Error(CONST.GAMEOVER);
        } else {
            this.moveBody();
            this.head.style.left = val + 'px';
            if (this.checkDie(this.X, this.Y)) {
                throw new Error(CONST.GAMEOVER_PLUS);
            }
        }
    }

    set Y(val) {
        if (val === this.Y) {
            return;
        }
        if (val < CONST.MINCOL || val > CONST.MAXCOL) {
            // 触碰边缘抛出异常
            throw new Error(CONST.GAMEOVER);
        } else {
            this.moveBody();
            this.head.style.top = val + 'px';
            if (this.checkDie(this.X, this.Y)) {
                throw new Error(CONST.GAMEOVER_PLUS);
            }
        }
    }

    // 获取蛇的状态
    get status() {
        return this.isLive;
    }

    // 修改蛇的状态
    changeStatus() {
        this.isLive = !this.isLive;
    }

    // 添加蛇身
    addBody() {
        this.snakeEle.insertAdjacentHTML("beforeend", '<div></div>');
    }

    // 移动蛇身
    moveBody() {
        let len: number = this.bodies.length;
        for (let i: number = len - 1; i > 0; --i) {
            let tmp_x = (this.bodies.item(i - 1) as HTMLElement).offsetLeft;
            let tmp_y = (this.bodies.item(i - 1) as HTMLElement).offsetTop;

            (this.bodies.item(i) as HTMLElement).style.left = tmp_x + 'px';
            (this.bodies.item(i) as HTMLElement).style.top = tmp_y + 'px';
        }
    }

    // 检查是否撞到蛇身
    checkDie(x: number, y: number): boolean {
        for (let i: number = this.bodies.length - 1; i > 0; --i) {
            if ((this.bodies.item(i) as HTMLElement).offsetLeft === x && (this.bodies.item(i) as HTMLElement).offsetTop === y) {
                return true;
            }
        }
        return false;
    }

    // 检查食物是否出现在蛇身
    checkFood(x: number, y: number): boolean {
        for (let i: number = this.bodies.length - 1; i >= 0; --i) {
            if ((this.bodies.item(i) as HTMLElement).offsetLeft === x && (this.bodies.item(i) as HTMLElement).offsetTop === y) {
                return true;
            }
        }
        return false;
    }
}

export default Snake;
