import http from "../request"

//登录
export function loginuser(user){
    return http.post("/sysUser/login" ,user)
}

//退出登录  
export function logoutuser(){
    return http.delete("/sysUser/logout")
}

//注册
export function register(param){
    return http.post("/sysUser/register",param)
}

