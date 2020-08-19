import React from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "components/ui-libraries";

const Header = React.memo(() => {
  const { t } = useTranslation("project");

  return (
    <Typography gutterBottom variant={"h6"}>
      {t("woocommerce")}
    </Typography>
  );
});

export default Header;
