const person = {
    name: "Katherine Johnson",
    age: 30,
    location: "New York",
    theme: {
        backgroundColor: "black",
        color: "pink",
    },
    profile: {
        borderRadius: "50px",
    }
}

export default function Profile(props) {
    return(
       <div style={person.theme}>
           <h1>{props.name}</h1>
           {/*<p>{person.age}</p>*/}
           {/*<p>{person.location}</p>*/}
           <img style={person.profile}
               src={props.image}
               alt="Katherine Johnson"
           />
       </div>
    )
}