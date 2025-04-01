import React from 'react';
import Stack from "@mui/material/Stack";
import TestimonialCard, {ITestimonialCard} from "@/_components/cards/TestimonialCard";
import {Box} from "@mui/material";
import {data} from "@/_constants/Testimonials";

const Testimonials = () => {
    return (
        <Box display="flex" flex={"1 1 auto"} justifyContent={"center"}>
            <Stack display={"flex"} maxWidth={"lg"} spacing={2}>
                {data.map((card: ITestimonialCard, index) => {
                    return <TestimonialCard key={index} Recommender={card.Recommender} externalUrl={card.externalUrl}
                                            date={card.date}
                                            message={card.message}/>;
                })}

            </Stack>
        </Box>

    );
};

export default Testimonials;