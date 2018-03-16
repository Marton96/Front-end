import http from '../../config/Http';


export const getAllUsers = () => {
    return (dispatch) => {
        http.get('/users')
            .then((response) => { dispatch(getAllUsersSucces(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const getAllUsersSucces = (payload) => {
    return { type: 'GET_ALL_USERS_SUCCESS', payload };
};

export const getContactsById = (id) => {
    return (dispatch) => {
        http.get(`/contacts/${id}`)
            .then((response) => { dispatch(getContactsByIdSuccess(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const getContactsByIdSuccess = (payload) => {
    return { type: 'GET_CONTACT_INFO_BY_ID_SUCCES', payload };
};

export const getUserSkills = (id) => {
    return (dispatch) => {
        http.get(`/userskills/user/${id}`)
            .then((response) => {dispatch(getUserSkillsSuccess(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const getUserSkillsSuccess = (payload) => {
    return { type: 'GET_USER_SKILLS_SUCCES', payload };
};


export const   getAllUserEducation = (id) => {
    return (dispatch) => {
        http.get(`/usereducations/user/${id}`)
            .then((response) => { dispatch(getAllUserEducationSuccess(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
}

export const getAllUserEducationSuccess = (payload) =>{
    return { type: 'GET_EDUCATION_INFO_BY_ID_SUCCES', payload };
} 

export const deleteUserEducation = (value) => {
    return (dispatch) => {
        http.delete(`/usereducations/${value.id}`)
        .then((response) => { console.log("SUccesfully deleted!"); dispatch(getAllUserInfo(value.userId)) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const addUserEducation = (value) => {
    return (dispatch) => {
        http.post(`/usereducations`,value)
        .then((response) => { console.log("SUccesfully added!"); dispatch(getAllUserInfo(value.userId)) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const addWorkExperience = (value) => {
    return (dispatch) => {
        http.post(`/userworkexperiences`,value)
        .then((response) => { console.log("SUccesfully added!"); dispatch(getAllUserInfo(value.userId)) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};


export const deleteUserWorkExperience = (value) => {
    return (dispatch) => {
        http.delete(`/userworkexperiences/${value.id}`)
        .then((response) => { console.log("SUccesfully deleted!"); dispatch(getAllUserInfo(value.userId)) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};
export const getAllUserWorkExperience = (id) =>{
    return (dispatch) => {
        http.get(`/userworkexperiences/user/${id}`)
            .then((response) => { dispatch(getAllUserWorkSuccess(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
}

export const getAllUserWorkSuccess = (payload) =>{
    return { type: 'GET_WORK_INFO_BY_ID_SUCCES', payload };
} 

export const getAllUserInfo = (id) =>{
    return (dispatch) => {
        http.get(`/users/${id}/${true}`)
            .then((response) => { dispatch(getAllUserInfoSuccess(response.data)) })
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
}

export const getAllUserInfoSuccess = (payload) =>{
    return { type: 'GET_ALL_USER_INFO_SUCCES', payload };
} 

export const updateContact = (id,value) => {
    return (dispatch) => {
        const request = value.id ? http.put : http.post;
        const url = value.id ? `/contacts/${id}` : '/contact';

        request(url, value)
       .then((response) => { console.log("SUccesfully updated!"); dispatch(getContactsById(id)) })
       .catch((error) => dispatch(onCRUDFailure(error)));
   };
}


export const createContact = (value) => {
    return (dispatch) => {
        http.post(`/contacts`, value)
       .then((response) => { console.log("SUccesfully created!") })
       .catch((error) => dispatch(onCRUDFailure(error)));
   };
}

export const createUser = (value) => {
    value.contactInfo = {};
    
    return (dispatch) => {
        http.post('/users', value)
            .then((response) => { console.log("SUccesfully created!"); dispatch(getAllUsers())})
            .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        http.delete(`users/${id}`)
        .then((response) => { console.log("SUccesfully deleted!"); dispatch(getAllUsers()) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const updateUser = (id, value) => {
    return (dispatch) => {
         http.put(`users/${id}`, value)
        .then((response) => { console.log("SUccesfully updated!"); dispatch(getAllUsers()) })
        .catch((error) => dispatch(onCRUDFailure(error)));
    };
};

export const onCRUDFailure = (error) => {
    return { type: 'ON_CRUD_ERROR', error };
};