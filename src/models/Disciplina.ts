import { Atividade } from './Atividade';
import { Documento } from './Documento';

export class Disciplina {
    public atividades: Array<Atividade>;
    public documentos: Array<Documento>;

    public constructor(public nome: string) {
        this.atividades = new Array<Atividade>();
        this.documentos = new Array<Documento>();
    }
}