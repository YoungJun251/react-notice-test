import style from 'styles/feed.module.css';
import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Boardmenu from "src/components/board/main/menu/Boradermenu";
import Boardlist from "src/components/board/main/list/boardlist";
import boardlist from 'src/components/board/main/list/boardlist';
import Boardmain from 'src/components/board/main/Main';
import BoardLeftSideBar from 'src/components/board/main/leftSideBar/BoardLeftSideBar';

const Feed = () : JSX.Element => {

    return (
        <div>
            <BoardNavbar/>
            <BoardLeftSideBar/>
            <Boardmain/>
        </div>
        
    )
};

export default Feed;
