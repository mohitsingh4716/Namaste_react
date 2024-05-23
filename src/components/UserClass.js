import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      //this way to use sate in class
      UserInfo: {
        name: "Dummy name",
        location: "default",
       
      }
    };
    // console.log(this.props.name +" child constructor");
  }

  async componentDidMount(){
        console.log(this.props.name + " child component did mount");

        // API call
        const data= await fetch("https://api.github.com/users/mohitsingh4716");
        const jsonData= await data.json();

        this.setState({
            UserInfo: jsonData,
        })

        console.log(jsonData);

  }

  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("component will unmounting");
  }


  render() {
    
    console.log(this.props.name +" child render");

    const {name, location,avatar_url}= this.state.UserInfo;
    
    return (
      <div className="user-card">
        
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @mohit</h4>
      </div>
    );
  }
}

export default UserClass;
