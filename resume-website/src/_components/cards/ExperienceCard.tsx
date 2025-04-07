"use client"
import React, {useMemo} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ExperienceEntry, {IExperienceEntry} from "@/_components/typography/ExperienceEntry";
import Stack from "@mui/material/Stack";
import {intervalToDuration, add, type Duration, formatDuration} from "date-fns";
import {Box} from "@mui/material";
import useAxios from "@/_hooks/UseAxios";


export const addDurations = (duration1: Duration, duration2: Duration) => {
    const baseDate = new Date(0) // can probably be any date, 0 just seemed like a good start

    return intervalToDuration({
        start: baseDate,
        end: add(add(baseDate, duration1), duration2),
    })
}

// Needed to create a new interface to ingest data from API while maintaining contract on React component
interface IJob extends Omit<IExperienceEntry, "startDate"|"finishDate"> {
    startDate: number;
    finishDate: number;
}


const ExperienceCard = () => {
    const {data, loading} = useAxios<IJob[]>("/jobs/all", "get");
    const totalProfessional = useMemo(() => {
        if (!data)
            return [];
        const dates = data.map(job => {
            const start = new Date(job.startDate);
            return job?.finishDate
                ? intervalToDuration({start, end: new Date(job.finishDate)})
                : intervalToDuration({start, end: new Date()});
        });
        return formatDuration(dates.reduce((accumulator, currentValue) =>
                addDurations(currentValue, accumulator),
            intervalToDuration({start: new Date(0), end: new Date(0)})), {format: ['years', 'months']});
    }, [loading])

    if (!loading && data) {
        // data comes in unsorted by date, should add an index to avoid the extra processing.
        data.sort((a, b) => b.startDate - a.startDate);
    }

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
                    {!loading && data && data.map((item, index) => (
                        <ExperienceEntry key={index}
                                         job={item.job}
                                         jobType={item.jobType}
                                         company={item.company}
                                         startDate={new Date(item.startDate)}
                                         finishDate={item?.finishDate ? new Date(item?.finishDate) : undefined}
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