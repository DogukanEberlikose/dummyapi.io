import React from 'react'
import { Route } from 'react-router'
import PostList from '../pages/PostList'
import UserDetail from '../pages/UserDetail';
import UserList from '../pages/UserList';


export default function Dashboard() {
    return (
        <div>   
            <Route exact path='/' component={PostList}/>
            <Route exact path='/user' component={UserList}/>
            <Route path='/user/:id' component={UserDetail}/>
        </div>
    );
}
