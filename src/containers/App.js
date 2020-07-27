import React,{Component} from 'react';
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import {robots} from "../robots";
import "./app.css";
import ErrorBoundry from "../components/errorBoundry";
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from "../actions";

const mapStateToProps=state=>{
return {
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,

}
}

const mapDispatchToProps=(dispatch)=>{
return{
  onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
  onRequestRobots: ()=>dispatch(requestRobots)
}
}

class App extends Component{

  componentDidMount(){
this.props.onRequestRobots();
  }


  render(){
    const {searchField, onSearchChange, isPending}=this.props;
    console.log(robots);
    const filteredRobots=robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if(isPending===0){
      return <h1>Loading...</h1>
    }
    else{
    return(<div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <hr />
      <ErrorBoundry>
      <CardList robots={filteredRobots} />
      </ErrorBoundry>
      </div>
    )
  }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
