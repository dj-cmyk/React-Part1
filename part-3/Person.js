const Person = (props) => {
    const overEighteen = props.age > 18 ? true : false
    const numNameChar = props.name.length
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li><b>Name:</b> {numNameChar > 8 ? props.name.slice(0, 6) : props.name}</li>
                <li><b>Age:</b> {props.age}</li>
                <li>{overEighteen ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}</li>
                <li>Hobbies Include:</li>
                    <ul>
                        {props.hobbies.map(hobby => <li>{hobby}</li>)}
                    </ul>
            </ul>
        </div>
    );
  }





  
