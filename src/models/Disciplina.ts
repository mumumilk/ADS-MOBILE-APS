import { Atividade } from './Atividade';
import { Documento } from './Documento';

export class Disciplina {
    public atividades: Array<Atividade>;
    public documentos: Array<Documento>;
    public nome: string;

    public constructor(nome: string) {
        
        if (nome && nome.length < 4) 
            throw new Error('O nome da disciplina deve possuir no mínimo 3 caracteres!');
        
        this.nome = nome;
        this.atividades = new Array<Atividade>();
        this.documentos = new Array<Documento>();
    }
}