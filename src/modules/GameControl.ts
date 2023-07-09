import Food from './Food'
import Show from './Show'
import Snake from "./Snake";
import CONST from '../assets/const/index'

class GameControl {
    private snake: Snake;
    private show: Show;
    private food: Food;

    _direction: string = 'ArrowRight';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.show = new Show();

        this.init();
    }

    // 初始化函数
    init() {
        // 方向键响应
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this._direction = event.key;
        })

        this.run();
    }

    // 移动函数
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this._direction) {
            case 'ArrowRight':
                X += 10;
                break;
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            default:
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message);
            this.snake.changeStatus();
        }

        this.snake.status && setTimeout(this.run.bind(this), 200 - this.show.level * 10)
    }

    // 判断是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.show.addScore();
            this.snake.addBody();
            this.food.change();
            while (this.snake.checkFood(this.food.X, this.food.Y)) {
                this.food.change();
            }
        }
    }
}

export default GameControl;
