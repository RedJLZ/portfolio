type Proyecto = {
    id: number;
    name: string;
    description: string;
};

export type CardItem = {
    title: string;
    description: string;
    subtitle?: string;
    technology?: string;
    url?: string;
};
export type CardSectionProps = {
    id: string;
    heading: string;
    items: CardItem[];
};

export type ExperienceItem = {
    title: string;
    subtitle: string;
    date: string;
    proyecto: Proyecto[];
};
