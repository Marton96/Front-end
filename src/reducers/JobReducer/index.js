const initialState = {
    jobInfoList: [],
    jobByCompanyInfoList: [],
    jobDetails: [],
    userJobApplications: [],
    userJobApplicationsJob: [],
    jobBenefits: [],
    jobRequirements: [],
    hasApplied: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_JOBS_SUCCESS':
            console.log('GET_ALL_JOBS_SUCCESS reducer', action);
            return { ...state, jobInfoList: action.payload };
        case 'GET_JOBS_BY_COMPANY_SUCCESS':
            console.log('GET_JOBS_BY_COMPANY_SUCCESS reducer', action);
            return { ...state, jobByCompanyInfoList: action.payload };
        case 'GET_JOB_BY_ID_SUCCESS':
            console.log('GET_JOB_BY_ID_SUCCESS reducer', action);
            return { ...state, jobDetails: action.payload };
        case 'GET_USER_JOB_APPLICATIONS_SUCCES':
            console.log('GET_USER_JOB_APPLICATIONS_SUCCES reducer', action);
            return { ...state, userJobApplications: action.payload };
        case 'GET_USER_JOB_APPLICATIONS_JOB_SUCCES':
            console.log('GET_USER_JOB_APPLICATIONS_JOB_SUCCES reducer', action);
            return { ...state, userJobApplicationsJob: action.payload };
        case 'HAS_APPLIED_SUCCES':
            console.log('HAS_APPLIED_SUCCES reducer', action);
            return { ...state, hasApplied: action.payload };
        case 'GET_JOB_BENEFITS_SUCCES':
            console.log('GET_JOB_BENEFITS_SUCCES reducer', action);
            return { ...state, jobBenefits: action.payload }
        case 'GET_JOB_REQUIREMENTS_SUCCES':
            console.log('GET_JOB_REQUIREMENTS_SUCCES reducer', action);
            return { ...state, jobRequirements: action.payload }
        case 'ON_ERROR':
            console.log('ON_ERROR reducer', action);
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default reducer;