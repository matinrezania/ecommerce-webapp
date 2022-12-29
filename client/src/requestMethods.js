import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Y1MGFlYTU4YzE1Y2FlYjczMTU5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjMwNzE2MywiZXhwIjoxNjc0MTIxNTYzfQ.64A3vFD68-3hKrE9wW4Nj6abkVBpdFBHbCZP_OgFiqI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
