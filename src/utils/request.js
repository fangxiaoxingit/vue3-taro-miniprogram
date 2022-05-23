import Taro from '@tarojs/taro'
import { hideLoading, showLoading,toast } from './tools'
import HTTP_STATUS from './key'

const token = ''
export default {
    baseOptions(params, method = 'GET') {
        let { url, data } = params
        let contentType = 'application/x-www-form-urlencoded'
        contentType = params.contentType || contentType
        const option = {
            isShowLoading: true,
            url: base + url,
            data: data,
            method: method,
            header: { 'content-type': contentType, 'token': token }, // 默认contentType ,预留token
            success(res) {

            },
            error(e) {
                toast('api', '请求接口出现问题', e)
            }
        }
        return Taro.request(option)
    },
    // get(url, data) {
    //     let option = { url, data }
    //     return this.baseOptions(option)
    // },
    // post(url, data) {
    //     let params = { url, data }
    //     return this.baseOptions(params, 'POST')
    // }
}

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

export function post(url, data) {
    console.log(url, data)
    return new Promise((resolve, reject) => {
        showLoading()
        console.log('getOptions()', getOptions({ url: url, data: data }))
        Taro.request({
            ...getOptions({ url: url, data: data }),
            success(res) {
                console.log('success', res)
                successRequest(res)
                resolve(res)
            },
            fail(e) {
                console.log('请求接口出现问题', e)
                reject(e)
                hideLoading()
            },
            complete() {
                hideLoading()
            }
        })
    }
    )
}