"use client"

import dynamic from "next/dynamic";
import {Avatar, Box, Card, CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const DynamicProfileCard = dynamic(() => import('../dynamic/DynamicProfileCard'),
    {
        ssr: false,
        loading: () => <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
            <CircularProgress/>
        </Box>
    }
);

export default function ProfileCard() {
    return (
        <Card sx={{maxWidth: "inherit"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
                <Avatar alt={"andrew-headshot"} src={"profile_pic.png"} sx={{width: 100, height: 100}}/>
                <Typography variant="h5" component="div" sx={{mt: 2}}>
                    Andrew Doser
                </Typography>
                <Typography textAlign={"center"} variant="h6" color={"text.secondary"} component="div">
                    Senior Full-Stack Software Engineer
                </Typography>
            </Box>
            <DynamicProfileCard/>
        </Card>
    );


}
