const initialState = {
    userInfoList: [],
    userAllInfo:[],
    contactInfo: [],
    educationInfo: [],
    workInfo: [],
    userSkills: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_SUCCESS':
            console.log('GET_ALL_USERS_SUCCESS reducer', action);
            return { ...state, userInfoList: action.payload };
        case 'ON_CRUD_ERROR':
            console.log('GET_ALL_USERS_ERROR reducer', action);
            return { ...state, error: action.error };
        case 'GET_CONTACT_INFO_BY_ID_SUCCES':
            console.log('GET_CONTACT_INFO_BY_ID_SUCCES reducer', action);
            return { ...state, contactInfo: action.payload };
        case 'GET_EDUCATION_INFO_BY_ID_SUCCES':
            console.log('GET_EDUCATION_INFO_BY_ID_SUCCES reducer', action);
            return { ...state, educationInfo: action.payload };
        case 'GET_ALL_USER_INFO_SUCCES':
            console.log('GET_ALL_USER_INFO_SUCCES reducer', action);
            return { ...state, userAllInfo: action.payload };
        case 'GET_USER_SKILLS_SUCCES':
            return{ ...state, userSkills: action.payload};
        default:
            return state;
    }
};

export default reducer;