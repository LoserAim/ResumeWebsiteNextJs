import React from 'react';
import {Box, CardHeader, Grid, List} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

import BulletPointListItem from "@/_components/typography/BulletPointListItem";


const Index = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box sx={{flexGrow: 1}} maxWidth={"xl"}>
                <Grid container direction="row" spacing={2} sx={{justifyContent: "center"}}>
                    <Grid size={12}>
                        <Card sx={{maxWidth: "inherit"}}>
                            <CardHeader
                                title="About this website"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    This website was built using Next.js, AWS Elastic Container Registry, AWS Route 53,
                                    AWS Certificate Manager, AWS AppRunner, AWS DynamoDB, AWS Api Gateway, and AWS
                                    Lambda. This was primarily made to show off skills for Fullstack development. There
                                    are planned additions for this website. Below Will be more thorough explanations and
                                    reasoning behind certain technological decisions as well as acknowledging either
                                    cheaper or better alternatives to this stack.
                                </Typography>

                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid size={{sm:6, md:6, lg:4}}>
                        <Card sx={{maxWidth: "inherit"}}>
                            <CardHeader
                                title="Next.js"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pros
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Simpler single-developer management and rapid prototyping"}/>
                                    <BulletPointListItem text={"Includes built-in features that Vanilla React would require extra packages for"}/>
                                    <BulletPointListItem text={"App Routing – simplifies URL route creation and supports inheritable UI layouts"}/>
                                    <BulletPointListItem text={"Enabled easy development of dynamic URL routes."}/>
                                    <BulletPointListItem text={"Well-maintained, clear, and up-to-date documentation"}/>
                                </List>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cons
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Poor documentation for hosting on third-party cloud services"}/>
                                    <BulletPointListItem text={"Existing documentation lacks clarity on specific configuration issues with external cloud providers"}/>
                                    <BulletPointListItem text={"Strong bias toward using Next.js’s own cloud hosting platform"}/>
                                    <BulletPointListItem text={"Cost-effective for small teams, but becomes expensive at scale"}/>
                                    <BulletPointListItem text={"Limits flexibility due to restricted access to broader cloud tooling"}/>
                                    <BulletPointListItem text={"Creates silos, reducing the application's adaptability and responsiveness to diverse customer needs"}/>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{sm:6, md:6, lg:4}}>
                        <Card sx={{maxWidth: "inherit"}}>
                            <CardHeader
                                title="AWS Elastic Container Registry (ECR)"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pros
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Selected to support CI/CD principle"}/>
                                    <BulletPointListItem text={"Can use Github Actions - Automatically builds and uploads Docker containers to a private AWS ECR repository"}/>
                                    <BulletPointListItem text={"Enables flexible, branching cloud strategies for Continuous Integration and Deployment"}/>
                                    <BulletPointListItem text={"Leverages AWS ECR's: High Security, Reliability/Uptime, and Seamless Integration with other AWS services"}/>
                                </List>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cons
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Potential cost concerns: Can become expensive if poorly integrated with other services"}/>
                                    <BulletPointListItem text={"Region-specific limitations: Data transfer speed and pricing vary by AWS region"}/>
                                    <BulletPointListItem text={"Security considerations: Navigating AWS IAM can be complex without proper experience"}/>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{sm:6, md:6, lg:4}}>
                        <Card sx={{maxWidth: "inherit"}}>
                            <CardHeader
                                title="AWS Route 53"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pros
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Keeps everything within the AWS ecosystem"}/>
                                    <BulletPointListItem text={"Easier to manage with existing infrastructure"}/>
                                    <BulletPointListItem text={"Low maintenance costs"}/>
                                    <BulletPointListItem text={"User-friendly setup process"}/>
                                </List>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cons
                                </Typography>
                                <Divider sx={{my: 2}}/>
                                <List disablePadding dense>
                                    <BulletPointListItem text={"Confusing documentation on account verification for domain purchases"}/>
                                    <BulletPointListItem text={"Aliasing setup was unclear due to lack of straightforward guidance"}/>
                                    <BulletPointListItem text={"Extensive, but overwhelming due to too many available options"}/>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Index;