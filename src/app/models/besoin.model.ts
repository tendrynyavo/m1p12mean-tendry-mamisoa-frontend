export interface Besoin {
    _id?: string;
    motorisation: string;
    prestations: Prestation[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Prestation {
    _id: string;
    nom: string;
    tempsEstime: number;
    pieces?: Piece[];
    piecesString: string;
    prixTotal : number;
}

export interface Piece {
    _id?: string;
    nom: string;
    unite: string;
    quantite: number;
    prixUnitaire: number;
}