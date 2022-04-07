import React, {useState, useEffect} from "react";
import NavigationBar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";
import {Grid, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import {ReactionBarSelector} from '@charkour/react-reactions';
import {AppContext} from "../context/userContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../common/constants";
import axios from "axios";
import {Alert, CardActions, CardHeader, Snackbar, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Feed = () => {

    const {state: {authenticated, currentUser},} = useContext(AppContext);
    const [feedList, setFeedList] = useState([])
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("")

    let navigate = useNavigate();
    if (!authenticated) {
        navigate(ROUTES.HOMEPAGE);
    }
    useEffect(() => {
        if (!authenticated) {
            navigate(ROUTES.HOMEPAGE);
        }
        axios.get(`/api/feed/${currentUser.firstName}`)
            .then((response) => {
                if (response.data.success)
                    setFeedList(response.data.feeds);
            })
    }, []);


    const [updates, setUpdates] = useState([

            {
                "userId": 1,
                "userName": "Amber Reily",
                "url": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "text": "I finally took a step towards my social anxiety and signed up for a dance class!",
                "date": "Apr - 2nd"
            },
            {
                "userId": 2,
                "userName": "John Bowie",
                "url": "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80",
                "text": "I joined a yoga class today! Looking forward to feeling better!",
                "date": "Apr - 2nd"
            },
            {
                "userId": 3,
                "userName": "Sophia Zen",
                "url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                "text": "I started maintaining a journal! ",
                "date": "Apr - 2nd"
            }
        ]
    )
    const handleClick = (label, id) => {
        const data = {'badge' : label }
        axios.put(`/api/feed/${id}`,data,{headers: {
                'Content-Type': 'application/json'
            }})
            .then((response) => {
                if (response.data.success){
                    setOpen(true);
                    setMsg(response.data.message)
                }
            })
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    const buildNode = (emoji) => <div>{emoji}</div>;
    const reactions = [{label: "congratsBadge", node: buildNode("🎊")},
        {label: "fabBadge", node: buildNode("⭐")},
        {label: "perfectBadge", node: buildNode("💯")},
        {label: "awesomeBadge", node: buildNode("🙌")},
        {label: "yaayBadge", node: buildNode("🤗")},
        {label: "applauseBadge", node: buildNode("👏")},
        {label: "celebrteBadge", node: buildNode("🎉")},
        {label: "strongBadge", node: buildNode("💪")}
    ]
    return (
        <>
            <NavigationBar/>
            <Container maxWidth="lg">
                <Typography align="center" variant="h4" style={{color: "#019267", padding: '20px'}}> Latest Updates </Typography>
                <Grid container spacing={3}>
                    {feedList && feedList.map((feed, idx) => (
                            <>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{width: '50px', height: '50px'}} src={"https://i.pravatar.cc/300?img=" + idx}> </Avatar>
                                            }
                                            title={feed.userName}
                                            subheader={feed.createdAt}
                                        />
                                        <CardContent>
                                            <Typography variant="body2">
                                                {feed.feedText}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{paddingLeft:'9%'}}>
                                            <ReactionBarSelector reactions={reactions} onSelect={e => handleClick(e, feed.feedId)} iconSize={'20px'}/>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                        )
                    )}
                </Grid>
            </Container>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    {msg}
                </Alert>
            </Snackbar>
        </>
    );
};

export default Feed;
