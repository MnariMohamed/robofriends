import React,{Component} from 'react';
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import {robots} from "../robots";
import "./app.css";
import ErrorBoundry from "../components/errorBoundry";

class App extends Component{
  constructor(){
    super();
    this.state={
      robots: robots,
      searchField:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>{this.setState({robots: users})});
  }
  onSearchChange=(event)=>{
this.setState({searchField:event.target.value});

  }

  render(){
    const filteredRobots=this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if(this.state.robots.length===0){
      return <h1>Loading...</h1>
    }
    else{
    return(<div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox onSearchChange={this.onSearchChange}/>
      <hr />
      <ErrorBoundry>
      <CardList robots={filteredRobots} />
      </ErrorBoundry>
      </div>
    )
  }
  }

}
export default App;
