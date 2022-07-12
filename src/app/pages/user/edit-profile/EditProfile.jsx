import React, {useState} from "react"
import {Button, Container, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPencil} from "@fortawesome/free-solid-svg-icons"
import editProfileStyle from "./edit-profile.module.sass"
import EditProfileInput from "./EditProfileInput";


export default function EditProfile() {
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    function handleIsChangingPassword() {
        setIsChangingPassword(true)
    }
    return (
        <>
            <Container maxWidth={false} sx={{
                minHeight: "100vh",
                margin: "40px 0",
            }} className={editProfileStyle.container}>
                <Container maxWidth={false} sx={{
                    minHeight: "auto",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(205, 220, 236, 0.8)"
                }}>
                    <Grid container spacing={1} sx={{minHeight: "60px", alignItems: {xs: "center"}}} component="form">
                        <Grid item xs={12} sx={{display: "flex", marginTop: "10px"}}>
                            <FontAwesomeIcon icon={faArrowLeft} className={editProfileStyle.iconLeftArrow}/>
                            <Typography variant="h4" sx={{margin: "0 auto"}}>Edit Profile</Typography>
                        </Grid>
                        <Grid item xs={2}
                              sx={{display: "flex", justifyContent: "center", position: "relative", margin: "0 auto"}}>
                            <img className={editProfileStyle.editProfilePhoto}
                                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                 alt=""/>
                            <FontAwesomeIcon icon={faPencil} className={editProfileStyle.editProfilePhotoPencil}/>
                        </Grid>
                        <EditProfileInput label="username"/>
                        <EditProfileInput label="email"/>
                        <EditProfileInput label="role" isDisabled={true}/>
                        {
                            !isChangingPassword ?
                                <Grid item xs={12} sx={{justifySelf: "center"}}>
                                    <Grid container sx={{justifyContent: "center"}}>
                                        <Grid item sx={{marginLeft: "20px"}}>
                                            <Button variant="text" onClick={handleIsChangingPassword}>Change
                                                Password</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                :
                                <>
                                    <EditProfileInput label="old password"/>
                                    <Grid item xs={12} sx={{justifySelf: "center"}}>
                                        <Grid container sx={{justifyContent: "center"}}>
                                            <Grid item sx={{marginLeft: "20px"}}>
                                                <Button variant="text">Forgot Password?</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                        }
                        <Grid item xs={12} sx={{display: "flex"}}>
                            <Button variant="contained" size="large" sx={{marginLeft: "auto"}} type="submit">Save</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}