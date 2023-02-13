export class Todo{

    public id!: number;
    public texto!: string;
    public completado!: boolean;


    constructor( texto: string ){

        this.texto = texto;
        this.id  = new Date().getTime() + Math.floor(Math.random()*1000) ;
        
        this.completado = false;

    }


}