import Joi from '@hapi/joi';
import Schemas from '../helpers/validation.helper';

const validate = (req, res, next) => {
  // enabled HTTP methods for request data validation
  const supportedMethods = ['post', 'put', 'patch'];
  const route = req.route.path;
  const method = req.method.toLowerCase();

  if (supportedMethods.includes(method) && Schemas[route] !== undefined) {
    // get schema for the current route
    const schema = Schemas[route];
    if (schema) {
      // Validate req.body using the schema and validation options
      return Joi.validate(req.body, schema, (error) => {
        if (error) {
          return res.status(404).send({ status: 404, error: error.details[0].message });
        }
        next();
        return 0;
      });
    }
  }
  return 0;
};

export default validate;
