import { Entity} from "../../core/domain/Entity";

type StudentProps = {
    name: string;
    email: string
}

export class Student extends Entity<StudentProps> {
    private constructor (props: StudentProps, id?: string){
        super(props, id)
    }
    set id(id: string){
        super._id = id
    }
     get id():string{ 
         return this._id
     }

    public static create(props: StudentProps, id?: string){
        const student = new Student(props, id);

        return student;
    }
}