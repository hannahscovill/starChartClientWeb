export interface WorkoutResult {
    originallyRecordedDate: number
    updatedDate: number
    quantity: number
    units: 'repetitions' | 'seconds' | 'miles' | 'calories' | 'kilometers'
    userId: string
    challengeId?: string
}

export interface User {
    fName: string
    lName: string
    userId: string
}

export interface ChallengeEnrollment {
    userId: string
    challengeId: string
}

export interface Challenge {
    challengeId: string
    ruleDescription: string // Accumulate strict pull ups in the month of April! (Bands allowed, workout reps not allowed)
    challengeStart: number
    challengeEnd: number
}

export interface CommunityMembership {
    communityId: string
    userId: string
}

export interface Community {
    communityId: string
    communityName: string
}

// select:
// user enrolled challenge
// - active challenge: start < now < end