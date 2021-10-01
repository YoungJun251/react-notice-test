import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import BoardItem from 'src/components/board/main/item/Boarditem';

export interface item{
    board_no:number,
    board_menu: string,
    board_id: string,
    board_like: number,
    board_commnet: number;
    board_title: string;
    board_date:Date;
}


let itemlist: item[] =[
    {
        board_no:1,
        board_menu: "거래",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:2,
        board_menu: "거래",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:3,
        board_menu: "거래",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:4,
        board_menu: "TIP",
        board_id: "리틀이용준",
        board_like: 122,
        board_commnet: 100,
        board_title: "야무지게 골프치러 나왔어요 오늘 보기 잡았습니다.",
        board_date: new Date(2021,1,1)
    },{
        board_no:5,
        board_menu: "자유",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:6,
        board_menu: "자유",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:7,
        board_menu: "자유",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },
    {
        board_no:8,
        board_menu: "자유",
        board_id: "리틀박은비",
        board_like: 12,
        board_commnet: 10,
        board_title: "오늘 골프치기 딱! 좋은 날씨네요",
        board_date: new Date(2021,1,1)
    },



]

const Boarditem = () : JSX.Element => {


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
                    {itemlist.map((item) => {
                        return(
                            <BoardItem key={item.board_no} item={item}/> 
                        )
                    })}
                </div>
            
            </div>      
        </div>
    )
}
export default Boarditem;
