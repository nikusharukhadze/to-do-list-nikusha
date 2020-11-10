export class TodoModel {
    id : number;
    title : string;
    description : string;
    completed : boolean;
    constructor (id : number = null, title : string, description : string) {
           this.id = id;
           this.title = title;
           this.description = description;
           this.completed = false;
    }

}