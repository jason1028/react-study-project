import test from '@/demo/index';

const sum = (a:number, b:number) => {
    console.log('结果：', test(a, b));
    return a + b;
}

export default sum;