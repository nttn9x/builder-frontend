import React from "react";

import { Tooltip, Typography } from "components/ui-libraries";

export default function TypographyOwn({ title, ...props }: any) {
  if (!title || title.length < 1) {
    return (
      <Typography {...props} noWrap style={{ color: "transparent" }}>
        {"N/A"}
      </Typography>
    );
  }

  return (
    <Tooltip title={title || " "} placement="top-start">
      <Typography {...props}>{title}</Typography>
    </Tooltip>
  );
}
