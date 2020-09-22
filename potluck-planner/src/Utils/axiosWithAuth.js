import axios from "axios"

const baseUrl = '';
const jwtStorageName = 'authToken';

/*
    method that gets the token from local storage
*/
const getJwt = () => {
    return localStorage.getItem(jwtStorageName);
}


/*
    method that stores the token in local storage
*/
const storeJwt = (jwt) => {
    localStorage.setItem(jwtStorageName);
}

/*
    method to get axios instance with or without auth header
*/
const getAxiosInstance = (withHeaders = false) => {
    if (withHeaders) {
        return axios.create({
            baseURL: baseUrl,
            headers: {
                token: getJwt()
            }
        });
    }
    return axios.create({
        baseURL: baseUrl
    });

};

/*
    login axios method that requires name and password as params, should provide a token.
*/
export const login = (name, password) => {

    console.log({ name, password });

    let axiosInstance = getAxiosInstance();
    axiosInstance.post('login', {
        name: name,
        password: password
    })

        .then(function (res) {
            console.log(res);
            storeJwt(res.data.token); //this might not need 'token' if only a string jwt is returned


        })
        .catch(function (error) {
            console.log(error);
            //add code to handle error 
            //do you need to display the error or just log it?
        });

    //any console logging
};



/*
    method that registers a new potluck with the parameters listed below, and stores it within the server.
*/
export const register = (name, location, password) => {

    console.log({ name, password });

    let axiosInstance = getAxiosInstance();
    axiosInstance.post(`${baseUrl}/register`, {
        name: name,
        location: location,
        password: password
    })
        .then(function (response) {
            console.log(response);
            //add profile to local storage from response

        })
        .catch(function (error) {
            console.log(error);
            //add code to handle error 
            //do you need to display the error or just log it?
        });

    //any console logging?
}

/*
    this method is going to retrieve a list of potlucks that exist within the server
    */
export const getPotlucks = () => {

    let axiosInstance = getAxiosInstance(true);
    //requires jwt
}

/*
this method is going to make it so that you can delete a potluck using it's specific id
*/
export const deletePotluck = (potluckId) => {
    console.log({ potluckId });

    let axiosInstance = getAxiosInstance(true);

};

/*
this method will get a list of guests that exist within the server, and display them
*/
export const getGuests = (potluckId) => {

    console.log({ potluckId });

    let axiosInstance = getAxiosInstance(true); //gets instance with auth header

};

/*
this method will allow you to create a guest, then that guest will be stored within the specific potluck by using it's ID.
*/
export const createGuest = (potluckId, name, email, item) => {

    console.log({ potluckId, name, email, item });

    let axiosInstance = getAxiosInstance(true); //gets instance with auth header

};

/*
this method will allow you to delete a guest from a specific potluck using the guest ID
*/
export const deleteGuest = (guestId) => {

    console.log({ guestId });


    let axiosInstance = getAxiosInstance(true); //gets instance with auth header

};




