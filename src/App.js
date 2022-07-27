import React, {createContext, useState} from "react";
import View from "./setup/routes-manager/view";
import Header from "./core/components/header";
import Style from "./app.module.sass";
import {Box} from "@mui/material";

// For dark theme
const config = {
    mode: 'dark'
}
export const Context = createContext(config)

function App() {
    const [wide, setWide] = useState(false);
    const [darkMode, setDarkMode] = useState(Context._currentValue)
    return (
        <Context.Provider value={[darkMode, setDarkMode]}>
            <div className={`{App} {Style.app}`}>
                <Header className={Style.header} wide={wide} setWide={setWide}/>
                <Box
                    component="section"
                    sx={{
                        marginLeft: {md: wide ? "64px" : "240px", sm: 0},
                        transition: "all .3s linear",
                    }}
                >
                    <View/>
                </Box>
            </div>
        </Context.Provider>
    );
}

export default App;
