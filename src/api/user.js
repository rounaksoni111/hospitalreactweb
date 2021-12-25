import APIService from './config/APIService';
import { UserAPI as api } from './config/APIRoutes';

// CALL APIService have 6 arguments
// payLoad, URL, {methodType: <GET/POST>}, {isLoading: <Boolean>}, cancelToken:<Boolean>, checkError: <Boolean>

export default {
    submit: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.submit, methodType: 'POST' });
        return response;
    },

    register: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.register, methodType: 'POST' });
        return response;
    },

    login: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.login, methodType: 'POST' });
        return response;
    },

    getContact: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.getContact, methodType: 'GET' });
        return response;
    },

    appointment: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.appointment, methodType: 'POST' });
        return response;
    },

    showAppointment: async ({ ...payload }) => {
        const response = await APIService({ payload, URL: api.showAppointment, methodType: 'GET' });
        return response;
    },

};
