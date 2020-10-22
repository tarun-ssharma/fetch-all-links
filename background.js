function start(tab){
	chrome.windows.getCurrent({'populate':true},getTabs);
}

function getTabs(window){
	var num_tabs = window.tabs.length;
	tabs_json = {};
	for(var i=0;i<num_tabs;i++){
		tabs_json[window.tabs[i].title] = window.tabs[i].url;
	}
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = JSON.stringify(tabs_json);
    document.getElementsByTagName('body')[0].appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

chrome.browserAction.onClicked.addListener(start);
