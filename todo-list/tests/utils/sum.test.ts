import sum  from '@/utils/sum';

describe('sum', () => {
    it('加法测试', () => {
        expect(sum(3, 1)).toEqual(4);
    })
});