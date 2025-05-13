import type {CardItem} from "../components/card/type";
import {experienceItems} from "./data";

export const experienceAsCardItems: CardItem[] = experienceItems.map((exp) => ({
    title: exp.title,
    subtitle: `${exp.subtitle} (${exp.date})`,
    description: exp.proyecto.map(p => `• ${p.name}: ${p.description}`).join('\n'),
}));