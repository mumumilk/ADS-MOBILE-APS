export class Documento {
    public nome: string;
    public data: any;
    public responsavel: any;
    public entregue: boolean;

    public constructor(nome: string, data: any, responsavel: any, entregue: boolean) {
        this.nome = nome;
        this.data = data;
        this.responsavel = responsavel;
        this.entregue = entregue;
    } 
}