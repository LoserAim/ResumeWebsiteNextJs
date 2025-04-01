import React from 'react';
import Card from "@mui/material/Card";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export interface ITestimonialCard {
    Recommender: string;
    externalUrl: string;
    date: string;
    message: string;

}

const TestimonialCard = ({Recommender, message, externalUrl, date}: ITestimonialCard) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {Recommender[0]}
                    </Avatar>
                }
                title={Recommender}
                subheader={date}
                action={
                    <IconButton href={externalUrl} color="primary">
                        <LinkedInIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;