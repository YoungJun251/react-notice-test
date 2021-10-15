import style from 'styles/feed.module.css';
import BoardNavbar from 'src/components/board/main/BoardNavbar';
import Boardmenu from "src/components/board/main/menu/Boradermenu";
import Boardlist from "src/components/board/main/item/BoardList";
import boardlist from 'src/components/board/main/item/BoardList';
import Boardmain from 'src/components/board/main/Main';
import BoardLeftSideBar from 'src/components/board/main/leftSideBar/BoardLeftSideBar';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Feed = () : JSX.Element => {

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <BoardNavbar/>
                <BoardLeftSideBar/>
                <Boardmain/>
                <Example />
            </div>
        </QueryClientProvider>
    )
};



function Example() : any{
    const { isLoading, error , data } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.userId}</h1>
            <p>{data.id}</p>
            <strong>👀 {data.title}</strong>{' '}
            <strong>✨ {data.body}</strong>{' '}

        </div>
    )
}
export default Feed;
