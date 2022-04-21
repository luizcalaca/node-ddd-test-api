import { ChallengesRepository } from "../../src/application/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository{
    public items: Challenge[] = []

    async findById(id: string): Promise<Challenge | null> {
        
        const student = this.items.find(challenge => challenge.id === id)

        if (!student){
            return null
        }

        return student
    }
    
}