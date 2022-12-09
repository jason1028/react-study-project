/**
 * @author jasonemchen
 * @desc 组件快照测试
*/
import React from "react";
import { render } from "@testing-library/react";
import Title from "@/components/Title";

describe("Title test", () => {
    it("渲染大字体", () => {
        // baseElement为渲染内容
        const { baseElement } = render(<Title type="large" title="big font"/>);
        // 渲染出来建立大字体快照
        expect(baseElement).toMatchSnapshot();
    });

    it("渲染小字体", () => {
        // baseElement为渲染内容
        const { baseElement } = render(<Title type="small" title="small font"/>);
        // 渲染出来建立小字体快照
        expect(baseElement).toMatchSnapshot();
    });
});

