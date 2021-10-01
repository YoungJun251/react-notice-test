import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Boardmain from 'src/components/board/main/main';
import style from 'src/components/board/main/board_view.module.css';
import Board_view from 'src/components/board/main/Board_view';

const write = (): JSX.Element => {
    return(
        <div>
            <BoardNavbar/>
            <Board_view/>
        </div>
    )
}

export default write;