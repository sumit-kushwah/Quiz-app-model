import { QuestionDict } from "../question-dict";

export class TextType implements QuestionDict {
    constructor(
        public description: string,
    ) {}
}