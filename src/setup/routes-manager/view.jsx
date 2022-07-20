import React from "react";
import {Routes, Route} from "react-router-dom";

// Post
import PostList from "../../app/pages/post/post-list/post-list";
import AddPost from "../../app/pages/post/add-new-post/add-new-post";
import EditPost from "../../app/pages/post/edit-post/edit-post";

// User
import UserList from "../../app/pages/user/user-list/user-list";
import AddNewUser from "../../app/pages/user/add-new-user/add-new-user";
import EditUser from "../../app/pages/user/edit-user/edit-user";

//Profile
import UserProfile from "../../app/pages/user-profile/EditProfile";
import ChangePassword from "../../app/pages/user-profile/ChangePassword";
import Login from "../../app/pages/Register&Login/Login"
import Register from "../../app/pages/Register&Login/Register";

function View() {
    return (
        <Routes>
            <Route index element={<UserList/>}></Route>
            <Route path="/add-new-user" element={<AddNewUser/>}></Route>
            <Route path="/edit-user" element={<EditUser/>}></Route>
            <Route path="/post-list" element={<PostList/>}></Route>
            <Route path="/add-new-post" element={<AddPost/>}></Route>
            <Route path="/edit-post" element={<EditPost/>}></Route>
            <Route path="/user-profile" element={<UserProfile/>}></Route>
            <Route path="/change-password" element={<ChangePassword/>}></Route>
            <Route path="/edit-post/:id" element={<EditPost/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    );
}

export default View;
