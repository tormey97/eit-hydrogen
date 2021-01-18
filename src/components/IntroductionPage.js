import React from "react";
import {withNamespaces} from "react-i18next";
import Typography from "@material-ui/core/Typography/Typography";

function IntroductionPage({t}) {
    return (
        <div>
            <Typography variant={"h6"}>
                {t("titles.page_title")}
            </Typography>
        </div>
    );
}

export default withNamespaces()(IntroductionPage);