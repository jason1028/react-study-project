import { useMemo } from "react";

const Index = (list: number[]) => {
    return useMemo(() => list.map((item: number) => {
        console.log(1);
        // item的平方
        return Math.pow(item, 2);
    }), [list]); 
}

export default Index;