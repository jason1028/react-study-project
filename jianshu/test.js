/**
 *  1.用ES6编写一个函数，将输入数组[1,[2,[3,4]]]扁平化转化后输出结果为：[1,2,3,4]
    2.编写一个前端防抖动的函数，两个正常点击间隔不得小于2500毫秒，函数模板如下：
    const debounce = (fn, delay) => callbackFunction

    3.编写一个函数获取URL上的参数，
    如： https://www.crland.cn/a?name=jacky&age=20#tagc 
    返回结果： {name: ‘jacky’, age: 20}
    4.Typescript提供了常用类型来促进常用类型转换，请写出Partial<Type>类型的TS定义
 * 
*/

function f1(arr) {
    var str = arr.toString();
    return str.split();
}


function debounce(fn, delay) {
    var isStop = false;
    var st = null;
    return function() {
        if(isStop) {
            clearTimeout(st);
        }
        st = setTimeout(function() {
            isStop = true;
            fn();
        }, delay);
    }
}

function getUrlParams(urlStr) {
    var result = {};
    if(/^(http|https):\/\/[a-z]{0, 3}.{0, 1}[a-z0-9]+.[a-z0-9]/.test(urlStr)) {
        var searchList1 = urlStr.split('&');
        searchList1.map((item) => {
            var items = item.split('=');
            result[items[0]] = items[1];
        });
    }
    return result;
}