// vk_adblock.js
let body = $response.body;
let obj = JSON.parse(body);

// 移除广告对象
if (obj.response && obj.response.items) {
    obj.response.items = obj.response.items.filter(item => !item.ad);
}

body = JSON.stringify(obj);
$done({ body });
