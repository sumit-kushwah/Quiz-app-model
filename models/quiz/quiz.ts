import { User } from "../user/user";
import { QuestionDict } from "./question-dict";
import { QuizDict } from "./quiz-dict";

export class Quiz implements QuizDict {
    constructor(
        public quiz_code: string,
        public created_by: User,
        public title: string,
        public description: string,
        public questions: QuestionDict[],
        public isQuizPublic: boolean,
    ) {}
}