chrome.extension.sendRequest({}, function(receive) {
  // リンクタブを表示する
  $("li[label='LinkPost'] a").click();

  $("#url").val(receive.url);
  $("#urlName").val(receive.title);
  $("#publishersharebutton").removeAttr("disabled");

  $("#publishereditablearea").focus();
});

