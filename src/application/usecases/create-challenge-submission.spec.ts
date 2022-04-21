
import { isExportDeclaration } from "typescript";
import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('shoud', async ()=> {
        const studentsRepository = new InMemoryStudentsRepository()
        const challengesRepository = new InMemoryChallengesRepository()
        const sut = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository
        );

        const student = Student.create({
            name: 'Luiz',
            email:'luiz@example.com'

        })

        const challenge = Challenge.create({
            title:'Challenge 1',
            instructionsURL: 'http://example.com'
        })

        studentsRepository.items.push(student)
        challengesRepository.items.push(challenge)

        const response = await sut.execute({
            studentId: student.id,
            challengedId: challenge.id,
        })

        expect(response).toBeTruthy()
    })
})