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

export const HTTP_STATUS = {
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
  }