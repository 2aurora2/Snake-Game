import CONST from '../assets/const/index'

class Food {
    private element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')
    }

    // 获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 为了方便设置横纵坐标偏移量都是整十的数
        let x: number = Math.round(Math.random() * (CONST.MAXROW / 10)) * 10;
        let y: number = Math.round(Math.random() * (CONST.MAXCOL / 10)) * 10;

        this.element.style.left = x + 'px';
        this.element.style.right = y + 'px';
    }
}

export default Food;
