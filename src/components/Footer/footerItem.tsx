import { ReactElement } from "react";

import { Box, Typography } from "@mui/material";

export default function FooterItem({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {children}
      </Box>
    </Box>
  );
}