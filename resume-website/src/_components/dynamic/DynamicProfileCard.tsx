"use client"
import React from 'react';
import {Box, CircularProgress, ListItem, ListItemButton, ListItemText, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListIcon from "@/_components/typography/ListIcon";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import useAxios from "@/_hooks/UseAxios";

type TContact = {
    title: string;
    subtitle: string;
    href: string;
}

type TSkill = {
    title: string;
    subtitle: string[];
}
interface IProfileData {
    skills: TSkill[];
    contacts: TContact[];
    expertise: string[];
}


const DynamicProfileCard = () => {
    const {data: profile, loading: isLoading,} = useAxios<IProfileData>("/profile/latest", "get");
    if(isLoading) {
        return (<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3}}>
            <CircularProgress/>
        </Box>);
    }
    return !isLoading && profile !== undefined  && (
        <>
            <Divider sx={{mt: 2}}/>
            <CardContent>
                <List component="nav" dense>
                    {(profile as IProfileData).contacts.map((item: TContact, index: number) => {
                        return (
                            <ListItemButton key={index} href={item.href}>
                                <ListIcon icon={item.title.toLowerCase() === "phone" ? <PhoneIcon/> : <EmailIcon/>}
                                          title={item.title} subtitle={item.subtitle}/>
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
                    <List component="nav" dense disablePadding>
                        {(profile as IProfileData).expertise.map((item: string, index: number) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemText primary={item}/>
                                </ListItem>
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
                        {(profile as IProfileData).skills.map((item: TSkill, index: number) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemText primary={item.title}
                                                  secondary={item.subtitle.join(", ")}/>
                                </ListItem>
                            );
                        })}
                    </List>
                </Stack>
            </CardContent>
        </>
    );
};

export default DynamicProfileCard;