import style from 'src/components/board/main/main.module.css'
import BoardList from 'src/components/board/main/item/BoardList';
import Boardpage from 'src/components/board/main/page/Boardpage';

const Boardmain = (): JSX.Element => {
    return(
        <div className={style.container}>
            <div>
                <BoardList/>
                <Boardpage/>
            </div>
            
        </div>
    
        
    )
}

export default Boardmain;