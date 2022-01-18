export function useAuth() {
    return localStorage.getItem("loggedIn");
}

export const users = JSON.parse(window.localStorage.getItem("users"));

export function loggedInUser(){
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    return data;
}

export function createNewUser(newUser){
    const oldUsers = JSON.parse(window.localStorage.getItem("users")) ?? [];
    oldUsers.push(newUser);
    window.localStorage.setItem("users", JSON.stringify(oldUsers));
    return true;
}

export function checkUser(user){
    const foundUser = users?.find(item => (item.username === user.username && item.password === user.password));
    
    if(!foundUser){
        return {
            status: false,
            message: "Invalid details provided. Please register."
        };
    }

    window.localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.localStorage.setItem("loggedIn", true);
    return {status: true};
}