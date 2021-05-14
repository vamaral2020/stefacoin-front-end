import { Aulas } from "./aulas";

export interface Cursos{
    id?: number;
    nome: string;
    idProfessor: number;
    descricao:string;
    aulas?:Partial<Aulas>;
}