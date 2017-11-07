import React, { Component } from 'react'


export default class GitHubProfile extends Component{
    render(){
        const userData = this.props.userData;
        return(
            <div>
            <img src={userData.avatar_url} alt=""/>
            <span>{userData.name}</span>
            </div>
        )
    }

}