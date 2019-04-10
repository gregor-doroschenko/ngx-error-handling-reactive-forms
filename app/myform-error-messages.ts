import { ErrorMessage } from './error-message';

export const MyFormErrorMessage = [
  new ErrorMessage('name', 'required', 'Name is required'),
  new ErrorMessage('name', 'maxlength', 'Name should have maximal 255 chars'),
  new ErrorMessage('email', 'required', 'Email is required'),
  new ErrorMessage('email', 'email', 'Email is not valid'),
  new ErrorMessage('email', 'maxlength', 'Email should have maximal 255 chars'),
  new ErrorMessage('password', 'required', 'Password is required'),
  new ErrorMessage('password', 'minlength', 'Password should have minimal 12 chars')
];
