import React,{Component} from 'react';
import { Link,BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component{

    constructor(){
        super();
        this.state={
            userName:''
        };
    }
   
    handleChange=(e)=>{
        this.setState({userName:e.target.value});
    }

    render(){

        return(
            <div>
                
                <input type="text" value={this.state.userName} onChange={this.handleChange} placeholder="name"></input>
                
                <Link to={{pathname:"/user",userName:this.state.userName}}>
                    <button className="btn btn-success">Submit</button>
                </Link>
                
            </div>
        );
    }

}

export default HomePage;