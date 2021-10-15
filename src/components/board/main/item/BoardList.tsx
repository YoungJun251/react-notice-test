import style from 'src/components/board/main/item/boarditem.module.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import BoardItem from 'src/components/board/main/item/Boarditem';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import BoardPage from 'src/components/board/main/page/Boardpage';
const queryClient = new QueryClient();


export interface IBoard{
    userId : number,
    id : number,
    title : string,
    body: string
}
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
        boardNo:3,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:4,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:5,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:6,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:7,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:8,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:9,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:10,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    },
    {
        boardNo:11,
        boardMenu: "거래",
        boardId: "리틀박은비",
        boardLike: 12,
        boardComment: 10,
        boardTitle: "오늘 골프치기 딱! 좋은 날씨네요",
        boardDate: new Date(2021,1,1)
    }



]

const BoardList = () : JSX.Element => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);

    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            res.json()
        )
    )
    if (isLoading) return (<div>isLoading</div>)
    if (error) return (<div>isError</div>)


    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    function currentPosts(tmp: IBoard[]) {
        let currentPosts = [];
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    return(
        <QueryClientProvider client={queryClient}>
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
                        <BoardItem boardList={currentPosts(data)}></BoardItem>
                    </div>
                </div>
                <BoardPage postPerPage={postsPerPage} totalLength={Object.keys(data).length} setCurrentPage={setCurrentPage}/>
            </div>
        </QueryClientProvider>
    )
}
export default BoardList;
