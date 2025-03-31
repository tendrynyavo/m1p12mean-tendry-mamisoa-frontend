import { Motorisation } from "./motorisation.model";

export interface Modele {
    _id: string;
    title: string;
    annee: number;
    motorisations: Motorisation[];
}