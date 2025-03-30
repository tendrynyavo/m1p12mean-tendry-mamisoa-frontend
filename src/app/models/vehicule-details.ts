export class Motorisation {
    _id: string = '';
    nom: string = '';
    type: string = '';
}

export class Modele {
    _id: string = '';
    nom: string = '';
    annee: number = 0;
    motorisation: Motorisation[] = [];
}

export class Marque {
    _id: string = '';
    nom: string = '';
    modeles: Modele[] = [];
}