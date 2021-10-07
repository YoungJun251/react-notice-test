import style from 'src/components/board/main/comment/boardcomment.module.css';
import Link from 'next/link';
import React from 'react';
import RecommendRoundedIcon from '@material-ui/icons//RecommendRounded';
import ReportGmailerrorredRoundedIcon from '@material-ui/icons/ReportGmailerrorredRounded';


interface IUsercommnet{
    userid : string;
    titile : string;
    date : Date;

}

const BoardComment = () => {
    return (
        <div className={style.container}>
            <div className={style.comment_wrap}>
                <div className={style.comment_top}>
                        <div className={style.commment_totoal}>
                            <span>전체댓글 </span>
                            <span className={style.total_count}>215</span>
                            <span>개</span>
                        </div>
                        <div className={style.comment_right}>
                            <Link href="#view">본문보기</Link>
                            <Link href="/board/write">새로고침</Link>
                            <Link href="#view">댓글닫기</Link>
                        </div>
                </div>
                <div className={style.comment_box}>
                    <ul className={style.comment_list}>
                        <li className={style.comment}>
                            <div className={style.commentlist_top}>
                                <Link href="#view" >
                                    리틀 박은비
                                </Link>
                                <span className={style.date}> 2시간 전</span>


                                <div className={style.commentlist_right}>
                                    <RecommendRoundedIcon/>
                                    <span className={style.count}>100</span>
                                    <ReportGmailerrorredRoundedIcon/>
                                </div>
                            </div>
                            <div className={style.comment_main}>
                                    <p className={style.comment_style}>날씨가 좋네요 !</p>
                            </div>
                            <div className={style.reply}>
                                    <span>답글 </span>
                                    <em>0</em>
                                    <span>개 </span>
                                    <Link href="#">답글쓰기</Link>
                            </div>
                        </li>
                        <li className={style.comment}>
                            <div className={style.commentlist_top}>
                                <Link href="#view" >
                                    리틀 박은비
                                </Link>
                                <span className={style.date}> 2시간 전</span>


                                <div className={style.commentlist_right}>
                                    <RecommendRoundedIcon/>
                                    <span className={style.count}>100</span>
                                    <ReportGmailerrorredRoundedIcon/>
                                </div>
                            </div>
                            <div className={style.comment_main}>
                                <p className={style.comment_style}>날씨가 좋네요 !</p>
                            </div>
                            <div className={style.reply}>
                                <span>답글 </span>
                                <em>0</em>
                                <span>개 </span>
                                <Link href="#">답글쓰기</Link>
                            </div>
                        </li>
                    </ul>
                    <div className={style.comment_write}>
                        <div className={style.write_top}>
                            댓글 작성
                        </div>

                        <div className={style.write_contain}>
                            <div>멋쟁이</div>
                            <div className={style.submitform}>
                                <textarea className={style.writebox} placeholder="내용을 입력하시오."></textarea>
                                <button className={style.submit}>등록</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BoardComment;