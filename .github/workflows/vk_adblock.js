// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 日志记录
console.log(JSON.stringify(obj));

// 移除广告对象
if (obj.response && obj.response.items) {
    obj.response.items = obj.response.items.filter(item => !item.ad && !item.ad_data);
}

// 删除可能的广告字段
if (obj.response) {
    delete obj.response.ads;
    delete obj.response.ad;
    delete obj.response.ad_data;
}

body = JSON.stringify(obj);
$done({ body });
