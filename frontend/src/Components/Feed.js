import React , { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";
import { Grid, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { ReactionBarSelector } from '@charkour/react-reactions';


const Feed = () => {

    const [userDetails, setUserDetails] = useState(
   
        {"userName" : "Janet",
         "url" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
         "update" : "5pm",
         "date" : "Apr - 2nd",
        }
    )



return (
<>
<NavigationBar />

<Grid>

<Typography align="center"> My Feed </Typography>
    
<Paper elevation={3} sx={{ width: '200px', height: '200px' }}>

<List>

<ListItem>
<ListItemAvatar style={{paddingRight: '20px'}}>
<Avatar sx={{ width: '50px', height: '50px' }} src={userDetails.url}>
</Avatar>
</ListItemAvatar>
<ListItemText primary="Katie Reynolds" secondary="I joined a yoga class today ! Looking forward to feeling better !" />
<ReactionBarSelector iconSize = "20px"> </ReactionBarSelector>

</ListItem>

<Divider variant="middle" />

<ListItem>
<ListItemAvatar style={{paddingRight: '20px'}}>
<Avatar sx={{ width: '50px', height: '50px' }} src={userDetails.url}>
</Avatar>
</ListItemAvatar>
<ListItemText primary="Janet Brek" secondary="I finally took a step towards my social anxiety and signed up for a dance class !" />
<ReactionBarSelector iconSize = "20px"> </ReactionBarSelector>

</ListItem>

</List>
</Paper>
</Grid>

</>
  );
};

export default Feed;
