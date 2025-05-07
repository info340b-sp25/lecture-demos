
export default function HelloMessage(props) {
    console.log(props);
    const message = props.message;
    console.log(message);
    return <h2 id="helloMsg" className="header">{message}</h2>;
}