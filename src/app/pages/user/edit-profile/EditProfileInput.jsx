import React, {useState} from "react"
import {styled} from "@mui/system";
import {FormControl, Grid, Select, TextField, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export default function EditProfileInput({label, isDisabled = false}) {
    const [input, setInput] = useState();
    const [role, setRole] = useState("admin")
    const CustomTextFiled = styled(TextField)({
        width: "100%",
        borderColor: "#000"
    })

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleRoleChange(event) {
        setRole(event.target.value)
    }

    const roles = ["Admin", "Editor"]
    return (
        <Grid item xs={12}>
            <Grid container sx={{justifyContent: "flex-start", marginBottom: "20px"}}>
                <Grid item xs={3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                    <Typography variant="h6" sx={{margin: "0 20px", textTransform: "capitalize"}}>{label}</Typography>
                </Grid>
                <Grid item sm={6}  sx={{justifySelf: "center"}}>
                    {
                        !isDisabled ?
                            <>
                            <CustomTextFiled variant="outlined" name={label} value={input}/>
                           </>
                            :
                            <FormControl defaultValue={"admin"} sx={{width: "100%"}} disabled>
                                <Select
                                    value={role}
                                    displayEmpty

                                    inputProps={{'aria-label': 'Without label'}}
                                    onChange={handleRoleChange}
                                >
                                    <MenuItem value="admin" selected>Admin</MenuItem>
                                    <MenuItem value="editor">Editor</MenuItem>
                                </Select>
                            </FormControl>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}