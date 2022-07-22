import React, {useState} from 'react';
import {Button, Container, Grid, IconButton, TextField, Typography} from "@mui/material";
import teamStyle from "./team.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faEye, faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";

function TeamEdit() {
    const [name, setName] = useState("John Dole")
    const [email, setEmail] = useState("test@email.com")
    const [experience, setExperience] = useState("9 Years")
    const [phoneNumber, setPhoneNumber] = useState("293-12349-23")
    const [occupation, setOccupation] = useState("Senior Executive")
    const [personalExperience, setPersonalExperience] = useState("Lorem Blah Blah")

    return (
        <Container maxWidth={false} className={teamStyle.addTeamContainer}>
            <Grid container>
                <Grid item>
                    <IconButton aria-label="back">
                        <FontAwesomeIcon icon={faArrowLeft} className={teamStyle.back}/>
                    </IconButton>
                </Grid>
                <Grid item container sm={12} className={teamStyle.teamForm}>
                    <Grid item sm={12} className={teamStyle.teamImgContainer}>
                        <div>
                            <img src="/04.jpg" className={teamStyle.teamImg} alt="Team"/>
                            <div className={teamStyle.overlay}>
                                <IconButton aria-label="View Image" className={teamStyle.imgViewIcon}>
                                    <FontAwesomeIcon icon={faEye}/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" className={teamStyle.inputsContainer}>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Name
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={name} onChange={e => setName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Email
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={email} onChange={e => setEmail(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Experience
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={experience}
                                       onChange={e => setExperience(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Phone Number
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Occupation
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={occupation}
                                       onChange={e => setOccupation(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8} justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Personal Experience
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField fullWidth id="fullWidth" value={personalExperience} multiline rows={3}
                                       onChange={e => setPersonalExperience(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between">
                        <Grid item>
                            <Button variant="contained" startIcon={<FontAwesomeIcon icon={faPencil}/>}>
                                Edit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" startIcon={<FontAwesomeIcon icon={faTrash}/>} color="error">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>);
}

export default TeamEdit;