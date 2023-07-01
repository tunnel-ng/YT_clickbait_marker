// Background script

// Listen for the click event on the browser action button
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the content script to perform the action
  chrome.tabs.sendMessage(tab.id, { action: "markClickbait" }, function(response) {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    }
  });
});
