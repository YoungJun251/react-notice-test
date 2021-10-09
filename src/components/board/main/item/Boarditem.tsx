import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';
import {IItem} from "./BoardList";
import FavoriteIcon from '@material-ui/icons//Favorite';


interface IItemProps{
    item : IItem;
}


const Boarditem = ({item}: IItemProps) : JSX.Element => {
    
        return(
                <div className={style.container}>
                    <div className={style.num}>{item.boardNo}</div>
                    
                    <div className={style.board_title}>
                        <span className={style.board_title_text}>{item.boardTitle.length > 30 ? item.boardTitle.slice(0,30): item.boardTitle}</span>
                    </div>
                    <div className={style.board_id}> {item.boardId}</div>
                    <div className={style.board_date}>{item.boardDate.toDateString()}</div>
                            
                    <div className={style.recommend}>
                        <span>❣️</span>
                        <span>{item.boardLike}</span>
                    </div>
                </div>        
    )
}
export default Boarditem;
