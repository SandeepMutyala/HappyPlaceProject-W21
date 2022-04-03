import React from "react";
import Grid from "@mui/material/Grid";
import UserDetail from "./UserDetail";
import UserProfile from "./UserProfile";

const UserView = () => {
    return (
        <>
            <Grid container spacing={9}>
                <Grid item xs={3}>
                    <UserProfile/>
                </Grid>
                <Grid item xs={9} mt={6}>
                    <UserDetail/>
                </Grid>
            </Grid>
        </>
    );
};

export default UserView;
