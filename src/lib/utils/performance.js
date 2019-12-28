let times = {};
let t = window.performance.timing;

// 优先使用navigation v2
if(typeof window.PerformanceNavigationTiming === 'function'){
    try {
        let nt2Timing = performance.getEntriesByType('navigation')[0];
        if(nt2Timing){
            t = nt2Timing;
        }
    } catch(err){
        // console.log(err);
    }
}

// 重定向时间
times.redirectTime = t.redirectEnd - t.redirectStart;

// dns查询耗时
times.dnsTime = t.domainLookupEnd - t.domainLookupStart;

// TTFB 读取页面第一个字节的时间
times.ttfbTime = t.responseStart - t.navigationStart;

// DNS 缓存时间
times.appcacheTime = t.unloadEventEnd - t.unloadEventStart;

// 卸载页面的时间
times.unloadTime = t.unloadEventEnd - t.unloadEventStart;

// tcp链接耗时
times.tcpTime = t.connectEnd - t.connectStart;

// request请求耗时
times.reqTime = t.responseEnd - t.responseStart;

// 解析dom数耗时
times.ananlysisTime = t.domComplete - t.domInteractive;

// 白屏时间
times.blankTime = (t.domInteractive || t.domLoading) - t.fetchStart;

// domReadyTime
times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart;

export default times;