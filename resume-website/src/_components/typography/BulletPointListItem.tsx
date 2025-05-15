import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

interface IBulletPointListItemProps {
    text: string;
}

const BulletPointListItem = ({text}:IBulletPointListItemProps) => {
    return (
        <ListItem sx={{display:"flex", alignItems: "start"}}>

            <ListItemIcon sx={{minWidth: 25, pt: 1.1, display:"flex", alignItems: "start"}}>
                <Brightness1Icon sx={{fontSize: 10}} />
            </ListItemIcon>
            <ListItemText slotProps={{primary:{
                    fontSize: ".9em"}}} primary={text}/>

        </ListItem>
    );
};

export default BulletPointListItem;