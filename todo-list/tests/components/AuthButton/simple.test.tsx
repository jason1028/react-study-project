import { render, screen } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";
import React from "react";

describe('AuthButton', () => {
    it('可以正常显示', () => {
        render(<AuthButton>登录</AuthButton>);
        expect(screen.getByText('登录')).toBeDefined();
    });

    it('可以在Document正常显示', () => {
        render(<AuthButton>登录</AuthButton>);
        
        expect(screen.getByText('登录')).toBeInTheDocument();
    });
})