import { Submission } from "../../domain/entities/submission"
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengedId: string;
}

export class CreateChallengeSubmission {

    constructor(
        private studentsRepository: StudentsRepository,
        private challengeRepository: ChallengesRepository
    ){}

    async execute({studentId, challengedId}: CreateChallengeSubmissionRequest){
        const student = await this.studentsRepository.findById(studentId)

        if(!student){
            throw new Error('Student does not exist')
        }

        const challenge = await this.challengeRepository.findById(challengedId)

        if(!challenge){
            throw new Error('Student does not exist')
        }

        const submission = Submission.create({
            studentId,
            challengedId
        })

        return submission
    }
}