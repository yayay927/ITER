chrome.runtime.onInstalled.addListener(function (event) {
    if (event && event.reason === 'install') {
        chrome.tabs.create({url: "https://talk-talk.me?mode=chrome-ext-installed"});
    }
});

chrome.runtime.setUninstallURL("https://talk-talk.me/contact?mode=chrome-ext-uninstalled");