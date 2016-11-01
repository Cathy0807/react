
;(function () {
    /**
     * JSONP操作
     * @param url : 请求的url
     * @param data : 发送数据
     * @param jsonpcallback : 服务器给出的JSONP端口的API名称
     * @param callback : 执行JSONP获取数据的回调函数
     */
    var jsonp = function (url, data, jsonpcallback, callback) {
        var cbName = 'cb' + jsonp.count++;
        var callbackName = 'window.jsonp.' + cbName;
        window.jsonp[cbName] = function (jsonpData) {
            try {
                callback(jsonpData);
            } finally {
                script.parentNode.removeChild(script);
                delete window.jsonp[cbName];
            }
        };
        var script = document.createElement('script');
        if (data) {
            data = tool.encodeToURIString(data);
        }
        if (typeof jsonpcallback === 'string') {
            var jsonpData = jsonpcallback + '=' + callbackName;
        }
        url = tool.hasSearch(url, data);
        url = tool.hasSearch(url, jsonpData);
        script.src = url;
        document.body.appendChild(script);
    };
    jsonp.count = 0;
    window.jsonp = jsonp;
    var tool = {
        encodeToURIString: function (data) {
            if (!data) return '';
            if (typeof data === 'string') return data;
            var arr = [];
            for (var n in data) {
                if (!data.hasOwnProperty(n)) continue;
                arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
            }
            return arr.join('&');
        },
        hasSearch: function (url, padString) {
            if (!padString) return url;
            if (typeof padString !== 'string') return url;
            return url + (/\?/.test(url) ? '&' : '?') + padString;
        }
    }
})();

module.exports = jsonp;
