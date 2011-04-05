var pageInfo = {
    "title": document.title,
    "url": window.location.href
};

//backgound.htmlにリクエストを送信する
chrome.extension.sendRequest(pageInfo);
