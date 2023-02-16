// // Regex-pattern to check URLs against.
// // It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// // A function to use as callback
// function doStuffWithDom(domContent) {
//   console.log("I received the following DOM content:\n" + domContent);
// }

// // When the browser-action button is clicked...
// chrome.browserAction.onClicked.addListener(function (tab) {
//   // ...check the URL of the active tab against our pattern and...
//   if (urlRegex.test(tab.url)) {
//     // ...if it matches, send a message specifying a callback too
//     chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
//   }
// });

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// chrome.runtime.onClick.addListener(async () => {
//   console.log("hello world");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("event listener worked");
// });

console.log("testing outside");
