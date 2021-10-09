import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Board_view from 'src/components/board/main/Board_view';

const view = (): JSX.Element => {
    return(
        <div>
            <BoardNavbar/>
            <Board_view/>
        </div>
    )
}

export default view;