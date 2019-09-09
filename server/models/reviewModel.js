export class Review {
  constructor(reviewid, sessionId, mentorId, menteeId, score, menteeFullName, remark) {
    this.reviewid = reviewid;
    this.sessionId = sessionId;
    this.mentorId = mentorId;
    this.menteeId = menteeId;
    this.score = score;
    this.menteeFullName = menteeFullName;
    this.remark = remark;
  }
}

export const reviews = [
  new Review(2, 2, 1, 4, 'john doe', 'in general i like the way we communicate i got many things in javascript averything is ok thanks for your support'),
];
