import style from 'src/components/board/main/page/boardpage.module.css';
import {useState} from "react";
import Link from 'next/link'

interface Ipage{
    page: number;
}


const Boardpage = () : JSX.Element => {


    type pageNum = 1 | 2 | 3 | 4 | 5;
    /* 추후 리스트 동적 생성 됨에따라 교체 예정 */

    const [onNum, setOnNum] = useState(1);

    const handlerpageclick = (index : number) => {
        pageClick(index);
    }

    const pageClick = (index : number) => {
        setOnNum(index);
    }

    return (
        <div className={style.container}>
            <div className={style.button_wrap}>
                <button className={style.write_button}>
                    <Link href="/board/write2">
                        <a>글쓰기</a>
                    </Link>
                </button>
            </div>

            <div className={style.board_page}>
                    <a href="#1"  className={style.btn}>처음</a>
                    <a href="#2" className={style.btn}>이전</a>
                    <a href="#1" onClick={() =>handlerpageclick(1)} className={onNum === 1 ? style.num_on : style.num}>1</a>
                    <a href="#1" onClick={() =>handlerpageclick(2)} className={onNum === 2 ? style.num_on : style.num}>2</a>
                    <a href="#1" onClick={() =>handlerpageclick(3)} className={onNum === 3 ? style.num_on : style.num}>3</a>
                    <a href="#1" onClick={() =>handlerpageclick(4)} className={onNum === 4 ? style.num_on : style.num}>4</a>
                    <a href="#1" onClick={() =>handlerpageclick(5)} className={onNum === 5 ? style.num_on : style.num}>5</a>

                    <a href="#" className={style.btn}>다음</a>
                    <a href="#" className={style.btn}>맨끝</a>
            </div>
        
            <div className={style.search_bar}>
                <input type="text" title={style.search_id} placeholder="검색어 입력"></input>
                <button type="submit" className={style.search_btn}>검색</button>
            </div>
        </div>
    )   
}

export default Boardpage;