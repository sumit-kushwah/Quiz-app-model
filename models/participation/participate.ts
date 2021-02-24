import { User } from "../user/user";
import { ParticipateDict } from "./participate-dict";

export class Participate implements ParticipateDict {

    constructor (
        public participation_id: string,
        public created_by: User,
        public participant: User,
        public timestamp: number,
        public score: number, 
    ) {}
     
    public setScore(score: number): void {
        this.score = score;
    }
}