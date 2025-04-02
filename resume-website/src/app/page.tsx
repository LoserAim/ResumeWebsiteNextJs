import {Box, Grid, Stack } from "@mui/material";
import React from "react";
import ProfileCard from "@/_components/cards/ProfileCard";
import EducationCard from "@/_components/cards/EducationCard";
import {NextPageWithLayout} from "@/app/_app";
import ExperienceCard from "@/_components/cards/ExperienceCard";

const Home: NextPageWithLayout = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ flexGrow: 1 }} maxWidth={"lg"}>
                <Grid container direction="row" spacing={2} sx={{justifyContent: "center"}}>
                    <Grid size={{xs: 12, md: 4}} >
                        <ProfileCard />
                    </Grid>
                    <Grid size={{xs: 12, md: 8}}>
                        <Stack spacing={2}>
                            <EducationCard />
                            <ExperienceCard />
                        </Stack>


                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;