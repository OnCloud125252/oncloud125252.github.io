(()=>{var o={fallback:"https://blog.on-cloud.tw/",homes:{en:"https://blog.on-cloud.tw/","zh-hans":"https://blog.on-cloud.tw/zh-hans/"}};(()=>{let n=navigator.language||navigator.userLanguage;if(n in o.homes){window.location.href=o.homes[n];return}let t=n.split("-");for(let a in o.homes)if(a.indexOf(t[0])===0){window.location.href=o.homes[a];return}window.location.href=o.fallback})();})();