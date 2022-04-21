import { Entity} from "../../core/domain/Entity";

type ChallengeProps = {
    title: string;
    instructionsURL: string
}

export class Challenge extends Entity<ChallengeProps> {
    private constructor (props: ChallengeProps, id?: string){
        super(props, id)
    }

    set id(id: string){
        super._id = id
    }
     get id():string{ 
         return this._id
     }

    public static create(props: ChallengeProps, id?: string){
        const challenge = new Challenge(props, id);

        return challenge;
    }
}