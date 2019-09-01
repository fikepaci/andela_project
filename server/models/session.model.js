export class Session {
  constructor(sessionId, mentorId, menteeId, questions, menteeEmail, status = 'pending') {
    this.sessionId = sessionId;
    this.mentorId = mentorId;
    this.menteeId = menteeId;
    this.questions = questions;
    this.menteeEmail = menteeEmail;
    this.status = status;
  }
}

export const sessions = [
  new Session(1, 3, 2, 'i want to learn javascript and python', 'fike@gmail.com'),
];
