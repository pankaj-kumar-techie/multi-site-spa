import { Section } from "./Section";
import { Theme } from "./Theme";

export interface website {
    name: string;
    domain?: string | null;
    sections: Section[] | null;
    theme: Theme;
    
}