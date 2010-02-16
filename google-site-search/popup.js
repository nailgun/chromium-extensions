var form = document.getElementsByTagName('form')[0];
var q = form.elements[0];
var input = form.elements[1];
var host;

input.focus();

chrome.tabs.getSelected(undefined, function(tab) {
	host = tab.url.split(/\/+/g)[1];
});

form.onsubmit = function() {
	q.value = 'site:' + host + ' ' + input.value;
	window.close();
}
