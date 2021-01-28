import React from "react";
import {withNamespaces} from "react-i18next";
import Typography from "@material-ui/core/Typography/Typography";
import interviews from "../assets/interviews"
import Drawer from "@material-ui/core/Drawer/Drawer";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";

let useStyles = makeStyles(theme => ({
    "container": {
        display: "flex",
        flex: "0.15 1 0",
        backgroundColor: "#EEE",
        height: "100%",
    },

    "contents":{
        flex: 1,
        overflowY: "auto",
        height: "100%",

    },
    "page": {
        display: "flex",
        flex: "1 1 0",
        height: "0"
    }
}));

function InterviewPage() {
    const classes = useStyles();
    const [currentInterview, setCurrentInterview] = React.useState(0);
    return (
        <div className={classes.page}>
            <Divider />
                <div className={classes.container}>
                    <List>
                        {interviews.map((text, index) => (
                            <ListItem button onClick={() => {setCurrentInterview(index)}} key={index}>
                                <ListItemText primary={text.title} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </div>
            <div className={classes.contents}>
                <Typography variant={"h6"}>
                    {interviews[currentInterview].title}
                </Typography>
                <Divider/>
                <Typography>
                    {interviews[currentInterview].contents}
                </Typography>
            </div>

        </div>
        )
}

export default withNamespaces()(InterviewPage);