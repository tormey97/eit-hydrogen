import React from "react";
import {withNamespaces} from "react-i18next";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem/PaginationItem";
import methane1 from "../assets/gifs/methane1.gif"
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper/Paper";

let useStyles = makeStyles(theme => ({
    "animation": {
        "width": "auto",
        "height": 200,
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto"
    },
    "center":{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function EducationalGif({pages}) {
    const [page, setPage] = React.useState(1);
    const classes = useStyles();
        return (
            <>
                    {pages.map(
                            (pageObject, i) => {
                                if (i + 1 !== page) {return (<></>)}
                                return (
                                    <div>
                                        <img className={classes.animation} src={pageObject.image}/>
                                        <Typography>
                                            {pageObject.text}
                                        </Typography>
                                    </div>
                            )}
                    )}
                    <div className={classes.center}>
                <Pagination count={pages.length} onChange={(e, newPage) => setPage(newPage)}>
                </Pagination>
                    </div>
            </>
        )
}

export default withNamespaces()(EducationalGif);