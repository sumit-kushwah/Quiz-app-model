import { QuestionDict } from "../question-dict";

export class McqType implements QuestionDict {
    options: string[];
    constructor(
        public description: string,
    ) {}
}