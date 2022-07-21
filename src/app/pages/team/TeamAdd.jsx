import React from 'react';
import {Container, Grid, Typography} from "@mui/material";

function TeamAdd() {
    return (
        <Container>
            <Grid container>
                <Grid item sx={{marginTop:"5rem"}}>
                    <Typography variant="h4">Add a Team Member</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TeamAdd;