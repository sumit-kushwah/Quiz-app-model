import { User } from '../user/user';
import { QuestionDict } from './question-dict';

export interface QuizDict {
    quiz_code: string;
    created_by : User;
    title: string;
    description: string;
    questions: QuestionDict[]; 
    isQuizPublic: boolean;
}