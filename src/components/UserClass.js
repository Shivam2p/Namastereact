import React from "react";

class UserClass extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                userInfo: {
                    name: 'Dummy',
                    location: 'Default',
                  },
                
            };

           
        }
        async componentDidMount() {

            const data= await fetch('https://api.github.com/users/shivam2p');
            const json=await data.json();
            console.log(json);
            this.setState({
                userInfo:json,
            })
          
        }
    render(){
        
        const {name, location,avatar_url}=this.state.userInfo
        return ( <div className="userclass">
         
                <img src={avatar_url}></img>
                    <h1>Name:{name} </h1>
                    <h3>Location:{location} </h3>
        </div>)
    }
}
export default UserClass;
