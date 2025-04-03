export const host = import.meta.env.MODE === "develoment" ? 'http://localhost:5000' : '/'

export const registerHost = `${host}/api/auth/register`;
export const loginHost = `${host}/api/auth/login`;
export const getUsers = `${host}/api/auth/users`;
