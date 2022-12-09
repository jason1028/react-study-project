// 沉睡多少秒
const sleep = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

export default sleep;