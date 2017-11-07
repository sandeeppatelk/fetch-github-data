import React, { Component } from 'react';
import Hobbies from './components/Hobbies';
import Greeting from './components/Greeting'
import { Time } from './components/Time';
import GitHubData from './components/GitHubProfile'

// pure componnent
// function Hobbies({hobbies}) {
//     return (
//         <ul>
//             {
//                 hobbies.map((hobbie, index)=> {
//                     return (<li key={index}>{hobbie}</li>);
//                 })
//             }
//         </ul>
//     );
// };

// function Greeting({name}) {
//     return "Hello " + (name ? name : 'Stranger');
// }

// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };



class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'abc'
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.textInput.focus();
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    async search(){
        const data = await fetch(`https://api.github.com/users/${this.state.username}`)
        .then((r) => {
            console.log(r);
            return r.json()
        });
        this.setState({
            gitHubData:data
            
        })
        alert(data.value);
    }
    render() {
        // const children = this.props.children;
        const hobbies = this.props.user.hobbies;
        const username = this.state.username;
        return (
            <div>
                <h1 className="main-heading">
                    <Greeting name={this.props.user.name}/>
                    {this.state.username}
                    <Time />
                </h1>
                <div>{this.props.children}</div>
                <input 
                    type="text" 
                    placeholder="username"                     
                    defaultValue={username}
                    onChange={this.handleChange} 
                ref={(input) =>  this.textInput = input}/>
                <button onClick={this.search}>search</button>
                {
                    this.state.gitHubData && <GitHubData userData={this.state.gitHubData}/>
                }
                <Hobbies hobbies={hobbies}/>
            </div>
        );
    }
}

export default Application;