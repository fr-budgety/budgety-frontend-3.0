import * as Yup from 'yup';
import { INPUT_ERRORS } from '../const/const.messages';

/**
 * Validation Schema for Sign Up Form
 */
export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email(INPUT_ERRORS.notAnEmail)
    .required(INPUT_ERRORS.required),
  password: Yup.string()
    .min(8, INPUT_ERRORS.wrongLenght)
    .max(16, INPUT_ERRORS.wrongLenght)
    .required(INPUT_ERRORS.required),

  confirmPassword: Yup.string()
    .required(INPUT_ERRORS.required)
    .test('passwords-match', INPUT_ERRORS.passwordMustMatch, function (value) {
      return this.parent.password === value;
    }),
});