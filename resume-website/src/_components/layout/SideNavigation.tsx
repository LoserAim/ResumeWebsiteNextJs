import React from 'react';
import {Collapse, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import NextLink from "next/link";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import ReviewsIcon from "@mui/icons-material/Reviews";
import List from "@mui/material/List";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';

const SideNavigation = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [projectsOpen, setProjectsOpen] = React.useState(false);
    const handleListItemClick = (
        event: React.MouseEvent<Element, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton selected={selectedIndex === 0} component={NextLink} href={"/"}
                                onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
                                    handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <HomeFilledIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton selected={selectedIndex === 1} component={NextLink}
                                href={"testimonials"}
                                onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
                                    handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <ReviewsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Testimonials"}/>
                </ListItemButton>
            </ListItem>
            <ListItemButton onClick={() => setProjectsOpen(!projectsOpen)}>
                <ListItemIcon>
                    <AccountTreeIcon/>
                </ListItemIcon>
                <ListItemText primary="Projects"/>
                {projectsOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={projectsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}} selected={selectedIndex === 2} component={NextLink}
                                    href={"projects"}
                                    onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
                                        handleListItemClick(event, 2)}>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Resume Website"/>
                    </ListItemButton>
                </List>
            </Collapse>
            {/*    TODO:: Add some links */}
            {/*    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
        </List>
    );
};

export default SideNavigation;