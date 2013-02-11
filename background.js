(function () {
  var pageInfo = {
    "title": "",
    "url": "",
    "summary": ""
  };

  function getPageInfo() {
    chrome.tabs.executeScript(null, { file: "content_script.js" });
  };

  function getMessages(request, sender, callback) {

    if(request.title){
      // content_script.jsからであれば、現在開いているページの値を格納する
      pageInfo = request;
      }else{
      //script.jsからでれば、呼び出し元（script.js）に対して現在開いているページのデータを返却する
      callback(pageInfo);
    }
  }

  //ブラウザ読み込み時にアドレスバーにアイコンを表示させる
  chrome.tabs.onUpdated.addListener(function(tabid, inf){
    if (inf.status === 'complete') {
      chrome.pageAction.show(tabid);
    }
  });

  //アドレスバーのアイコンをクリックした際のイベント
  chrome.pageAction.onClicked.addListener(function(tab) {
    getPageInfo();
    chrome.tabs.create({url : "https://ap.salesforce.com/home/home.jsp", index: tab.index + 1});
  });

  //contentScriptからのリクエストを待機する
  chrome.extension.onRequest.addListener(getMessages);
})();
