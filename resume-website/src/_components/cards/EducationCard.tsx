import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import EducationEntry from "@/_components/typography/EducationEntry";

const EducationCard = () => {
    return (
        <Card sx={{ maxWidth: "inherit" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Education
                </Typography>
                <EducationEntry
                    degree={"Bachelor's in Software Engineering Technology"}
                    yearMonthCompletion={"December 2020"}
                    school={"Oregon Institute of Technology - Wilsonville, OR"}
                    overallGpa={"Overall GPA: 3.83"}
                />
                <Divider sx={{ my: 2 }} />
                <EducationEntry
                    degree={"Associate's in Computer Science"}
                    yearMonthCompletion={"June 2018"}
                    school={"Portland Community College - Portland, OR"}
                    overallGpa={"Overall GPA: 3.57"}
                />
            </CardContent>
        </Card>
    );
};

export default EducationCard;