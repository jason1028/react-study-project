import getSearchObj from "@/utils/getSearchObj";

describe("getSearchObj测试", () => {
    it("获取当前网址的参数对象", () => {
        window.location.href = "https://www.qq.com?a=11&b=22";
        
        expect(window.location.search).toEqual("?a=11&b=22");
        expect(getSearchObj()).toEqual({
            a: "11",
            b: "22"
        });
    });

    it("空参数返回空", () => {
        window.location.href = "https://www.qq.com";

        expect(window.location.search).toEqual("");
        expect(getSearchObj()).toEqual({});
    });
});

