import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';



const Boarditem = ({item}: any) : JSX.Element => {
    
        return(
                <div className={style.container}>
                    <div className={style.num}>{item.board_no}</div>
                    
                    <div className={style.board_title}>
                        <a  href="board/write"> {item.board_title}</a>
                    </div>
                    <div className={style.board_id}> {item.board_id}</div>
                    <div className={style.board_date}>{item.board_date.toDateString()}</div>
                            
                    <div className={style.recommend}>
                        <span>❤ </span>
                        <span>{item.board_like}</span>
                    </div>
                </div>        
    )
}
export default Boarditem;
