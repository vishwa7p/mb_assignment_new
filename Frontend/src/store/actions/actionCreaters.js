import * as actionTypes from './actionTypes';


let Allusers=[];
if(localStorage.getItem('userData'))
{
    let users=localStorage.getItem('userData');
    Allusers=JSON.parse(users);
}
// export const signUpResults=(data)=>{
//     return {
//         type:actionTypes.SIGNUP,
//         data:data
//           }
// }
export const signUp=(data)=>{
    Allusers.push(data)
    localStorage.setItem('userData',JSON.stringify(Allusers));
    return {
        type:actionTypes.SIGNUP,
        data:data,
       allUsers: Allusers
          }
}
export const edit=(data,index)=>{ 
     Allusers[index]=data.user
     localStorage.setItem('userData',JSON.stringify(Allusers));
      data.edit=false;
    return {
        type:actionTypes.EDIT,
        data:data,
        allUsers:Allusers
          }
}
export const editFlag=(data)=>{
    data=true
    return{
        type:actionTypes.EDITFLAG,
        data:data,
  //  allUsers: Allusers
    }
}
export const delet=(index)=>{
       Allusers.splice(index,1);
        localStorage.setItem('userData',JSON.stringify(Allusers));
    return {
        type:actionTypes.DELETE,
         allUsers:Allusers
          }
}