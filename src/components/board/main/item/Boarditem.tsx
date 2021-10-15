import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';
import {IBoard, IItem} from "./BoardList";

import FavoriteIcon from '@material-ui/icons//Favorite';


interface IItemProps{
    item : IItem;
}

interface IBoardProps{
    boardList : IBoard[];
}


const BoardItem = ({boardList}: IBoardProps) : JSX.Element => {
        return(
            {boardList.map((board : IBoard)=> {
                return(
                    <div className={style.board_item_container}>
                        <div className={style.num}>{board.id}</div>

                        <div className={style.board_title}>
                            <span
                                className={style.board_title_text}>{board.title.length > 30 ? board.title.slice(0, 27) + '...' : board.title}</span>
                        </div>
                        <div className={style.board_id}> {board.userId}</div>
                        <div className={style.board_date}>2021-10-15</div>

                        <div className={style.recommend}>
                            <span>❣️</span>
                            <span>100</span>
                        </div>
                    </div>
                )
                })}
        )
}
export default BoardItem;
