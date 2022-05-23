import Taro from '@tarojs/taro'
import { hideLoading, showLoading, toast } from './tools'
import HTTP_STATUS from './key'

const token = ''

function getOptions(options) {
    let baseOptions = {
        url: '',
        data: {},
        method: 'GET',
        header: { 'content-type': 'application/x-www-form-urlencoded', 'token': token }, // 默认contentType ,预留token
    }
    return Object.assign(baseOptions, options);
}

function successRequest(res) {
    //对于一些请求状态处理
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return toast('api', '请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return toast('api', '服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        return toast('api', '没有权限访问')
    } else {
        return res;
    }
}

//post 封装
export function post(url, data, loading = true) {
    console.log(url, data)
    return new Promise((resolve, reject) => {
        if (loading) {
            showLoading()
        }
        console.log('getOptions()', getOptions({ url: url, data: data }))
        Taro.request({
            ...getOptions({ url: url, data: data }),
            success(res) {
                successRequest(res)
                resolve(res)
            },
            fail(e) {
                console.log('请求接口出现问题', e)
                reject(e)
            },
            complete() {
                hideLoading()
            }
        })
    }
    )
}
//get 封装
export function get(url, data, loading = true) {
    console.log(url, data)
    return new Promise((resolve, reject) => {
        if (loading) {
            showLoading()
        }
        Taro.request({
            ...getOptions({ url: url, data: data, method: 'GET' }),
            success(res) {
                successRequest(res)
                resolve(res)
            },
            fail(e) {
                console.log('请求接口出现问题', e)
                reject(e)
            },
            complete() {
                hideLoading()
            }
        })
    }
    )
}