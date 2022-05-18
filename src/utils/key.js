let key = {};
let NODE_ENV = process.env.NODE_ENV;

switch (NODE_ENV) {
    case 'development':
        key = {
            ossKey: '345623746527346952', //自定义环境变量
            base: 'http://www.baidu.com', //url
        };
        break;
    case 'production':
        key = {
            ossKey: '345623746527346953', //自定义环境变量
            base: 'http://www.google.com', //url
        };
        break;
    default:
        key = {
            ossKey: '345623746527346954', //自定义环境变量
            base: 'http://www.baidu.com', //url
        };
        break;
}

export default key;