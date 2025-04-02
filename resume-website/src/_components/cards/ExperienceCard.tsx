import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ExperienceEntry from "@/_components/typography/ExperienceEntry";
import {jobData} from "@/_constants/Jobs";
import Stack from "@mui/material/Stack";
import {intervalToDuration, add, type Duration, formatDuration} from "date-fns";
import {Box} from "@mui/material";


export const addDurations = (duration1: Duration, duration2: Duration) => {
    const baseDate = new Date(0) // can probably be any date, 0 just seemed like a good start

    return intervalToDuration({
        start: baseDate,
        end: add(add(baseDate, duration1), duration2),
    })
}

const ExperienceCard = () => {
    const dates = jobData.map(job => {
        return job?.finishDate
            ? intervalToDuration({start: job.startDate, end: job.finishDate})
            : intervalToDuration({start: job.startDate, end: new Date()});
    })
    const totalProfessional = formatDuration(dates.reduce((accumulator, currentValue) =>
        addDurations(currentValue, accumulator),
        intervalToDuration({start: new Date(0), end: new Date(0)})), {format: ['years', 'months']})


    return (
        <Card sx={{maxWidth: "inherit"}}>
            <CardContent>
                <Stack direction="row">
                    <Box display="flex" flex={"0 1 120px"}>
                        <Typography gutterBottom variant="h5" component="div">
                            Experience
                        </Typography>
                    </Box>
                    <Box display="flex" flex={"1 1 auto"} justifyContent="flex-end">
                        <Typography gutterBottom variant="h5" component="div">
                            {totalProfessional}
                        </Typography>
                    </Box>
                </Stack>

                <Stack spacing={2}>
                    {jobData.map((item, index) => (
                        <ExperienceEntry key={index}
                                         job={item.job}
                                         jobType={item.jobType}
                                         company={item.company}
                                         startDate={item.startDate}
                                         finishDate={item?.finishDate ?? undefined}
                                         summary={item.summary}
                                         commuteType={item.commuteType}
                                         location={item.location}
                                         skills={item.skills}/>
                    ))}
                </Stack>


            </CardContent>
        </Card>
    );
};

export default ExperienceCard;