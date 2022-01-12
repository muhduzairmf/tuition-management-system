import { writable } from "svelte/store";

export const Users = writable([
    {
        email: "manager@email.com",
        password: "manager01",
        role: "manager"
    },
    {
        email: "clerk@email.com",
        password: "clerk01",
        role: "clerk"
    },
    {
        email: "teacher@email.com",
        password: "teacher01",
        role: "teacher"
    }
])

export const msgErr = writable({ displayErr: false })
