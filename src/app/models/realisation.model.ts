import { Prestation } from "./besoin.model";
import { Diagnostic } from "./diagnostic.model";

export interface Realisation {
    dateDebut: Date;
    dateFin?: Date;
    reference: string;
    referenceDiagnostic: Diagnostic; // Assuming ObjectId is represented as a string
    status: number;
    mecanicien: string; // Assuming ObjectId is represented as a string
    prestations: Prestation[];
  }