export function HelloMessage(props) {
    const {name} = props;
    return (
        <h1 id='hello' className='myClass'>'Hello {name}!'</h1>
    )
}