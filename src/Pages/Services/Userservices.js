import axios from 'axios'

export const SignUpApi = (SignupObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",SignupObj)
    return response;
}

export const SignInApi = (SigninObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",SigninObj)
    return response;
}
