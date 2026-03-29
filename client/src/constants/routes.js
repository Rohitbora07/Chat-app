export const HOST = import.meta.env.VITE_BACKEND_URL 
export const AUTH_ROUTE = "/api/auth";
export const SIGNUP_ROUTE = `${AUTH_ROUTE}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
export const VERIFY_ACCOUNT_ROUTE = `${AUTH_ROUTE}/verify-account`
export const LOGOUT_ROUTE = `${AUTH_ROUTE}/logout`
export const VERIFICATION_OTP_ROUTE = `${AUTH_ROUTE}/send-verification-otp`
export const RESET_PASSWORD_ROUTE = `${AUTH_ROUTE}/reset-password`
export const RESET_OTP_ROUTE = `${AUTH_ROUTE}/send-reset-password-otp`
export const CREATE_PROFILE_ROUTE = `${AUTH_ROUTE}/create-profile`
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTE}/update-profile`
export const CHECK_AUTH_ROUTE = `${AUTH_ROUTE}/check-auth`


export const CONTACT_ROUTE = "/api/contacts"
export const SEARCH_CONTACTS_ROUTE = `${CONTACT_ROUTE}/search`

export const GET_ALL_MESSAGES_ROUTE = "/api/messages/get-all-messages"