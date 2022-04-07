import * as React from "react";
import {useEffect, useState} from "react";
import {ROUTES} from "../common/constants";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {AccountCircle} from "@mui/icons-material";
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import {ReactionBarSelector} from "@charkour/react-reactions";

export default function UserFeeds(props) {
    const [feedList, setFeedList] = useState([]);
    const [feedMsg, setFeedMsg] = useState('');
    useEffect(() => {
        getData();
    },[1]);
    const getData = () => {
        // const data = {'username' : props.user.firstName}
        const data = {'username' : 'Asmita'}
        axios.get(`/api/feed/`, data, {headers: {
                'Content-Type': 'application/json'
            }})
            .then((response) => {
                if(response.data.success)
                    setFeedList(response.data.experts);
            })
    }
    const handleChange = (e) => {
        setFeedMsg(e.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const data = {'userName': 'Asmita', "feedText":feedMsg}
            axios.post(`/api/feed/`,data,{headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    if(response.data.success)
                        alert(response.data.message)
                })
        }
    }
    const buildNode = (emoji) => <div>{emoji}</div>;
    const reactions = [{label: "congratsBadge", node: buildNode("🎊")},
        {label: "fabBadge", node: buildNode("⭐")},
        {label: "perfectBadge", node: buildNode("💯")},
        {label: "awesomeBadge", node: buildNode("🙌")},
        {label: "yaayBadge", node: buildNode("🤗")},
        {label: "applauseBadge", node: buildNode("👏")},
        {label: "celebrteBadge", node: buildNode("🎊")},
        {label: "strongBadge", node: buildNode("💪")}
    ]
    return (
        <>
            <Grid container spacing={3} ml={2}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-helperText"
                        label="Feed Message"
                        value = {feedMsg}
                        fullWidth
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </Grid>
                <Grid>
                    <List>
                        {feedList && feedList.map((feed, idx) => (
                                <>
                                    <ListItem key={idx}>
                                        <ListItemAvatar>
                                            <Avatar sx={{width: '50px', height: '50px'}} src={"https://i.pravatar.cc/300?img=" + idx}> </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <ListItemText primary={feed.userName} secondary={feed.feedText}/>
                                        </ListItemText>
                                        <ReactionBarSelector reactions={reactions}>
                                        </ReactionBarSelector>
                                    </ListItem>
                                </>
                            )
                        )}
                    </List>
                </Grid>
            </Grid>
        </>
    );
}
