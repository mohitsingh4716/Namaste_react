import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props)

        // console.log("Parent constructor");
    }

    componentDidMount(){
        // console.log("parent component did mount");
    }

  render() {

    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        <User name={"Mohit (function)"} />
        <br />
        <UserClass name={"Mohit (class)"} location={"Muz (class)"} />
       
    
      </div>
    );
  }
}


/*
 - Parent Consytructor
  -Parent Render

     -First Constructor
     -First Render

     -Second Constructor
     -Second Render

    <DOM UPDATED - IN SINGLE BATCH>

     -First ComponentDidMount
     -Second ComponentDidMount

  -Parent ComponentDidMount   




*/

// const About= ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web series</h2>
//             <User name={"Mohit (function)"}/>
//             <br/>
//             <UserClass name={"Mohit (class)"} location= {"Muz (class)"}/>
//         </div>

//     );
// };

export default About;
