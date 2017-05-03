export class Atividade {
    public data: any;
    public descricao: string;
    public entregue: boolean;

    public constructor(data: any, descricao: string, entregue: boolean) {
        this.data = data;
        this.descricao = descricao;
        this.entregue = entregue;
    }
}