import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import CustomizedInput from "../../Components/CustomizedElem/CustomizedInput";
import CustomizedMultiple from "../../Components/CustomizedElem/CustomizedMultiple";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {Alert, Snackbar} from "@mui/material";

const testUser = {
    id: '1',
    email: 'supporter@dal.ca',
    name: 'supporter',
    bio: ''
}
const UserProfile = () => {
    const [user, setUser] = useState(testUser);
    const [open, setOpen] = useState(false);
    const handleSubmit = () => {
        Object.keys(user).map(item => {
            testUser[item] = user[item];
        })
        setOpen(true);
    }
    const handleChange = e => {
        setUser(prevState => ({
            ...prevState,
            [`${e.target.name}`]: e.target.value
        }))
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Box display="flex"
                 justifyContent="center"
                 alignItems="left"
                 mt={10} ml={2}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://i.pravatar.cc/300?img=38"
                    sx={{width: 150, height: 150}}
                />
            </Box>
            <Grid container spacing={3}  ml={2}>
                <Grid item xs={12}>
                    <CustomizedInput
                        required
                        name="email"
                        defaultLabel="User Email"
                        value={user.email}
                        IsReadOnly={true}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomizedInput
                        required
                        name="name"
                        defaultLabel="User Name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomizedMultiple
                        required
                        id="outlined-multiline-flexible"
                        defaultLabel="BIO"
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Box display="flex"
                 justifyContent="left"
                 alignItems="left"
                 ml={5}
            >
                <Button
                    style={{marginRight: "10px"}} variant="contained"
                    onClick={handleSubmit}
                >
                    Update
                </Button>
                <Button style={{marginRight: "10px"}} variant="contained">
                    Upgrade
                </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    User Information Updated!
                </Alert>
            </Snackbar>
        </>
    );
};

export default UserProfile;
