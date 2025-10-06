export default function Greeting(props) {
    console.log(props);
    return (
        <div>
            Hello, {props.name}
        </div>
    )
}