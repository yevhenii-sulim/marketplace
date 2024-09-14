import * as Yup from 'yup';

const mailSchema =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()^{}#+._=;:'",<>/№~\-|`])[A-Za-z\d@$!%*?&()^{}#+._=;:'",<>/№~\-|]{6,20}$/;

const signupSchema = Yup.object().shape({
  new_password: Yup.string().matches(mailSchema).required(),
});

export default signupSchema;
