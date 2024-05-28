// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 确保正确处理响应结构并移除广告
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
