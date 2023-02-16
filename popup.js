function changeBackgroundColor() {
  console.log("here!!");
}

function findOrCreateContent() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: changeBackgroundColor,
    });
  });
}

async function getDOM() {
  let dom = await chrome.dom
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("event listener worked");
  console.log(
    "hello",
    getCurrentTab().then((tabs) => {
      console.log(tabs);
      let activeTab = tabs[0];
      console.log(activeTab)
    //   let activeTabId = activeTab.id;

    //   return chrome.scripting.executeScript({
    //     target: { tabId: activeTabId },
    //     func: DOMtoString,
      });
    })
  );
});

changeBackgroundColor();
findOrCreateContent();

console.log("asdf");
