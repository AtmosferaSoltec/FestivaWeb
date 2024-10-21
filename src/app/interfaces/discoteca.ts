export default interface Discoteca {
    id?: number;
    nombre?: string;
    descrip?: string;
    url_logo?: string;
    url_portada?: string;
    direc?: string;
    url_maps?: string;
    telf?: string;
    discotecaRedes?: Red[];
    horariosAtencion?: Horario[];
}

interface Red {
    url?: string;
    red?: string;
    cod?: string;
    logo?: string;
}

interface Horario {
    id?: number;
    dia?: number;
    hora_inicio?: string;
    hora_fin?: string;
}