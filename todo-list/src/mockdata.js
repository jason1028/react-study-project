import mockjs from "mockjs";

mockjs.mock('/api/list.json', {
    ret: 0,
    data: [
        "aaa",
        "bbb",
        "ccc"
    ],
    msg: ''
});