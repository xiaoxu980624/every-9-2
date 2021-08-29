import service from './service'
import require from './require'
//定义请求方法，然后导出
//获取验证码
export function smsCode(arg){
    return service({
        url:require.smsCode,
        data:arg,
        method:'post'
    })
}
export function login(){
    return service({
        url:require.login,
        data:{},
        method:'post'
    })
}
export function bottom(){
    return service({
        url:require.bottom,
        data:{},
        method:'get'
    })
}
export function teacher(){
    return service({
        url:require.teacher,
        data:{},
        method:'get'
    })
}