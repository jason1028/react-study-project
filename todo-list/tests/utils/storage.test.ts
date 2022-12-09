import storage from '@/utils/storage';

describe('storage test', () => {
    it('缓存值：', () => {
        storage.set('name', 'jason');
        expect(localStorage.getItem('jest-test-name')).toEqual('jason');
    });

    it('获取值:', () => {
        localStorage.setItem('jest-test-name', 'abc');
        expect(storage.get('name')).toEqual('abc');
    })
})