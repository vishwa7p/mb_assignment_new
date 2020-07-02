import React from 'react'
import './UserInfo.css'

const userInfo=(props)=>{
    let editInfo=(
        <div className="UserInfo">
        <h1>Update Employee Info</h1>
        <input className='InputElement' type="number" value={props.user.id} onChange={(event)=>props.changed(event,'id')}/>
        <input className='InputElement' type="text" value={props.user.name} onChange={(event)=>props.changed(event,'name')}/>
        <input className='InputElement' type="email" value={props.user.email} onChange={(event) =>props.changed(event,'email')} />
        <select className='InputElement' value={props.user.type} onChange={(event) =>props.changed(event,'type')}>
            <option value='admin'>Manager</option>
            <option value='user'>Employee</option>
        </select>
        <input className='InputElement' type="password" value={props.user.password}  onChange={(event)=>props.changed(event,'password')} />
        <input className='InputElement' type="text" value={props.user.company} onChange={(event)=>props.changed(event,'company')}/>
        <input className='InputElement' type="date" value={props.user.dob} onChange={(event)=>props.changed(event,'dob')}/>
        <input className='InputElement' type="text" value={props.user.address} onChange={(event)=>props.changed(event,'address')}/>
        <input className='InputElement' type="number" value={props.user.mobileno} onChange={(event)=>props.changed(event,'mobileno')}/>
        <button className='ButtonElement' onClick={()=>props.submitted(props.user,props.index)}>Submit</button>
    </div>
    )
    let actualInfo=(
    <div className='UserInfo'> 
   <p><strong>ID :</strong> {props.user.id}</p>
   <p><strong>Name :</strong> {props.user.name}</p>
   <p><button onClick={()=>props.edited(props.edit)}>Edit</button></p>
   <a href="/SignUp"><button class="btn">Add Employee</button></a>
   </div>
    )
    let newInfo=props.edit?editInfo:actualInfo;
        return (
            <div>      
             {newInfo} 
             </div>        
     )
}
export default userInfo