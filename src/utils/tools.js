import Taro from '@tarojs/taro'

// 震动效果，有效值为：heavy、medium、light
export function shake(value = 'light') {
    Taro.vibrateShort({
        type: value,
    })
}

export function showLoading(){
    Taro.showLoading({
        title: '加载中',
        mask: true,
    })
}
export function hideLoading(){
    Taro.hideLoading()
}