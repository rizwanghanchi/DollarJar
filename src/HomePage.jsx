import React,{Component} from 'react';

class HomePage extends Component{

    constructor(){
        super();
        
    }
    state={
        userName:''
    };

   

    handleChange=(e)=>{
        this.setState({userName:e.target.value});
    }

    handleButton=(e)=>{
        alert(this.state.userName);
    }

    render(){

        return(
            <div>
                <input type="text" value={this.state.userName} onChange={this.handleChange} placeholder="name"></input>
                <button onClick={this.handleButton}>Submit</button>
            </div>
        );
    }

}

export default HomePage;