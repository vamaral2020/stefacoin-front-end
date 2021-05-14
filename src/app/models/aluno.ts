import { Cursos } from './cursos';
export interface Aluno {
    id?: number;
    nome?: string;
    email?:string;
    senha?: string;
    idade?: string;
    formacao?: string;
    tipo?: number;
    cursos?: Partial<Cursos>;
}
