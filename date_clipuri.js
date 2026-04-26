// Aici vei adăuga manual videoclipurile.
// La "link" trebuie să pui URL-ul direct către fișierul .mp4

const videosData = [
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://eu-cdn09-prem.boomio-cdn.com/remote_control.php?file=E9s0fjpXO3JcW67T7gqFgtQRKFGOu3uVmQEwrfYE061eG71e3yXFJLouGqhWDQv5zho5oNSQAVtMMzq8gXh5vRxzYxVCSr1xPUhBtMtdDpyUryIla_Toa_vFxFqPw37VX2hVCfRgf8ntrT5q1-olvSfngEouWG0C2dcWOAQn3FKaeKM90zfCkFSwfMagI58LDwYavmFtapZesZoAJF02-m4o9y26EO8.mp4&acctoken=N2QxZTgwZDQwNTZkYmNiYmNkN2JjYjI2Y2EyYTg3YjM1ZWFiMTM5N2UyN2YxNTk1ODBiMTM1MmQ2MTRjMDQ4NXwxNzc3MjM0MDA3fDg1MjAwMHxydWxlMzR2aWRlby5jb218MHx8Y2UwN2Y3MDM3MzM1ZDRhYzYzNzZmNjdjYjZkY2U2ZTk",
        titlu: "Melfi Paizuri [Neoreptil]",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://eu-cdn02-prem.boomio-cdn.com/remote_control.php?file=g6CzbRalJjm1hh2178cbY4vKYh46hsOwQYoUMa-K3TJsjPuaZpjglWM5kU4db4jy7jP5TkffOpxq0N33HNOTP3ZVgXmhlBGOScY0weAOjXCuxi03WHpzwPTCBE3gg8QwMHSh89V2GPzlUO1XBJSJdfUMnDA_mmmwWJpg6BOUd7HGHHXrnRBsc5q4_7yTg2PPi4PfswlrrI4fokt8d0UQPWs7y9Q2MM0.mp4&acctoken=MTBhNzhhNjkzODE0MTQxYWZkMDhhMWRhYzM2NzAxZDM4YjI5M2M3MDhmODg2NGFiNzllMzk4N2VkMjIzOGRkMHwxNzc3MjM0NDIzfDkyMTAwMHxydWxlMzR2aWRlby5jb218MHx8MjFhYjU0ZWViZTg4YTE5ZTk5MGU3NTZlNmI3NTE5MDg",
        titlu: "Rio Paizuri",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://eu-cdn09-prem.boomio-cdn.com/remote_control.php?file=29nwynUKY3fxpUF9Gn_8ubJweVeRfvZ7t0hXpN0R3wX-JuzVTpPzAWN0OqUn4Q6pcmQBHRlg53PQ0l5Oh90cJ10eCRcnL56dgsTce2LE0WIX9rNqzpnKBNP-uM8nzqTnkNrjDk2ghlwN0xwZeN0MRTpC-tdNbZCee6kKsYuypfC5saVBvJdSn6i1PHUs3Qs1ugi57OOkNWkguUG2R3di6OHmSod5SnU.mp4&acctoken=ZTNhY2JhMTc3OWI0MGI3ZTRhZDVlMTBkNjRmM2ExMTA2ZmJmNTU2OGUzMDVlMDc5ZTQzYjViNDUwMGQ4MTIxZnwxNzc3MjM0OTU1fDg5MjUwMHxydWxlMzR2aWRlby5jb218MHx8YjBjZjQ4OTRiODljNTk5NGQ2M2E1MzU0MzMyMjk5Yjc",
        titlu: "Okunoda Miyoi Paizuri [Kuwagatanoomutu]",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/812/fcf1c1d49f8bd3d323f7ee9a0b8dc83a.mp4?15527546",
        titlu: "Nicole Paizuri",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/2334/1ce9c03b8c30ccb7639a9e014cfb2c79.mp4?10138500",
        titlu: "Komi Shuuko Blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/5142/2cbd562392b3b27c0dbc6e648f5bd589.mp4?5860822",
        titlu: "Pichi Blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/4453/8d6e8f44335819de9f60e09ddd3d7d49.mp4?5069031",
        titlu: "Usada Hikaru Blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/3446/13558c2783d8fc1c036432469163e0c4.mp4?17086169",
        titlu: "Mitsuru Kirijo Blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/1974/fcec6cc1279f2bb95473ff5ce732a781.mp4?14191939",
        titlu: "ceres fauna blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/4738/60aabd2951bd0dc08f623ce917b2b1df.mp4?14873193",
        titlu: "nekomiya mana blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "2d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/4829/c84ef7284cb517520adfb4ea6eddf72f.mp4?16268731",
        titlu: "opaluva",
        data: "2026-04-26",
        taguri: ["sex", "cum", "3d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/1056/6514c79e2cb8c38c65774f0ffb0dfec5.mp4?10158368",
        titlu: "Lumine Blowjob",
        data: "2026-04-26",
        taguri: ["blowjob", "cum", "3d"],
        autor: "admin"
    },
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "https://aws-mp4.rule34.xxx//images/23/cd590848f8c79cb3c679e06e8e6e062c.mp4?10010461",
        titlu: "Takanashi Kiara Paizuri",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d","blowjob"],
        autor: "admin"
    },
    /*
    {
        // Acesta este un video de test (Big Buck Bunny) luat de pe internet ca să vezi cum arată
        link: "",
        titlu: "",
        data: "2026-04-26",
        taguri: ["paizuri", "cum", "2d"],
        autor: "admin"
    },

    */

    
];
