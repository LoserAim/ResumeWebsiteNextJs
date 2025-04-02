/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {format, formatDuration, intervalToDuration} from "date-fns";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import {type IconButtonProps} from "@mui/material";

export interface IExperienceEntry {
    job: string;
    jobType: string;
    company: string;
    finishDate?: Date;
    startDate: Date;
    summary: string[];
    commuteType: string;
    location: string;
    skills: string[];
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const calculateTenure = (startDate: Date, finishDate?: Date): string => {
    const result = finishDate
        ? intervalToDuration({start: startDate, end: finishDate})
        : intervalToDuration({start: startDate, end: new Date()});
    return formatDuration(result, {format: ['years', 'months']});
}

const SummaryPaper = styled(Paper)(({theme}) => ({
    width: "%100",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'start',
}));


interface ExpandMoreProps {
    expand: boolean
}

const ExpandMore = styled(({expand, ...other}: ExpandMoreProps) => {
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({expand}) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({expand}) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const ExperienceEntry = ({
                             job,
                             jobType,
                             company,
                             finishDate,
                             startDate,
                             location,
                             commuteType,
                             summary,
                             skills
                         }: IExperienceEntry) => {
    const [expanded, setExpanded] = React.useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const dateString = finishDate
        ? `${format(startDate, "MMMM, yyyy")} - ${format(finishDate, "MMMM, yyyy")} | ${calculateTenure(startDate, finishDate)}`
        : `${format(startDate, "MMMM, yyyy")} - Present | ${calculateTenure(startDate)}`;
    return (
        <Box mx={2} sx={{border: 1, borderColor: "divider"}} borderRadius={1} p={2}>
            <Typography variant="subtitle1">
                {job}
            </Typography>
            <Typography variant="body2">
                {company} | {jobType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {dateString}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {location} | {commuteType}
            </Typography>
            <List sx={{listStyleType: 'disc', px: 3, pt:0}}>
                {summary.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{display: 'list-item'}}>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}

            </List>


            <Stack direction={"row"} component={Link} color={"inherit"} underline={"none"}  onClick={handleExpandClick}>
                <Box display={"flex"} sx={{flex: "1 1 auto"}} justifyContent={"flex-start"} alignItems={"center"}>
                    <Typography variant="subtitle1">
                        Skills
                    </Typography>
                </Box>
                <Box display={"flex"} sx={{flex: "0 0 60px"}} justifyContent={"flex-end"} alignItems={"center"}>
                    <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </Box>
            </Stack>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box  px={3}>
                    {skills.map((item, index) => {
                        return <Chip sx={{m: 1}} key={index} label={item}/>;
                    })}
                </Box>
            </Collapse>
        </Box>
    );
};

export default ExperienceEntry;