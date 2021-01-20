import React from "react";
import {withNamespaces} from "react-i18next";
import Typography from "@material-ui/core/Typography/Typography";
import gifthing from "../assets/animation_ch4_into_barrel.gif"
import MapDialog from "./MapDialog";
function IntroductionPage({t}) {
    return (
        <div>
            <Typography variant={"h6"}>
                {t("titles.page_title")}
            </Typography>
            <img src={gifthing}/>

        </div>
    );
}

export default withNamespaces()(IntroductionPage);