import {HeaderComponent} from './HeaderComponent.jsx';
import {FooterComponent } from './FooterComponent.jsx';
import {SongList} from './SongList.jsx';

const my_name = "Kyle Thayer";

export function App(props) {
    return (
        <div>
            <HeaderComponent name={my_name} />
            <SongList />
            <FooterComponent name={my_name}/>
        </div>
    )
}