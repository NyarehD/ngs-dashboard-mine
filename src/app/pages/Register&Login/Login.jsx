import React, {useState} from "react";
import {Button, Container, Grid, Typography} from "@mui/material";
import registerLoginStyle from "./RegisterAndLogin.sass"
import {CustomTextField} from "../user-profile/EditProfile";
import logo from "../../../assets/images/logo.png"
import api from "../../../mockdatabase/database";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [errorText, setErrorText] = useState("")
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    function login() {
        api.post("/user", inputs).then(res => {
            if (res.data.password === inputs.password) {
                navigate("/");
                setErrorText("")
                return
            }
            setErrorText("Password is Incorrect")
        })
    }

    return (
        <Container className={registerLoginStyle.container}>
            <Grid container
                  sx={{minHeight: "60px", width: "100%", alignContent: "center", padding: {xs: "1rem", sm: "0"}}}
                  component="form"
                  justifyContent="center" height="100vh">
                <Grid item md={12} sx={{display: "flex", justifyContent: "center"}}>
                    <img src={logo} alt="logo" className={registerLoginStyle.loginLogo} width="15%"/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center">Login</Typography>
                </Grid>
                <Grid container item sm={8} justifyContent='flex-start' alignItems='center' direction='column'
                      gap='15px' marginTop="2rem">
                    <Grid item container justifyContent='space-between' alignItems="center">
                        <Grid item sm={3} xs={12}>
                            <Typography component='h6' variant="h6"
                                        className={registerLoginStyle.label}>Email</Typography>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <CustomTextField value={inputs.email}
                                             onChange={e => setInputs({...inputs, email: e.target.value})}
                                             InputProps={{className: registerLoginStyle.inputField}}
                                             variant="outlined" sx={{width: "100%"}}/>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent='space-between' alignItems="center">
                        <Grid item sm={3} xs={12}>
                            <Typography component='h6' variant="h6"
                                        className={registerLoginStyle.label}>Password</Typography>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <CustomTextField value={inputs.password}
                                             onChange={e => setInputs({...inputs, password: e.target.value})}
                                             InputProps={{className: registerLoginStyle.inputField}}
                                             variant="outlined" sx={{width: "100%"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                {errorText && <Grid container item xs={12} justifyContent='flex-end'>
                    <Grid item container sx={{width: '89%'}} justifyContent='center'>
                        <Typography variant="body2"
                                    className={registerLoginStyle.errorText}>{errorText}</Typography>
                    </Grid>
                </Grid>}
                <Grid container item sm={12} marginTop="2rem">
                    <Button variant="contained" size="large" sx={{margin: {xs: "0 auto", sm: "0 0 0 auto"}}}
                            type="submit"
                            onClick={login}>Login</Button>
                </Grid>
            </Grid>
        </Container>
    )
}