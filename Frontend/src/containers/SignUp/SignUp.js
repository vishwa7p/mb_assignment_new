import React,{Component} from 'react';
import '../SignIn/SignIn.css'
import {connect} from 'react-redux'
//import * as actionTypes from '../../store/actions/actionTypes'
import actionCreaters from '../../store/actions';
class SignUp extends Component{
state={
id:'',
name:'',
email:'',
type:'admin',
password:'',
age:'',
experience:'',
mobileno:''
}
onSignUp=()=>{
console.log(this.props)
this.props.signUpHandler(this.state);
let index=0;
if(this.props.users !== null)
{
index=this.props.users.length-1;
}
//let index=JSON.parse(localStorage.getItem('userData')).length-1;
console.log(index)
 if(this.state.type==='user')
 {
 this.props.history.push('/User',{index:index});
 } 
else{
    this.props.history.push('/Admin',{user:this.state})
}
}
render(){
return (
    <div className='Input'>
    <h1>Sign-Up</h1>
    <input className='InputElement' type='number' value={this.state.id} placeholder='enter your ID' onChange={(event) => this.setState({id: event.target.value})}/> 
        <input className='InputElement' type='text' value={this.state.firstname} placeholder='enter your firstname' onChange={(event) => this.setState({name: event.target.value})}/>
        <input className='InputElement' type='text' value={this.state.lastname} placeholder='enter your lastname' onChange={(event) => this.setState({name: event.target.value})}/>
        <input className='InputElement' type="email" value={this.state.email} placeholder='enter your email' onChange={(event) => this.setState({email: event.target.value})} />
        <select className='InputElement' value={this.state.type} onChange={(event) => this.setState({type: event.target.value})}>
            <option value='admin'>Manager</option>
            <option value='user'>Employee</option>
        </select>
        <input className='InputElement' type='password' placeholder='enter your password' value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
        <input className='InputElement' type='text' value={this.state.address} placeholder='enter your address' onChange={(event) => this.setState({age: event.target.value})}/>
        <input className='InputElement' type='date' value={this.state.dob} placeholder='enter your dob' onChange={(event) => this.setState({experience: event.target.value})}/>
        <input className='InputElement' type='number' value={this.state.mobileno} placeholder='enter your mobileno' onChange={(event) => this.setState({mobileno: event.target.value})}/>
        <button className='ButtonElement' onClick={this.onSignUp}>SignUp</button>
    </div>
)
}
}
const mapStateToProps = state=>{
    return {
      user:state.user,
      users:state.allUsers
    };
  }
  const mapDispatchToProps=dispatch=>{
    return{
        signUpHandler:(data)=>dispatch(actionCreaters.signUp(data))
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SignUp);