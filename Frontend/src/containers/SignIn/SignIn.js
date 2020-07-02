import React,{Component} from 'react'
import './SignIn.css'
class SignIn extends Component{
  state={
        name:'',
        email:'',
        type:'admin',
        password:'',
        auth:false
        }
signInHandler=()=>{
   let users=localStorage.getItem('userData')
   let AllUsers=JSON.parse(users);
   let c=0;
  let signInUser=null;
   let index;
for(let i=0;i<AllUsers.length;i++){
if(AllUsers[i].email === this.state.email && AllUsers[i].type === this.state.type && AllUsers[i].password === this.state.password)
    {
     c++;
     this.setState(
         {auth:true},()=>{console.log(this.state)}
                  )
  signInUser=AllUsers[i];
    index=i;
    }
}
if(c >=1){
if(this.state.type === 'admin')
{
this.props.history.push('/Admin',{user:signInUser});
}
else
{
this.props.history.push('/User',{index:index});
}
}
else{
    this.setState({auth:false},()=>{console.log(this.state)}
)}
}
render(){
return (
    <div className="Input">
        <h1>Sign-In</h1>
        <input className='InputElement' type="email" value={this.props.email} placeholder='enter your email' onChange={(event) => this.setState({email: event.target.value})} />
        <select className='InputElement' value={this.props.type} onChange={(event) => this.setState({type: event.target.value})}>
            <option value='admin'>Manager</option>
            <option value='user'>Employee</option>
        </select>
        <input className='InputElement' type='password' placeholder='enter your password' value={this.props.password} onChange={(event) => this.setState({password: event.target.value})}/>
        <button className='ButtonElement' onClick={this.signInHandler}>SignIn</button>
    </div>
)
}
}
export default SignIn;