// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    //testSource: {
    //    api: 'https://www.example.com/api.php/provide/vod',
    //    name: '空内容测试源',
    //    adult: true
    //}
    //ARCHIVE https://telegra.ph/APIs-08-12
source_1: {
    api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪资源',
    detail: 'http://api.xinlangapi.com',
},
source_2: {
    api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪资源',
    detail: 'http://api.xinlangapi.com',
},
source_3: {
    api: 'https://ckzy.me/api.php/provide/vod/',
    name: 'CK资源',
    detail: 'https://ckzy.me',
},
source_4: {
    api: 'https://ckzy.me/api.php/provide/vod/',
    name: 'CK资源',
    detail: 'https://ckzy.me',
},
source_5: {
    api: 'https://p2100.net/api.php/provide/vod/',
    name: '飘零影院',
    detail: 'https://p2100.net',
},
source_6: {
    api: 'http://jinyingzy.com/provide/vod',
    name: '金鹰资源',
    detail: 'http://jinyingzy.com',
},
source_7: {
    api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪资源',
    detail: 'http://api.xinlangapi.com',
},
source_8: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度资源',
    detail: 'https://api.apibdzy.com',
},
source_9: {
    api: 'https://subocaiji.com/api.php/provide/vod/',
    name: '速博资源',
    detail: 'https://subocaiji.com',
},
source_10: {
    api: 'http://cj.baozi66.top:66/api.php/provide/vod/',
    name: '雨哥哥影视',
    detail: 'http://cj.baozi66.top:66',
},
source_11: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷资源',
    detail: 'https://api.ukuapi.com',
},
source_12: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷资源',
    detail: 'https://api.ukuapi.com',
},
source_13: {
    api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
    name: '非凡资源',
    detail: 'http://cj.ffzyapi.com',
},
source_14: {
    api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8/',
    name: '金鹰资源',
    detail: 'https://jyzyapi.com',
},
source_15: {
    api: 'http://fhapi9.com/api.php/provide/vod/',
    name: '番号资源',
    detail: 'http://fhapi9.com',
},
source_16: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/',
    name: '光速资源',
    detail: 'https://api.guangsuapi.com',
},
source_17: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/',
    name: '紅牛资源',
    detail: 'https://www.hongniuzy2.com',
},
source_18: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷资源',
    detail: 'https://api.ukuapi.com',
},
source_19: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/',
    name: '光速资源',
    detail: 'https://api.guangsuapi.com',
},
source_20: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
    name: '红牛资源',
    detail: 'https://www.hongniuzy2.com',
},
source_21: {
    api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
    name: '卧龙资源',
    detail: 'https://collect.wolongzyw.com',
},
source_22: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度资源',
    detail: 'https://api.apibdzy.com',
},
source_23: {
    api: 'https://collect.wolongzyw.com/api.php/provide/vod/ ',
    name: '卧龙资源',
    detail: 'https://collect.wolongzyw.com',
},
source_24: {
    api: 'https://ikunzyapi.com/api.php/provide/vod/',
    name: '爱坤资源',
    detail: 'https://ikunzyapi.com',
},
source_25: {
    api: 'https://lovedan.net/api.php/provide/vod/',
    name: '艾旦影视',
    detail: 'https://lovedan.net',
},
source_26: {
    api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪资源',
    detail: 'http://api.xinlangapi.com',
},
source_27: {
    api: 'http://fhapi9.com/api.php/provide/vod/',
    name: '番号资源',
    detail: 'http://fhapi9.com',
},
source_28: {
    api: 'https://api.wujinapi.net/api.php/provide/vod/',
    name: '无尽资源',
    detail: 'https://api.wujinapi.net',
},
source_29: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度云',
    detail: 'https://api.apibdzy.com',
},
source_30: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/',
    name: '光速云',
    detail: 'https://api.guangsuapi.com',
},
source_31: {
    api: 'http://jinyingzy.com/provide/vod/',
    name: 'jinyingzy金鹰',
    detail: 'http://jinyingzy.com',
},
source_32: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/',
    name: '红牛云',
    detail: 'https://www.hongniuzy2.com',
},
source_33: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度资源',
    detail: 'https://api.apibdzy.com',
},
source_34: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/',
    name: '光速资源',
    detail: 'https://api.guangsuapi.com',
},
source_35: {
    api: 'https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/json/',
    name: 'ikun云',
    detail: 'https://ikunzyapi.com',
},
source_36: {
    api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
    name: '非凡云',
    detail: 'http://cj.ffzyapi.com',
},
source_37: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/',
    name: 'guangsuapi光速资源',
    detail: 'https://api.guangsuapi.com',
},
source_38: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: 'apibdzy百度资源',
    detail: 'https://api.apibdzy.com',
},
source_39: {
    api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: 'xinlangapi新浪资源(切)',
    detail: 'http://api.xinlangapi.com',
},
source_40: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
    name: 'hongniuzy2红牛资源(切)',
    detail: 'https://www.hongniuzy2.com',
},
source_41: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'ukuapiU酷资源',
    detail: 'https://api.ukuapi.com',
},
source_42: {
    api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
    name: 'wolongzyw卧龙资源(切)',
    detail: 'https://collect.wolongzyw.com',
},
source_43: {
    api: 'https://api.wujinapi.cc/api.php/provide/vod/',
    name: 'wujinapi无尽',
    detail: 'https://api.wujinapi.cc',
},
source_44: {
    api: 'https://lovedan.net/api.php/provide/vod/',
    name: 'lovedan艾旦影视',
    detail: 'https://lovedan.net',
},
source_45: {
    api: 'https://api.wujinapi.cc/api.php/provide/vod/',
    name: '无尽',
    detail: 'https://api.wujinapi.cc',
},
source_46: {
    api: 'https://api.wujinapi.com/api.php/provide/vod/',
    name: 'wujinapi无尽资源',
    detail: 'https://api.wujinapi.com',
},
source_47: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
    name: '红牛资源',
    detail: 'https://www.hongniuzy2.com',
},
source_48: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷资源',
    detail: 'https://api.ukuapi.com',
},
source_49: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/',
    name: '光速资源',
    detail: 'https://api.guangsuapi.com',
},
source_50: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度资源',
    detail: 'https://api.apibdzy.com',
},
source_51: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: '如意资源',
    detail: 'https://cj.rycjapi.com',
},
source_52: {
    api: 'https://dbzy.tv/api.php/provide/vod',
    name: '豆瓣资源',
    detail: 'https://dbzy.tv',
},
source_53: {
    api: 'https://bfzyapi.com/api.php/provide/vod',
    name: '暴风资源',
    detail: 'https://bfzyapi.com',
},
source_54: {
    api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    name: '电影天堂资源',
    detail: 'http://caiji.dyttzyapi.com',
},
source_55: {
    api: 'https://jszyapi.com/api.php/provide/vod',
    name: '极速资源',
    detail: 'https://jszyapi.com',
},
source_56: {
    api: 'https://api.apibdzy.com/api.php/provide/vod',
    name: '百度云资源',
    detail: 'https://api.apibdzy.com',
},
source_57: {
    api: 'https://api.wujinapi.me/api.php/provide/vod',
    name: '无尽资源',
    detail: 'https://api.wujinapi.me',
},
source_58: {
    api: 'https://api.zuidapi.com/api.php/provide/vod',
    name: '最大资源',
    detail: 'https://api.zuidapi.com',
},
source_59: {
    api: 'https://360zy.com/api.php/provide/vod',
    name: '360资源',
    detail: 'https://360zy.com',
},
source_60: {
    api: 'https://ikunzyapi.com/api.php/provide/vod',
    name: 'iKun资源',
    detail: 'https://ikunzyapi.com',
},
source_61: {
    api: 'https://mozhuazy.com/api.php/provide/vod',
    name: '魔爪资源',
    detail: 'https://mozhuazy.com',
},
source_62: {
    api: 'https://360zy.com/api.php/provide/vod',
    name: '360资源',
    detail: 'https://360zy.com',
},
source_63: {
    api: 'https://zy.xmm.hk/api.php/provide/vod',
    name: '小猫咪资源',
    detail: 'https://zy.xmm.hk',
},
source_64: {
    api: 'http://ffzy5.tv/api.php/provide/vod',
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
},
source_65: {
    api: 'https://tyyszy.com/api.php/provide/vod',
    name: '天涯资源',
    detail: 'https://tyyszy.com',
},
source_66: {
    api: 'https://wolongzyw.com/api.php/provide/vod',
    name: '卧龙资源',
    detail: 'https://wolongzyw.com',
},
source_67: {
    api: 'https://www.mdzyapi.com/api.php/provide/vod',
    name: '魔都资源',
    detail: 'https://www.mdzyapi.com',
}
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
