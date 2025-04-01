import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IEducationEntryProps {
    degree: string;
    yearMonthCompletion: string;
    school: string;
    overallGpa?: string | undefined;
}

const EducationEntry = ({
                            degree,
                            yearMonthCompletion,
                            school,
                            overallGpa
                        }: IEducationEntryProps) => {
    return (
        <Box sx={{marginLeft: 2}}>
            <Typography variant="subtitle1">{degree}</Typography>
            <Typography variant="body2" color="text.secondary">{yearMonthCompletion}</Typography>
            <Typography variant="body2" sx={{mt: 1}}>
                {school}
            </Typography>
            {overallGpa && <Typography variant="body2" sx={{mt: 1}}>
                {overallGpa}
            </Typography>}

        </Box>
    );
};

export default EducationEntry;