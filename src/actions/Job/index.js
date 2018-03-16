import http from '../../config/Http';
import { push } from 'react-router-redux'


export const getAllJobs = () => {
    return (dispatch) => {
        http.get('/jobs')
            .then((response) => { dispatch(getAllJobsSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const getAllJobsSucces = (payload) => {
    return { type: 'GET_ALL_JOBS_SUCCESS', payload };
};

export const getJobsByCompany = (id) => {
    return (dispatch) => {
        http.get(`/companies/${id}/${true}`)
            .then((response) => { dispatch(getJobsByCompanySucces(response.data.jobInfoList)) })
            .catch((error) => dispatch(onFailure(error)));
    };
}

export const getJobById = (id) => {
    return (dispatch) => {
        http.get(`/jobs/${id}`)
            .then((response) => { dispatch(getJobByIdSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    };
}

export const getJobByIdSucces = (payload) => {
    return { type: 'GET_JOB_BY_ID_SUCCESS', payload };
};



export const getJobsByCompanySucces = (payload) => {
    return { type: 'GET_JOBS_BY_COMPANY_SUCCESS', payload };
};

// export const createJob = (value) => {
//     return (dispatch) => {
//         http.post('/jobs', value)
//             .then((response) => { console.log("Succesfully created!"); dispatch(getJobsByCompany(localStorage.getItem("COMPANY_ID")))})
//             .catch((error) => dispatch(onFailure(error)));
//     };
// };

export const createJob = (value) => {
    return async (dispatch) => {
        try {
            const response = await http.post('/jobs', value);
            console.log("Respponse", response);
            console.log("Value", value);
            const id = response.data.id;

            for (let i = 0; i < value.benefits.length; i++) {
                let value2 = {
                    "jobId": id,
                    "name": value.benefits[i].name,
                }
                await http.post(`/jobbenefits`, value2)
            }

            for (let i = 0; i < value.requirements.length; i++) {
                let value3 = {
                    "jobId": id,
                    "name": value.requirements[i].name,
                }
                await http.post(`/jobrequirements`, value3)
            }

            dispatch(getJobsByCompany(localStorage.getItem("COMPANY_ID")));
            dispatch(getUserJobsApplicationsSucces(response.data))
        }
        catch (error) {
            dispatch(onFailure(error));
        }
    };
};

export const ApplyForJob = (value) => {
    return (dispatch) => {
        http.post('/userjobapplications', value)
            .then((response) => { dispatch(hasAppliedSucces(true)) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const deleteJob = (id) => {
    return (dispatch) => {
        http.delete(`jobs/${id}`)
            .then((response) => { console.log("Succesfully deleted!"); dispatch(getJobsByCompany(localStorage.getItem("COMPANY_ID"))) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const updateJob = (id, value) => {
    return (dispatch) => {
        http.put(`jobs/${id}`, value)
            .then((response) => { console.log("Succesfully updated!"); dispatch(getJobsByCompany(localStorage.getItem("COMPANY_ID"))) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const onRedirect = (id) => {
    return (dispatch) => {
        dispatch(push(`/user/jobs/${id}`));
    };
};

export const getUserJobApplications = (id) => {
    return async (dispatch) => {
        try {
            const response = await http.get(`/userjobapplications/user/${id}`);
            for (let i = 0; i < response.data.length; i++) {
                const response2 = await http.get(`/jobs/${response.data[i].jobId}`);
                const jobInfo = response2.data;
                const response3 = await http.get(`/companies/${jobInfo.companyId}/true`);
                const companyInfo = response3.data;
                jobInfo.companyInfo = companyInfo;

                response.data[i].jobInfo = jobInfo;
            }

            dispatch(getUserJobsApplicationsSucces(response.data))
        }
        catch (error) {
            dispatch(onFailure(error));
        }
    };
};

export const hasAppliedtoJob = (userId, jobId) => {
    return (dispatch) => {
        http.get(`/userjobapplications/user/${userId}`)
            .then((response) => {
                let ok = false;
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].jobId == jobId)
                        ok = true;
                }
                dispatch(hasAppliedSucces(ok))
            })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const hasAppliedSucces = (payload) => {
    return { type: 'HAS_APPLIED_SUCCES', payload };
};


export const getUserJobsApplicationsSucces = (payload) => {
    return { type: 'GET_USER_JOB_APPLICATIONS_SUCCES', payload };
};

export const getUserJobApplicationsJob = (id) => {
    return (dispatch) => {
        http.get(`/userjobapplications/job/${id}`)
            .then((response) => { dispatch(getUserJobsApplicationsJobSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    };
};

export const getUserJobsApplicationsJobSucces = (payload) => {
    return { type: 'GET_USER_JOB_APPLICATIONS_JOB_SUCCES', payload };
};

export const getJobBenefitsForSpecificJob = (id) => {
    return (dispatch) => {
        http.get(`/jobbenefits/job/${id}`)
            .then((response) => { dispatch(getJobBenefitsForSpecificJobSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    }
}

export const getJobRequirementsForSpecificJob = (id) => {
    return (dispatch) => {
        http.get(`/jobrequirements/job/${id}`)
            .then((response) => { dispatch(getJobRequirementsForSpecificJobSucces(response.data)) })
            .catch((error) => dispatch(onFailure(error)));
    }
}

export const getJobBenefitsForSpecificJobSucces = (payload) => {
    return { type: 'GET_JOB_BENEFITS_SUCCES', payload };
}

export const getJobRequirementsForSpecificJobSucces = (payload) => {
    return { type: 'GET_JOB_REQUIREMENTS_SUCCES', payload };
}

export const onApplications = (id) => {
    return (dispatch) => {
        dispatch(push(`/company/jobs/applications/${id}`))
    };
};

export const onFailure = (error) => {
    return { type: 'ON_ERROR', error };
};