import http from '../../config/Http';
import { push } from 'react-router-redux'

export const getCompanyByUser = (id) => {
    return (dispatch) => {
        http.get(`/companies/user/${id}`)
            .then((response) => { dispatch(getCompanyByUserSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const getCompanyByUserSucces = (payload) => {
    return { type: 'GET_COMPANY_BY_USER_SUCCESS', payload };
};

export const getCompanyInfo = (id) => {
    return (dispatch) => {
        http.get(`/companies/${id}/${true}`)
            .then((response) => { dispatch(getCompanyInfoSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    };
}

export const getCompanyInfoSucces = (payload) => {
    return { type: 'GET_COMPANY_INFO_SUCCESS', payload };
};

export const createCompany = (value) => {
    return (dispatch) => {
        http.post('/companies', value)
            .then((response) => { console.log("Succesfully created!"); dispatch(getCompanyByUser(localStorage.getItem("LOGGED_USER_ID")))})
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const deleteCompany = (id) => {
    return (dispatch) => {
        http.delete(`companies/${id}`)
        .then((response) => { console.log("Succesfully deleted!"); dispatch(getCompanyByUser(localStorage.getItem("LOGGED_USER_ID"))) })
        .catch((error) => dispatch(onFailure(error)));
    };
};

export const updateCompany = (id, value) => {
    return (dispatch) => {
         http.put(`companies/${id}`, value)
        .then((response) => { console.log("Succesfully updated!"); dispatch(getCompanyByUser(localStorage.getItem("LOGGED_USER_ID"))) })
        .catch((error) => dispatch(onFailure(error)));
    };
};

export const onRedirect = (id) => {
    return (dispatch) => {
        localStorage.setItem("COMPANY_ID",id)
        dispatch(push(`/company/jobs/${id}`));
    };
};



export const onFailure = (error) => {
    return { type: 'ON_ERROR', error };
};