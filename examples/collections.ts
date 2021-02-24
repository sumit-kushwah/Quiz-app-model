import { Gender } from '../models/user/gender'
import { McqType } from '../models/quiz/Question-Type/mcq'
import { TextType } from '../models/quiz/Question-Type/text'
import { ParticipateDict } from '../models/participation/participate-dict'
import { QuizDict } from '../models/quiz/quiz-dict'
import { UserDict } from '../models/user/user-dict'

export const UsersCollection: {[key: string]: UserDict} = {
    "uid1": {
        uid: "uid1",
        name: "sumit kushwah",
        gender: Gender.MALE,
        phone: "8707480900",
        email: "sumitkushwah1729@gmail.com",
        profile_photo_link: "http://www.imugr.com.12345678",
    },
    "uid2": {
        uid: "uid2",
        name: "smriti kushwah",
        gender: Gender.FEMALE,
        phone: "8707480900",
        email: "sumitkushwah1729@gmail.com",
        profile_photo_link: "http://www.imugr.com.12345678",
    }
}

export const mcqQuestion: McqType = {
    description: "Which is country of india?",
    options: ["Delhi", "Calcutta", "Mumbai", "Chennai"]
}

export const textQuestion: TextType = {
    description: "Which is country of india?",
}

export const QuizzesCollection: {[key: string]: QuizDict} = {
    "quiz1": {
        quiz_code: "quiz1",
        title: "Gate CS 2021 set 1",
        description: "This quiz is based on paper held on 13 feb 2021",
        questions: [mcqQuestion, textQuestion],
        created_by : UsersCollection[0],
        isQuizPublic: false,
    },
    "quiz2": {
        quiz_code: "quiz2",
        title: "Gate CS 2021 set 2",
        description: 
        "This quiz is based on paper held on 13 feb 2021 in second session",
        questions: [textQuestion, mcqQuestion],
        created_by : UsersCollection[1], // we may not duplicate complete data
        // partial will be enough
        // batch writes is good alternative of having only uid there
        isQuizPublic: false,
    },
}

export const ParticipationsCollection: {[key: string]: ParticipateDict} = {
    "participation_id1": {
        participation_id: "participation_id1",
        created_by: UsersCollection[1],
        participant: UsersCollection[0],
        timestamp: 123,
        score: 123,
    }, 
    "participation_id2": {
        participation_id: "participation_id2",
        created_by: UsersCollection[1],
        participant: UsersCollection[0],
        timestamp: 123,
        score: 123,
    }
}