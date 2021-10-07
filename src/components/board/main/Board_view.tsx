import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Boardmain from 'src/components/board/main/Main';
import style from 'src/components/board/main/board_view.module.css';
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import * as faker from "faker";
import BoardComment from "./comment/BoardComment";

const Board_view = (): JSX.Element => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                setError(null);
                setUsers(null);

                // loading 상태를 true 로
                setLoading(true);

        
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

                setUsers(data);
               
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
            <div className={style.viewwrap}>
                <div className={style.boardview} id= "view">
                    <div className={style.title}>
                        {users[0].title}
                    </div>
                    <div className={style.info}>
                            <dl>
                                <dt>No.</dt>
                                <dd>{users[0].id}</dd>
                            </dl>
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>박은비</dd>
                            </dl>
                            <dl>
                                <dt>작성일</dt>
                                <dd>2021.01.01</dd>
                            </dl>
                            <dl>
                                <dt>조회수</dt>
                                <dd>10</dd>
                            </dl>
                            <dl>
                                <dt>추천</dt>
                                <dd>200</dd>
                            </dl>
                    </div>
                    <div className={style.content} >
                        <img className={style.board_img} src={faker.image.avatar()}/>    
                        <img className={style.board_img} src={faker.image.avatar()}/>    
                        <img className={style.board_img} src={faker.image.avatar()}/>    
                        <img className={style.board_img} src={faker.image.avatar()}/>    
                        {users[0].body}
                        {users[1].body}
                        {users[2].body}
                        {users[3].body}
                        {users[4].body}
                    </div>
                    <BoardComment/>
                </div>

                <div className={style.bt_wrap}>
                    <a href="/board" className={style.on}>목록</a>
                    <a href="#">수정</a>
                </div>
            </div>
        </div>
    )
}

export default Board_view;