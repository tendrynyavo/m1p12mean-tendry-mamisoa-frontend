import { Prestation } from './besoin.model';

export interface Diagnostic {
    _id?: string;
    dateDebut: Date;
    dateFin?: Date;
    reference: string;
    status: number;
    mecanicien: string;  // ID of mecanicien
    prestations: Prestation[];
}