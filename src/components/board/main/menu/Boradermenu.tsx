import { array } from 'prop-types'
import style from './boardermenu.module.css'

export enum Menu{
    Tip= "TIP",
    Sell = "거래게시판",
    QnA = "질문게시판",
    Free= "자유게시판"    
}

let arr : Array<String> = [Menu.Tip,Menu.Sell,Menu.QnA,Menu.Free];
const listItem = arr.map((listitem) => 
    <li>{listitem}</li>)



const Boardermenu = () : JSX.Element => {
    
    return (
        <div className={style.container}>
            <div>
                <span className={style.menu_box}>{arr[0]}</span>
                <span className={style.menu_box}>{arr[1]}</span>
                <span className={style.menu_box}>{arr[2]}</span>
                <span className={style.menu_box}>{arr[3]}</span>  
                <button className={style.btn_plus}>+</button>
            </div>
            <button className={style.btn_write}>
                <a href="board/write">글쓰기</a>
            </button>

        </div>

    )
}

export default Boardermenu;