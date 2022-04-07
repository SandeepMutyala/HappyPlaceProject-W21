import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import {Alert, Badge, CardActions, CardHeader, Divider, Snackbar, TextField} from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@material-ui/core";
import Box from "@mui/material/Box";

const feed = [
    {
        "_id": "624e55cd163d5d57d54984eb",
        "feedId": 1649300941853,
        "userName": "Asmita",
        "feedText": "I did yoga",
        "congratsBadge": 1,
        "fabBadge": 2,
        "perfectBadge": 0,
        "awesomeBadge": 0,
        "yaayBadge": 0,
        "applauseBadge": 0,
        "celebrteBadge": 0,
        "strongBadge": 0,
        "createdAt": "2022-04-07T03:09:01.854Z",
        "updatedAt": "2022-04-07T04:45:39.664Z",
        "__v": 0
    },
    {
        "_id": "624e6fce8b91a3ec6e5d8126",
        "feedId": 1649307598706,
        "userName": "Asmita",
        "feedText": "I joined dance class",
        "congratsBadge": 0,
        "fabBadge": 0,
        "perfectBadge": 0,
        "awesomeBadge": 0,
        "yaayBadge": 0,
        "applauseBadge": 0,
        "celebrteBadge": 0,
        "strongBadge": 0,
        "createdAt": "2022-04-07T04:59:58.713Z",
        "updatedAt": "2022-04-07T04:59:58.713Z",
        "__v": 0
    }
]
export default function UserFeeds(props) {
    const [feedList, setFeedList] = useState([]);
    const [feedMsg, setFeedMsg] = useState('');
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("")
    useEffect(() => {
        setFeedList(feed);
        setFeedMsg("");
        getData();
    }, []);
    const getData = () => {
        axios.get(`/api/feed/profile/${props.user.firstName}`)
            .then((response) => {
                if (response.data.success)
                    setFeedList(response.data.feeds);
            })
    }

    const handleChange = (e) => {
        setFeedMsg(e.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const data = {'userName': props.user.firstName, "feedText": feedMsg}
            axios.post(`/api/feed/`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (response.data.success) {
                        setOpen(true);
                        setMsg(response.data.message)
                        setFeedMsg("")
                        getData();
                    }
                })
        }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            <Box mb={5}>
                <h4 style={{color: "rgb(21, 102, 70)", paddingTop: '20px', paddingBottom: '10px'}}> What's on your mind? </h4>
                <Grid container spacing={3} ml={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-helperText"
                            label="Feed Message"
                            value={feedMsg}
                            fullWidth
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <h4 style={{color: "rgb(21, 102, 70)", paddingTop: '20px', paddingBottom: '10px'}}> Latest Updates </h4>
                <Grid container mt={3} spacing={3}>
                    {feedList && feedList.map((feed, idx) => (
                            <Grid item xs={4} key={idx}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{width: '50px', height: '50px'}}
                                                    src={"https://i.pravatar.cc/300?img=38"}> </Avatar>
                                        }
                                        title={feed.userName}
                                        subheader={feed.createdAt}
                                    />
                                    <CardContent>
                                        <Typography variant="body2">
                                            {feed.feedText}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Badge color="primary" badgeContent={feed.congratsBadge}>
                                            🎊
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.fabBadge}>
                                            ⭐
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.perfectBadge}>
                                            💯
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.awesomeBadge}>
                                            🙌
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.yaayBadge}>
                                            🤗
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.applauseBadge}>
                                            👏
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.celebrteBadge}>
                                            🎉
                                        </Badge>
                                        <Badge color="primary" badgeContent={feed.strongBadge}>
                                            💪
                                        </Badge>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    )}
                </Grid>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: "100%"}}>
                    {msg}
                </Alert>
            </Snackbar>
        </>
    );
}
