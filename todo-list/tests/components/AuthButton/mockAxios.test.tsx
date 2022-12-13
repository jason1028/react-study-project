import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
// 注意：这里要写成 * as userUtils！！！
import * as userUtils from "@/apis/user";
import AuthButton from "@/components/AuthButton";
import { AxiosResponse } from "axios";
import server from "../../mockServer/server";
import { rest } from "msw";

// 模拟axios get函数
describe("AuthButton Mock Axios", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: "user" },
    });

    render(<AuthButton>你好</AuthButton>);
    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以正确展示管理员按钮内容", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: "admin" },
    });

    render(<AuthButton>你好</AuthButton>);
    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});

// 模拟具体的API返回
describe("AuthButton Mock Axios", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: "user" },
    } as AxiosResponse);

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以正确展示管理员按钮内容", async () => {
    jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: "admin" },
    } as AxiosResponse);

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});

// 模拟http请求
// 初始化函数
const setup = (userType: userUtils.UserRoleType) => {
    server.use(
        rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({ userType }));
        })
    );
};

describe("AuthButton Mock Http 请求", () => {
    it("可以正确展示普通用户按钮内容", async () => {
      setup("user");
      render(<AuthButton>你好</AuthButton>);
  
      expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
    });
  
    it("可以正确展示管理员按钮内容", async () => {
      setup("admin");
      render(<AuthButton>你好</AuthButton>);
  
      expect(await screen.findByText("管理员你好")).toBeInTheDocument();
    });
});