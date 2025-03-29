import {Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "@/_components/cards/ProfileCard";

export default function Home() {
  return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ flexGrow: 1 }} maxWidth={"lg"}>
          <Grid container direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Grid size={4}>
              <ProfileCard />
            </Grid>
            <Grid size={4}>
              test
            </Grid>
            <Grid size={4}>
              test
            </Grid>
            <Grid size={8}>
              test
            </Grid>
          </Grid>
        </Box>
      </Box>

  );
}
