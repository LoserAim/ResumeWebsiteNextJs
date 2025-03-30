import React from 'react';
import {ListItemIcon, ListItemText} from "@mui/material";

interface IListIconProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

const ListIcon = ({
                      icon,
                      title,
                      subtitle
                  }: IListIconProps) => {
    return (
        <>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} secondary={subtitle}/>
        </>
    );
};

export default ListIcon;