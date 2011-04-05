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

