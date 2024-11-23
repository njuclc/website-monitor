function ApiUrls() { }

ApiUrls.prototype.data = function () {
	return {
		layout: false,
		permalink: function (data) {
			return `/api/urls.json`;
		}
	};
}

ApiUrls.prototype.render = function (data) {
	let resultData = {};
	for (let urlData of data.urlsForApi) {
		resultData[urlData.requestedUrl] = urlData;
	}
	return JSON.stringify(resultData, null, 2);
}

module.exports = ApiUrls;