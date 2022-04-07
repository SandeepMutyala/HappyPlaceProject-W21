import React , { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";
import { Grid, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { ReactionBarSelector } from '@charkour/react-reactions';
import { AppContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../common/constants";

const Feed = () => {

  const { state: { authenticated, currentUser }, } = useContext(AppContext);
  let navigate = useNavigate();
  console.log("val auth ", authenticated)
  if (!authenticated) {
    navigate(ROUTES.HOMEPAGE);
  }

  useEffect(() => {
    if (!authenticated) {
     navigate(ROUTES.HOMEPAGE);
   }

   //1.  DATA FOR /feed PAGE - so that loggedin user can see all connections updates
  /* const apiURL1 = 'http://localhost:5000/api/feed/aeshna'
   fetch(apiURL1)
      .then((response) => response.json())
    .then((data) => console.log('1. This is your data for feed list', data));
    */

    //2. GET USER STATUSES AND COUNT OF REACTIONS ON HIS POSTS
/*
   const apiURL2 = 'http://localhost:5000/api/feed/profile/aeshna'

   fetch(apiURL2)
  .then(response => response.json())
  .then(data => console.log("API 2 results :", data));
*/




},[]);






const [updates, setUpdates] = useState([
   
  {"userId" : 1,
   "userName" : "Amber Reily",
   "url" : "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
   "text" : "I finally took a step towards my social anxiety and signed up for a dance class!",
   "date" : "Apr - 2nd"
  },
  {"userId" : 2,
  "userName" : "John Bowie",
  "url" : "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80",
  "text" : "I joined a yoga class today! Looking forward to feeling better!",
  "date" : "Apr - 2nd"
 },
 {"userId" : 3,
 "userName" : "Sophia Zen",
 "url" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
 "text" : "I started maintaining a journal! ",
 "date" : "Apr - 2nd"
}
]
)

return (
<>
<NavigationBar />

<Grid>

<Typography align="center" variant = "h4" style={{color:"#019267", padding: '20px'}}> Latest Updates </Typography>
    
<Paper elevation={3} sx={{ width: '200px', height: '200px' }}> 

<List>

  {updates.map(update => (
    <>
    <ListItem key = {update.userId} >
      <ListItemAvatar>
      <Avatar sx={{ width: '50px', height: '50px' }} src={update.url}> </Avatar>
      </ListItemAvatar>
      <ListItemText>
      <ListItemText primary={update.userName} secondary={update.text} />
      </ListItemText>
      <ReactionBarSelector reactions={ [{label: "Congrats!", node: <div>🎊</div>}, 
                                        {label: "Fabulous!", node: <div>⭐</div>},
                                        {label: "Perfect!", node: <div>💯</div>},
                                        {label: "Awesome!", node: <div>🙌</div>},
                                        {label: "Yaay!", node: <div>🥳</div>},
                                        {label: "Applause for you!", node: <div>👏</div>},
                                        {label: "Celebrations!", node: <div>🎊</div>},
                                        {label: "You're strong! ", node: <div>💪</div>},
                                        {label: "Amazing Job! ", node: <div>☺️</div>}
                                      ]}
      iconSize = '40px'>
      </ReactionBarSelector>
    </ListItem>
    <Divider variant="middle" />
    </>

  )
  )

  }

</List>

</Paper>
</Grid>

</>
  );
};

export default Feed;
