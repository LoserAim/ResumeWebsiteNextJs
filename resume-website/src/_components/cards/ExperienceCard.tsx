"use client"
import React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
import {Box, CircularProgress} from "@mui/material";

const DynamicExperienceCard = dynamic(() => import("../dynamic/DynamicExperienceCard"),
    {
        loading: () => <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3}}>
            <CircularProgress/>
        </Box>,
    });

const ExperienceCard = () => {

    return (
        <Card sx={{maxWidth: "inherit"}}>
            <CardContent>
                <DynamicExperienceCard />
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;