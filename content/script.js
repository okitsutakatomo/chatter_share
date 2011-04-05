chrome.extension.sendRequest({}, function(receive) {
  var text = receive.title + " " + receive.url;
  $("#publishereditablearea").val(text);
  $("#publishereditablearea").focus();
  $("#publishereditablearea").css("height", "40px");
});

