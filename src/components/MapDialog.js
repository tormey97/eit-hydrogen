import React from "react";
import {withNamespaces} from "react-i18next";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Button from "@material-ui/core/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Typography from "@material-ui/core/Typography/Typography";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

function MapDialog({dialogOpen, setDialogOpen, activeMarker, markerData}) {
    const handleClose = () => {
        setDialogOpen(false)
    };
    return (
        <div>
            <Dialog open={dialogOpen}>
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