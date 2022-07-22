import React, {useState} from 'react';
import {Button, Container, Grid, IconButton, TextField, Typography} from "@mui/material";
import teamStyle from "./team.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function TeamAdd() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [occupation, setOccupation] = useState("")
    const [personalExperience, setPersonalExperience] = useState("")
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
                                    <FontAwesomeIcon icon={faAdd}/>
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
                    <Grid item container justifyContent="end" marginTop="1rem">
                        <Grid item>
                            <Button variant="contained" startIcon={<FontAwesomeIcon icon={faAdd}/>} color="success"
                                    size="large">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>);
}
