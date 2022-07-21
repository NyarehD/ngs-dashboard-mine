import React from 'react';
import {Container, Grid, Typography} from "@mui/material";

function TeamEdit() {
    return (
        <Container>
            <Grid container>
                <Grid item sx={{marginTop: "5rem"}}>
                    <Typography variant="h4">Add a Team Member</Typography>
                </Grid>
            </Grid>
        </Container>);
}

export default TeamEdit;