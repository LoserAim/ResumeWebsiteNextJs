

export type TContact = {
    title: string;
    subtitle: string;
    href: string;
}

export type TSkill = {
    title: string;
    subtitle: string[];
}
export interface IProfileData {
    skills: TSkill[];
    contacts: TContact[];
    expertise: string[];
}