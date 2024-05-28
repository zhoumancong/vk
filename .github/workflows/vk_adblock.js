// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 检查和过滤广告对象
if (obj.response && obj.response.items) {
    obj.response.items = obj.response.items.filter(item => {
        return !item.hasOwnProperty('ERID');
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
