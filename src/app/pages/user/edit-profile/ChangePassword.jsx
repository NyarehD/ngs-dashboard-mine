import React from "react"
import {Button, Container, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import editProfileStyle from "./edit-profile.module.sass";
import EditProfileInput from "./EditProfileInput";

export default function ChangePassword() {
    return (
        <Container sx={{
            minHeight: "100vh",
            margin: "40px 0"
        }}>
            <Container sx={{
                minHeight: "auto",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "rgba(205, 220, 236, 0.8)"
            }}>
               <Grid container component="form">
                   <Grid item xs={12} sx={{display: "flex", margin: "10px"}}>
                       <FontAwesomeIcon icon={faArrowLeft} className={editProfileStyle.iconLeftArrow}/>
                       <Typography variant="h4" sx={{margin: "0 auto"}}>Change Password</Typography>
                   </Grid>
                   <EditProfileInput label="New Password"/>
                   <EditProfileInput label="Confirm Password"/>
                   <Grid item xs={12} sx={{display: "flex"}}>
                       <Button variant="contained" size="large" sx={{marginLeft: "auto"}} form="test">Save</Button>
                   </Grid>
               </Grid>
            </Container>
        </Container>
    )
}