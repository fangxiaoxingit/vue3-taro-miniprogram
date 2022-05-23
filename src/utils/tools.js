import Taro from '@tarojs/taro'

// 震动效果，有效值为：heavy、medium、light
export function shake(value = 'light') {
    Taro.vibrateShort({
        type: value,
    })
}
//显示 loading
export function showLoading() {
    Taro.showLoading({
        title: '加载中',
        mask: true,
    })
}
//隐藏 loading
export function hideLoading() {
    Taro.hideLoading()
}
//显示 toast
export function toast(value) {
    Taro.showToast({
        title: value,
        duration: 2000
    })
}
