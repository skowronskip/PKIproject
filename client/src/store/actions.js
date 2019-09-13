import {loginUser} from "../utils/apiRequests";

const actions = {
    LOGIN_USER: async (context, {login, password}) => {
        try {
            const {data} = await loginUser(login, password);
            context.dispatch('LOGIN_SUCCESS', data.token)
        } catch (e) {
            // TODO HANDLE ERROR
        }
    },
    LOGIN_SUCCESS: (context, jwt) => {
        localStorage.setItem('jwt', jwt);
    }
}

export default actions
