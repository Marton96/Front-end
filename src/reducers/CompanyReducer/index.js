const initialState = {
    companyInfoList: [],
    companyInfo: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMPANY_BY_USER_SUCCESS':
            console.log('GET_COMPANY_BY_USER_SUCCESS reducer',action);
            return {...state, companyInfoList:action.payload };
        case 'GET_COMPANY_INFO_SUCCESS':
            console.log('GET_COMPANY_INFO_SUCCESS reducer',action);
            return {...state, companyInfo:action.payload };
        case 'ON_ERROR':
            console.log ('ON_ERROR reducer',action);
            return {...state, error:action.error };
        default:
            return state;
    }
};

export default reducer;