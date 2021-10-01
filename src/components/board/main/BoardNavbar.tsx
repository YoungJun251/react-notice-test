import style from "./boardNavbar.module.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";


const BoardNavbar = () : JSX.Element => {

    return (
        <div className={style.container}>
            <div>
                <a href="/board" className={style.logo_txt}>Golfani</a>
                <div className={style.user_box}>
            
                </div>
            </div>
        </div>
        
    );
};

export default BoardNavbar;
