import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Boardmain from 'src/components/board/main/Main';
import style from 'src/components/board/main/boardwrite.module.css';
import React, { useState } from 'react';

enum Etype {
    SELL = "거래게시판",
    FREE = "자유게시파",
    TIP = "TIP게시판"
}

const BoardWrite = (): JSX.Element => {

    const [imgBase64, setImgBase64] = useState(""); 
    const [imgFile, setImgFile] = useState(null);	

    const [showType, setShowType] = useState(false);
    const [headText, setHeadText] = useState("말머리 선택");

    const typeClick = () =>  {
        setShowType(!showType);
    }

    const menuClick = (type : Etype) => {
         setHeadText(type);
    }

    const handlermenuClick = (type : Etype) => {
        menuClick(type);
        setShowType(!showType);
    }

    const handlerClick = () => {
        typeClick();
    }

    const handleChangeFile = (event: any) => {
        let reader = new FileReader();
    
        reader.onloadend = () => {
        
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
          setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }
      }


    return(
        <div className={style.container}>
            <div className={style.writewrap}>
                <div className={style.board_write}>
                    <div className={style.title}>
                        <textarea placeholder="제목을 입력해 주세요."></textarea>
                        <div className={style.select_button}>
                             <button className={style.head} onClick={handlerClick}>{headText}</button>
                             <span>-</span>
                            <div className={showType ? style.select_option : style.disabled}>
                                <ul>
                                    <li aria-selected="true" className={style.typelist}>
                                        <button onClick={() => handlermenuClick(Etype.SELL)} className={style.option}>{Etype.SELL}</button>
                                    </li>
                                    <li className={style.typelist}>
                                        <button onClick={() => handlermenuClick(Etype.TIP)} className={style.option}>{Etype.TIP}</button>
                                    </li>
                                    <li className={style.typelist}>
                                        <button onClick={() => handlermenuClick(Etype.FREE)} className={style.option}>{Etype.FREE}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                            
                    </div>
                    <div className={style.info}>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd><span className={style.id}>리틀박은비</span></dd>
                        </dl>
                    
                    </div>
                    <div className={style.content_wrap}>
                        <div className={style.content}>
                            <textarea placeholder="내용 입력"></textarea>
                        </div>
                        <div className={style.upload}>
                            <input 
                                type="file" 
                                multiple
                                id="input-file"
                                accept =".jpg, .jpeg, .png"
                                onChange={handleChangeFile} 
                            />
                            <div className={style.preview}>
                                <img src={imgBase64}></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
                <div className={style.bt_wrap}>
                    <a href="#" className={style.on}>등록</a>
                    <a href="#">취소</a>
                </div>
            </div>
        </div> 
    )
}

export default BoardWrite;