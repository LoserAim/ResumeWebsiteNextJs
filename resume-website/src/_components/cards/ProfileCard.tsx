import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Avatar, Box, ListItemButton, ListItemText, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';
import CardContent from "@mui/material/CardContent";
import ListIcon from "@/_components/typography/ListIcon";
import {Expertise, profile, Skills} from "@/_constants/ProfileData";

export default function ProfileCard() {
    return (
        <Card sx={{maxWidth: "inherit"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
                <Avatar alt={"andrew-headshot"} src={"profile_pic.png"} sx={{width: 100, height: 100}}/>
                <Typography variant="h5" component="div" sx={{mt: 2}}>
                    Andrew Doser
                </Typography>
            </Box>
            <Divider sx={{mt: 2}}/>
            <CardContent>
                <List component="nav" dense>
                    {profile.map((item, index) => {
                        return (
                            <ListItemButton key={index}>
                                <ListIcon icon={item.icon} title={item.title} subtitle={item.subtitle}/>
                            </ListItemButton>
                        );
                    })}
                </List>
            </CardContent>
            <Divider/>
            <CardContent>
                <Stack>
                    <Typography variant="h6" component="div">
                        Areas of Expertise
                    </Typography>
                    <List component="nav" dense>
                        {Expertise.map((item, index) => {
                            return (
                                <ListItemButton key={index}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Stack>
            </CardContent>
            <Divider/>
            <CardContent>
                <Stack>
                    <Typography variant="h6" component="div">
                        Skills
                    </Typography>
                    <List component="nav" dense>
                        {Skills.map((item, index) => {
                            return (
                                <ListItemButton key={index}>
                                    <ListItemText primary={item.title}
                                                  secondary={item.subtitle.join(", ")}/>
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Stack>
            </CardContent>
        </Card>
    );
}
