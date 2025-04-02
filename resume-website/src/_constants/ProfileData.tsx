import * as React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

type TIcon = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    onClick: (event?: React.MouseEvent<Element, MouseEvent>) => void;
}
type TListIcon = TIcon[];
export const profile: TListIcon = [
    {
        icon: <PhoneIcon/>,
        title: "Phone",
        subtitle: "+1 (503) 501-9827",
        onClick: () => window.open("tel:+15035019827")
    },
    {
        icon: <EmailIcon/>,
        title: "Email",
        subtitle: "drew.doser@gmail.com",
        onClick: () => window.open("mailto:drew.doser@gmail.com")
    }
]

type TSkill = {
    title: string;
    subtitle: string[];
}
type TSkills = TSkill[]

export const Skills: TSkills = [
    {
        title: "Programming Languages",
        subtitle: [
            "Typescript", "C#", "Python", "Dart", "C++", "Java"
        ]
    },
    {
        title: "Databases",
        subtitle: [
            "MSSQL", "MongoDB", "ELK Stack", "PostgreSQL", "CosmosDB"
        ]
    },
    {
        title: "Development Tools",
        subtitle: [
            "Rider", "Webstorm", "Pycharm", "Visual Studio", "VS Code#"
        ]
    },

    {
        title: "Web Technologies",
        subtitle: [
            "HTML",
            "CSS",
            "XPath",
            "jQuery"
        ]
    },
    {
        title: "Cloud Platforms",
        subtitle: [
            "AWS",
            "Azure",
            "Atlas",
        ]
    },
    {
        title: "Version Control",
        subtitle: [
            "Github",
            "Bitbucket",
            "Gitlab",
        ]
    },
    {
        title: "Framework & Libraries",
        subtitle: [
            "React",
            "Next.js",
            "Express.js",
            "Asp.Net Core",
            "Entity Framework",
            "Flask",
            "Selenium",
            "Jest",
            "Xamarin",
            "Flutter",
        ]
    },
    {
        title: "Project Management",
        subtitle: [
            "Jira",
            "Monday",
            "Github Projects",
            "Slack",
            "Teams",
        ]
    }
];

export const Expertise: string[] = [
    "New Technologies Integration",
    "Data Migration",
    "Database Management",
    "Wireframing & Design",
    "Responsive UI/UX Design",
    "Software Development Lifecycle",
    "Testing & Debugging",
    "Technical Leadership",
    "Project Coordination",
    "API Management",
    "Performance Optimization",
    "Cross-Functional Collaborations",
    "Code Review",
    "Technical Issues Resolution"
]