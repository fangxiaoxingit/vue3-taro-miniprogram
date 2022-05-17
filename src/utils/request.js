import Taro from '@tarojs/taro'
import { hideLoading, showLoading } from './tools'
//拦截器
const interceptor = function (chain) {
    const requestParams = chain.requestParams
    console.log('requestParams', requestParams)
    const { method, data, url } = requestParams

    console.log(`http ${method || 'GET'} --> ${url} data: `, data)
    showLoading()

    return chain.proceed(requestParams)
        .then(res => {
            console.log(`http <-- ${url} result:`, res)
            hideLoading()
            return res
        })
}

Taro.addInterceptor(interceptor)
// Taro.request({ url })


//post 请求
export function post(url, data) {
    return new Promise((resolve, reject) => {
        Taro.request({
            method: 'POST',
            url: url,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                hideLoading()
                console.log(err)
                reject(err)
            }
        })
    })
}
//get 请求
export function get(url, data) {
    return new Promise((resolve, reject) => {
        Taro.request({
            method: 'GET',
            url: url,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                hideLoading()
                console.log(err)
                reject(err)
            }
        })
    })
}