import React from "react";
import {withNamespaces} from "react-i18next";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Button from "@material-ui/core/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Typography from "@material-ui/core/Typography/Typography";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import makeStyles from "@material-ui/core/styles/makeStyles";

let useStyles = makeStyles(theme => ({
    "mapDialogContainer": {
        width: "100%"
    },
    "mapDialog": {
        width: "100%"
    }
}));

function MapDialog({dialogOpen, setDialogOpen, activeMarker, markerData}) {
    const classes = useStyles();
    const handleClose = () => {
        setDialogOpen(false)
    };
    return (
        <div className={classes.mapDialog}>
            <Dialog maxWidth={"sm"} className={classes.mapDialog} open={dialogOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {markerData.title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {markerData.contents}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withNamespaces()(MapDialog);