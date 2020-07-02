import React from 'react'

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems=()=>(
    <div className='NavigationItems'>
    <NavigationItem link="/" exact>SignIn</NavigationItem>
    <NavigationItem link="/SignUp" >SignUp</NavigationItem>
    </div>
)
export default navigationItems;