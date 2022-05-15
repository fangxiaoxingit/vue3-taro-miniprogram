let key = {};
let NODE_ENV = process.env.NODE_ENV;

switch (NODE_ENV) {
    case 'development':
        key = {
            ossKey: '345623746527346952', //自定义环境变量
        };
        break;
    case 'production':
        key = {
            ossKey: '345623746527346953', //自定义环境变量
        };
        break;
    default:
        key = {
            ossKey: '345623746527346953', //自定义环境变量
        };
        break;
}

export default key;