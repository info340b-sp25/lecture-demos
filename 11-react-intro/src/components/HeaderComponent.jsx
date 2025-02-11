import {HelloMessage} from './HelloMessage'

export function HeaderComponent(props) {
    const {name} = props;
    return (
        <header>
            <HelloMessage name={name} />
        </header>
    )
}