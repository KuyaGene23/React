import axios from "axios";
import * as helper from "../services/serviceHelper"


const serviceFriends = {
     endpoint: "https://localhost:50001/api/friend"
}

const addFriend = (payload) => {
    const config = {
        method: "POST",
        url: serviceFriends.endpoint,
        data: payload,
        withCredentials: true,
        headers: {"Content-Type": "application/json"},    
    };
    return axios(config)
}

const editFriend = (id, payload) => {
    const config = {
        method: "PUT",
        url:serviceFriends.endpoint,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
    }
    return axios(config).then(() => {
        return id
    })
}

const getFriends = (pageIndex, pageSize) => {
    const config = {
        method: "GET",
        url: serviceFriends.endpoint + `/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
    };
    return axios(config).then(helper.onGlobalSuccess)
};

// const getFriends1 = () => {
//     const config = {
//         method: "GET",
//         url: serviceFriends.endpoint + `paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
//         withCredentials: true,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json"},
//     };
//     return axios(config).then(helper.onGlobalSuccess)
// };

const deleteFriends = (id) => {
    const config = {
        method: "DELETE",
        url: `${serviceFriends.endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
        
    }
    return axios(config).then(() => {
        return id
    })
}


const peopleServices = { getFriends, deleteFriends, addFriend, editFriend }

export default peopleServices;