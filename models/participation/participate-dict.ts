import { User } from "../user/user";

export interface ParticipateDict {
    participation_id: string; // unique participation id
    created_by: User;
    participant: User;
    timestamp: number; // submission time
    score: number;
}