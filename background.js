chrome.commands.onCommand.addListener((command) => {
  if (command === "open_url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        let currentUrl = tabs[0].url;
        chrome.storage.local.set({ previousUrl: currentUrl }, () => {
          chrome.tabs.update(tabs[0].id, { url: "https://translate.google.com/?sl=auto&tl=ko&op=translate" });
        });
      }
    });
  } else if (command === "restore_url") {
    chrome.storage.local.get("previousUrl", (data) => {
      if (data.previousUrl) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { url: data.previousUrl });
          }
        });
      }
    });
  }
});
