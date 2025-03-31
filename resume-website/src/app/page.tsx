import {Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "@/_components/cards/ProfileCard";
import EducationCard from "@/_components/cards/EducationCard";

export default function Home() {
  return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ flexGrow: 1 }} maxWidth={"lg"}>
          <Grid container direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Grid size={{xs: 12, md: 4}} >
              <ProfileCard />
            </Grid>
            <Grid size={{xs: 12, md: 8}}>
              <EducationCard />
            </Grid>
          </Grid>
        </Box>
      </Box>

  );
}
