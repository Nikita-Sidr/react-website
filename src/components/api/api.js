import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cea7f6ff-70aa-4b30-a0c8-20df7c74e567"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }

}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})

    },
    savePhoto(photoFile){
        const formData = new FormData()
        FormData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
        headers:{
            'Content-Type' : 'multipart/form-data'
        }
        })
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password){
        return instance.post(`auth/login`, {email, password})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}
