import Joi from '@hapi/joi';

const signupSchema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
  firstname: Joi.string().strict().trim().min(3)
    .required(),
  lastname: Joi.string().strict().trim().min(3)
    .required(),
  password: Joi.string().strict().trim().min(6)
    .required(),
  address: Joi.string().strict().trim().min(3)
    .required(),
  bio: Joi.string().strict().trim().min(3)
    .required(),
  occupation: Joi.string().strict().trim().min(3)
    .required(),
  expertise: Joi.string().strict().trim().min(3)
    .required(),
};

const signinSchema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
  password: Joi.string().strict().trim().min(6)
    .required(),
};

const upgradeuserschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const mentorsschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const specificmentorschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const createsessionschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
  mentorId: Joi.string().strict().trim().min(3)
    .required(),
  questions: Joi.string().strict().trim().min(3)
    .required(),
};

const acceptsessionschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const rejectsessionschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const allsessionschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

const createreviewschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
  score: Joi.string().strict().trim().min(3)
    .required(),
  remark: Joi.string().strict().trim().min(3)
    .required(),
};

const deletereviewschema = {
  email: Joi.string().strict().trim().min(3)
    .required()
    .email(),
};

// export the schema
export default {
  '/auth/signup': signupSchema,
  '/auth/signin': signinSchema,
  '/user/:userId': upgradeuserschema,
  '/mentors': mentorsschema,
  '/mentors/:mentorId': specificmentorschema,
  '/sessions': createsessionschema,
  allsessionschema,
  '/sessions/:sessionId/accept': acceptsessionschema,
  '/sessions/:sessionId/reject': rejectsessionschema,
  '/review': createreviewschema,
  deletereviewschema,
};
