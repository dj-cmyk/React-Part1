const Tweet = (props) => {
    return (
        <ul>
            <li><b>username:</b> {props.username}</li>
            <li><b>name:</b> {props.name}</li>
            <li><b>date:</b> {props.date}</li>
            <li><b>message:</b> {props.message}</li>
        </ul>
    );
  }