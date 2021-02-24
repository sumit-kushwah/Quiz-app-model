import { QuestionDict } from "../question-dict";

export class MsqType implements QuestionDict {
    options: string[];
    constructor(
        public description: string,
    ) {}
}