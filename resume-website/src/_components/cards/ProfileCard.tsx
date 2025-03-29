import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

export default function ProfileCard() {
    return (
        <Card sx={{ maxWidth: "inherit" }}>
            <CardMedia
                sx={{ height: 400 }}
                image="profile_pic.png"
                title="andrew headshot"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Andrew
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Andrews are a rare breed of pale and gangly but smart and intelligent.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
