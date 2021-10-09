import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import BoardItem from 'src/components/board/main/item/Boarditem';

export interface IItem{
    boardNo:number,
    boardMenu: string,
    boardId: string,
    boardLike: number,
    boardComment: number;
    boardTitle: string;
    boardDate:Date;
}


let itemList: IItem[] =[
    {
        boardNo:1,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:2,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:1,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:1,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:1,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    }



]

const BoardList = () : JSX.Element => {


    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setUsers(data);
                console.log(data);

            } catch (e: any) {
                setError(e);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <div></div>;
    return(
        <div className={style.container}>
            <div className={style.list_item}>
                <div className={style.list_top}>
                    <div className={style.num}>No.</div>
                    <div className={style.board_title}>글제목</div>
                    <div className={style.board_id}>글쓴이</div>
                    <div className={style.board_date}>작성일</div>
                    <div className={style.recommend}>추천</div>
                </div>

                <div className={style.list_main}>
                    {itemList.map((item) => {
                        return(
                            <BoardItem key={item.boardNo} item={item}/>
                        )
                    })}
                </div>
            
            </div>      
        </div>
    )
}
export default BoardList;
