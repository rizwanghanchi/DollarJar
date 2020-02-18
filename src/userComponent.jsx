import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserComponent extends Component {

    constructor(){
        super();
        this.state = { 
            userDetails:{
                name:'',
                id:0,
                amount:0
            },
           
            name:'',
            usersData:[],
            totalAmount:0,
            initialAmount:10 
        }
     };

     handleNameChange=(e)=>{
        
         this.setState({name:e.target.value});
        
       
     }

     handleAmountChange=(e)=>{
         this.setState({initialAmount:e.target.value});
     }

     addMoreName=()=>{
            //console.log(this.state.userDetails);
            let len=this.state.usersData.length+1;
            let userDetails={name:this.state.name,id:len,amount:0};
            this.state.usersData.push(userDetails);
            const newData=[...this.state.usersData];
            this.setState({usersData:newData,userDetails:userDetails});
           /// console.log(this.state.usersData);
         }

         totalAmount(){

         }

         increment(index){
             const newData=this.state.usersData[index];
             let amount=parseInt(newData.amount)+parseInt(this.state.initialAmount);
             let total=this.state.totalAmount+parseInt(this.state.initialAmount);
            newData.amount=amount;
              console.log(newData);
              let usersData=[...this.state.usersData];
              usersData[index]=newData;
            this.setState({usersData,totalAmount:total});
         }

         decrement(index){
             const newData=this.state.usersData[index];
             let amount=parseInt(newData.amount)-parseInt(this.state.initialAmount);
             let total=this.state.totalAmount-parseInt(this.state.initialAmount);
             newData.amount=amount;
             let usersData=[...this.state.usersData];
             usersData[index]=newData;
             this.setState({usersData,totalAmount:total});
;         }
    

    render() { 
        return ( 
            <div>
           <div className="container bg-primary">
                
               <div class="row p-3 my-3 text-white">
                   <div class="col-md-4"></div>
                   <div className="class col-md-4">
               <center>
                <h1> {this.props.location.userName}</h1>

                <h3>Total Amount : {this.state.totalAmount}</h3>
                <p>initial Panelty : {this.state.initialAmount}</p>
                <input className="form-control" type="text" value={this.state.initialAmount} onChange={this.handleAmountChange}></input><br/><br/>


               <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange}></input>
               <button class="btn btn-success my-2" onClick={this.addMoreName}>Add</button>
               </center>
               </div>
               </div>
               </div>

                        {this.state.usersData.map((d,index)=>{
                            return (
                            <div key={index}>
                                <h3>Name :{d.name}</h3>
                                <button onClick={()=>this.increment(index)}>Inc</button>
                                <button onClick={()=>this.decrement(index)}>Dec</button>
                                <h4>panetaly is {d.amount}</h4>
                            </div>
                            )
                           
                        })}
    
               
           </div>
         );
    }
}
 
export default UserComponent;