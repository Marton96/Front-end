import http from '../../config/Http';
import { push } from 'react-router-redux'

export const initLogin = (value) => {
    return (dispatch) => {
        http.post('/users/login', value)
            .then((response) => {
                localStorage.setItem('JOBS_PROJECT_IS_LOGGED_IN', true);
                localStorage.setItem('JOBS_PROJECT_USER_INFO', JSON.stringify(response.data));
                localStorage.setItem('LOGGED_USER_ID',response.data.id);
                localStorage.setItem('LOGGED_USER_CONTACT_ID',response.data.contactInfoId);

                if (response.data.userRoleId === 1)
                    dispatch(push("/admin/users"));
                else
                    if (response.data.userRoleId === 2)
                        dispatch(push("/company/companies"));
                    else
                        dispatch(push("/user"));

                dispatch(onLoginSuccess(response.data));
            })
            .catch((error) => dispatch(onLoginFailure(error)));
    };
};

export const onLoginSuccess = (payload) => {
    return { type: 'ON_LOGIN_SUCCESS', payload };
};

export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR', error };
};

export const onLogout = () => {
    localStorage.removeItem('JOBS_PROJECT_IS_LOGGED_IN');
    localStorage.removeItem('JOBS_PROJECT_USER_INFO');
 //   localStorage.removeItem('LOGGED_USER_ID');
    return { type: 'ON_LOGOUT' };
};

export const onAppInit = () => {
    return (dispatch) => {
        const userInfoFromLocalStorage = localStorage.getItem('JOBS_PROJECT_USER_INFO');

        if (userInfoFromLocalStorage) {
            dispatch(onLoginSuccess(JSON.parse(userInfoFromLocalStorage)));
        }
    }
};