"use client"
import React from 'react';
import Stack from "@mui/material/Stack";
import TestimonialCard, {ITestimonialCard} from "@/_components/cards/TestimonialCard";
import {Box, CircularProgress} from "@mui/material";
import useAxios from "@/_hooks/UseAxios";
import {format} from "date-fns";

// Needed to create a new interface to ingest data from API while maintaining contract on React component
interface ITestimonial extends Omit<ITestimonialCard, "date"> {
    date: number;
}

const Testimonials = () => {
    const {data, loading: isLoading,} = useAxios<ITestimonial[]>("/testimonials/all", "get");
    if (isLoading) {
        return <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
            <CircularProgress/>
        </Box>;
    }
    return (
        <Box display="flex" flex={"1 1 auto"} justifyContent={"center"}>
            <Stack display={"flex"} maxWidth={"lg"} spacing={2}>
                {isLoading && <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
                    <CircularProgress/>
                </Box>}
                {!isLoading && data && data.map((card: ITestimonial, index) => {
                    return <TestimonialCard key={index} Recommender={card.Recommender} externalUrl={card.externalUrl}
                                            date={format(new Date(card.date), "MMMM d, y")}
                                            message={card.message}/>;
                })}

            </Stack>
        </Box>

    );
};

export default Testimonials;