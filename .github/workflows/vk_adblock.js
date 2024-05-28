// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 移除广告对象
if (obj.response && obj.response.items) {
    obj.response.items = obj.response.items.filter(item => !item.hasOwnProperty('ad_data') && !item.ad);
}

// 移除广告模块
if (obj.response && obj.response.ads) {
    delete obj.response.ads;
}

body = JSON.stringify(obj);
$done({ body });
