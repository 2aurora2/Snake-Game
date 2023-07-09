const MAXLEVEL: number = 10
const UPPERNODE: Array<number> = [10, 20, 30, 50, 60, 70, 80, 90, 100, 120]
const MINROW: number = 0;
const MAXROW: number = 340;
const MINCOL: number = 0;
const MAXCOL: number = 360;
const GAMEOVER: string = '这就撞到啦？！GAME OVER咯！';
const GAMEOVER_PLUS: string = '什么？你居然吃到自己啦！hhh';

export default {
    MAXLEVEL,      // 最高等级
    UPPERNODE,     // 升级的分数节点
    MINROW,        // 水平方向最小偏移量
    MAXROW,        // 水平方向最大偏移量
    MINCOL,        // 垂直方向最小偏移量
    MAXCOL,        // 垂直方向最大偏移量
    GAMEOVER,      // 撞墙游戏结束提示信息
    GAMEOVER_PLUS, // 吃到身体游戏结束提示信息
}
