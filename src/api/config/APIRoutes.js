import { API_CONSUMER } from './URLs';

const User = `${API_CONSUMER}/api/v1/user`;

const UserAPI = {
  submit: `${User}/submit`,
  register: `${User}/register`,
  login: `${User}/login`,
  getContact: `${User}/getContact`,
  appointment: `${User}/appointment`,
  showAppointment: `${User}/showAppointment`,
};

export {
  UserAPI
};
