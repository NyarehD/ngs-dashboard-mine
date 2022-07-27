import React, {useContext } from "react";
import {Stack} from "@mui/material";
import UserproComp from "./user-profile";
import Adminstration from "./adminstration";
import Home from "./home";
import {Context} from "../../../../App";
import subComponentStyle from "./sub-component.module.sass";

const NavMenuComp = () => {
    const [darkMode] = useContext(Context)

    return (
        <>
            <Stack direction="row" spacing={1} alignItems="center"
                   className={darkMode.mode === 'dark' && subComponentStyle.darkMode}>>
                <Home/>
                <Adminstration/>
                <UserproComp/>
            </Stack>
        </>
    );
};

export default NavMenuComp;
