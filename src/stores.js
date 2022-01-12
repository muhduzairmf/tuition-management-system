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

export const Students = writable([
    {
        name: 'Eric Wang',
        icNum: '070101-01-1101',
        age: 15,
        phoneNumber: '+11 1234 1234',
        email: 'eric@email.com',
        category: 'Form 1-3',
        pName: 'Danny Wang',
        pPhoneNum: '+11 1233 1233',
        homeAddr: 'California',
        schoolAddr: 'SMK California',
        subjects: 'Mathematics'
    },
    {
        name: 'Tammy Abraham',
        icNum: '071209-13-4299',
        age: 15,
        phoneNumber: '+11 2211 2211',
        email: 'tammy@email.com',
        category: 'Form 1-3',
        pName: 'Paul Abraham',
        pPhoneNum: '+11 2218 2218',
        homeAddr: 'Birmingham',
        schoolAddr: 'SMK Birmingham',
        subjects: 'Mathematics'
    },
    {
        name: 'Akram Mahinan',
        icNum: '070805-10-8787',
        age: 15,
        phoneNumber: '+11 4343 4343',
        email: 'akram@email.com',
        category: 'Form 1-3',
        pName: 'Mahinan Mohamad',
        pPhoneNum: '+11 4344 4344',
        homeAddr: 'Seremban',
        schoolAddr: 'SMK Seremban',
        subjects: 'Mathematics'
    },
    {
        name: 'Alice Wonderland',
        icNum: '081030-07-5466',
        age: 14,
        phoneNumber: '+11 9870 9870',
        email: 'alice@email.com',
        category: 'Form 1-3',
        pName: 'Ted Wonderland',
        pPhoneNum: '+11 9876 9876',
        homeAddr: 'Ottawa',
        schoolAddr: 'SMK Ottawa',
        subjects: 'Mathematics'
    },
    {
        name: 'Nurul Saliha',
        icNum: '090405-09-2168',
        age: 13,
        phoneNumber: '+11 4521 4521',
        email: 'nurul@email.com',
        category: 'Form 1-3',
        pName: 'Ahmad Hamdan',
        pPhoneNum: '+11 4526 4526',
        homeAddr: 'Kota Kinabalu',
        schoolAddr: 'SMK Kota Kinabalu',
        subjects: 'Mathematics'
    },
    {
        name: 'Aisya Nazihah',
        icNum: '090227-04-1056',
        age: 13,
        phoneNumber: '+11 0921 0921',
        email: 'aisya@email.com',
        category: 'Form 1-3',
        pName: 'Kalamullah',
        pPhoneNum: '+11 0924 0924',
        homeAddr: 'Kangar',
        schoolAddr: 'SMK Kangar',
        subjects: 'Mathematics'
    },
    {
        name: 'Nazir Lazim',
        icNum: '070331-06-2207',
        age: 15,
        phoneNumber: '+11 2009 2009',
        email: 'nazir@email.com',
        category: 'Form 1-3',
        pName: 'Abdul Jalal',
        pPhoneNum: '+11 2001 2001',
        homeAddr: 'Kemaman',
        schoolAddr: 'SMK Kemaman',
        subjects: 'Mathematics'
    },
    {
        name: 'Wang Han',
        icNum: '090122-10-1012',
        age: 13,
        phoneNumber: '+11 2788 2788',
        email: 'wang@email.com',
        category: 'Form 1-3',
        pName: 'Zhang Han',
        pPhoneNum: '+11 2787 2787',
        homeAddr: 'Shanghai',
        schoolAddr: 'SMK Shanghai',
        subjects: 'Mathematics'
    },
    {
        name: 'Prakesh Raj',
        icNum: '080902-14-2291',
        age: 14,
        phoneNumber: '+11 3332 3332',
        email: 'prakesh@email.com',
        category: 'Form 1-3',
        pName: 'Kumaahran',
        pPhoneNum: '+11 3337 3337',
        homeAddr: 'Shah Alam',
        schoolAddr: 'SMK Shah Alam',
        subjects: 'Mathematics'
    }
])
