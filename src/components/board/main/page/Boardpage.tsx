import style from 'src/components/board/main/page/boardpage.module.css';


const Boardpage = () : JSX.Element => {
    return (
        <div className={style.container}>
            <div className={style.board_page}>
                    <a href="#" className={style.bt}>처음</a>
                    <a href="#" className={style.bt}>이전</a>
                    <a href="#" className={style.num_on}>1</a>
                    <a href="#" className={style.num}>2</a>
                    <a href="#" className={style.num}>3</a>
                    <a href="#" className={style.num}>4</a>
                    <a href="#" className={style.num}>5</a>
                    <a href="#" className={style.bt}>다음</a>
                    <a href="#" className={style.bt}>맨끝</a>
            </div>
        
            <div className={style.search_bar}>
                <input type="text" title={style.search_id} placeholder="검색어 입력"></input>
                <button type="submit" className={style.search_btn}>검색</button>
            </div>
        </div>
    )   
}

export default Boardpage;