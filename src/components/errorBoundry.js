import React,{Component} from 'react';

class errorBoundry extends Component{
constructor(props){
super()
this.state={
  hasError: false
}
}

componentDidCatch(error, info){
  this.setState({hasError: true})
}

render(){
if(this.state.hasError){
  return <h1>Something went wrong!</h1>
}
else {
  return this.props.children;
}
}

}

export default errorBoundry;
