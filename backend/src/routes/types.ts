//Interface defining the structure of the request body for user registration
export interface RegisterRequest {
    Body: {
        username: string;           //Username chosen by the user
        email: string;              //User's email address
        password: string;           //Password set by the user
        confirmPassword: string;    //Confirmation of the password
    };
}

//Interface defining the structure of the reuest body for user login
export interface LoginRequest {
    Body: {
        email: string;              //User's email address for login
        password: string;           //User's password for login
    };
};