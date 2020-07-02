import React, {Component} from 'react';
import './User.css'
import {connect} from 'react-redux'
//import * as actionTypes from '../../store/actions/actionTypes'
import actionCreaters from '../../store/actions';
import UserInfo from '../../components/UserInfo/UserInfo'

class User extends Component{
    state={
        user:{id:'',firstname:'vishwanath', lastname:'vishu',type:'employee',email:'vishu@1232',
        password:'12345',address:'',company:'',mobileno:''},
        edit:false,
        index:null
    }
    componentDidMount(){
     // let users=JSON.parse(localStorage.getItem('userData'));
      let users=this.props.users;
      console.log(this.props)
      this.setState({user:users[this.props.location.state.index],index:this.props.location.state.index}) 
    }
   inputChangeHandler=(event,identifier)=>{
      let updatedUser={...this.state.user}
          updatedUser[identifier]=event.target.value;
          this.setState({user:updatedUser})
    }
    onSubmit=(user,index)=>{
        this.props.submitHanlder(this.state,index);
        if(this.state.user.type==='admin')
        {
        this.props.history.push('/Admin',{user:user})
        }
    }
render(){
return (
    <div>
     <UserInfo user={this.state.user}
                changed={(event,identifier)=>this.inputChangeHandler(event,identifier)}
                index={this.state.index}
                submitted={(user,index)=>this.onSubmit(user,index)}
                edit={this.props.edit}
                edited={(edit)=>this.props.editHandler(edit)}
     /> 
    </div>
)
}
}
const mapStateToProps = state=>{
    return {
      user:state.user,
      edit:state.edit,
      users:state.allUsers
    };
  }
  const mapDispatchToProps=dispatch=>{
    return{
        submitHanlder:(data,index)=>dispatch(actionCreaters.edit(data,index)),
        editHandler:(data)=>dispatch(actionCreaters.editFlag(data))
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(User);

