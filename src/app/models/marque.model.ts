import { Modele } from "./modele.model";

export interface Marque {
    _id?: string;
    nom: string;
    modeles?: Modele[];
}