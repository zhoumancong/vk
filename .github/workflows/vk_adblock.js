// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 检查和过滤广告对象
if (obj.response && obj.response.items) {
    obj.response.items = obj.response.items.filter(item => {
        // 过滤带有 ad 标识的广告内容
        if (item.ad) {
            return false;
        }
        
        // 过滤带有 ERID 的广告内容
        if (item.ERID) {
            return false;
        }
        
        return true;
    });
}

// 移除广告模块
if (obj.response) {
    delete obj.response.ads;
    delete obj.response.ad;
    delete obj.response.ad_data;
}

body = JSON.stringify(obj);
$done({ body });
