export class Coin {
    title: string;
    data: Array<any>;
    description:string;

    constructor(name:string , values:Array<any> , description){
        this.title = name;
        this.data = values.map((point:any)=> point.y);
        this.description = description;
    }
} 