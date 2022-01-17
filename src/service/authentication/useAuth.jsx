export function useAuth() {
    return localStorage.getItem("loggedIn");
}

export const getUserData = JSON.parse(window.localStorage.getItem("userData"));

export const header = {
    headers: {
        'Authorization': `Bearer ${getUserData?.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}