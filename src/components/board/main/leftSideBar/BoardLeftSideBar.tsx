import { ConstructionRounded } from '@material-ui/icons';
import { fontSize } from '@material-ui/system';
import style from 'src/components/board/main/leftSideBar/boardleftsidebar.module.css';
import react,{useState} from 'react';

const BoardLeftSideBar = (): JSX.Element => {
    
    const [select_menu, setMenu] = useState(false);
    const [getList, setgetList] = useState(false);
    
    const getMenuList = () : void =>{
        setgetList(!getList);
        console.log(getList);
    }

    const menuClicked = () =>{
        setMenu(!select_menu);
    }


    return(
        <div className={style.container}>
            <span onMouseOver={() => getMenuList()}>↓</span>
            <div className={getList ? style.box_wrap : style.box_wrap_hidden}>
                <div className={!select_menu ? style.board_menu_default : style.board_menu_clicked} onClick={() => {menuClicked()}}>자유게시판</div>
                <div className={style.board_menu_default}>TIP게시판</div>
                <div className={style.board_menu_default}>거래게시판</div>
               
            </div>
        </div>
    )
}

export default BoardLeftSideBar;