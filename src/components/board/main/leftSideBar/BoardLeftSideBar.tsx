import { ConstructionRounded } from '@material-ui/icons';

import style from 'src/components/board/main/leftSideBar/boardleftsidebar.module.css';


import react,{useState} from 'react';


const BoardLeftSideBar = (): JSX.Element => {

    type Tmenu = 'TIP' | 'SALE' | 'FREE' | 'NONE';

    const [selectMenu, setMenu] = useState('NONE');
    const [getList, setgetList] = useState(false);

    const getMenuList = () : void =>{
        setgetList(!getList);
        console.log(getList);
    }

    const menuClicked = (type : Tmenu) =>{
        type === selectMenu ? setMenu('NONE') : setMenu(type);
    }

    const handlerMouseOver = () => {
        getMenuList();
    }

    return(
        <div className={style.container}>
            <span onMouseOver={handlerMouseOver} className={style.menu_wrap}>menu</span>
            <div className={getList ? style.box_wrap : style.box_wrap_hidden}>
                <div className={selectMenu === "FREE" ? style.board_menu_clicked : style.board_menu_default } onClick={() => {menuClicked("FREE")}}>자유게시판</div>
                <div className={selectMenu === "TIP" ? style.board_menu_clicked : style.board_menu_default } onClick={() => {menuClicked("TIP")}}>TIP게시판</div>
                <div className={selectMenu === "SALE" ? style.board_menu_clicked : style.board_menu_default } onClick={() => {menuClicked("SALE")}}>거래게시판</div>
            </div>
        </div>
    )
}

export default BoardLeftSideBar;