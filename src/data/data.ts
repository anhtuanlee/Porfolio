export const dataContact: Array<{
    title: string;
    links: { sublink: string; link: string }[];
}> = [
        {
            title: 'Mail',
            links: [
                {
                    sublink: 'anhtuan.devfe@gmail.com',
                    link: 'mailto:anhtuan.devfe@gmail.com',
                },
            ],
        },
        {
            title: 'Socal Medias',
            links: [
                { sublink: 'facebook', link: 'https://www.facebook.com/kelangthang.n/' },
                { sublink: 'linkedin', link: 'https://www.linkedin.com/in/anhtuandev/' },
                { sublink: 'github', link: 'https://github.com/anhtuanlee' },
            ],
        },
    ];

export const DATA_SOCIAL = [
    {
        title: 'Linkined',
        href: 'https://www.linkedin.com/in/anhtuandev/',
    },
    {
        title: 'Gmail',
        href: 'mailto:anhtuan.devfe@gmail.com',
    },
    {
        title: 'Github',
        href: 'https://github.com/anhtuanlee',
    },
];

export const DATA_PROJECTS = [
    {
        key: 'zing-mp3',
        title: 'Zing Mp3 Clone',
        link: 'https://anhtuan-music.vercel.app',
        category: 'Web Development',
        type: 'Personal',
        technology: ['Javascript', 'SCSS', 'ReactJS', 'ReduxTookit'],
        thumbnail: '/access/images/thumnail_zingmp3.png',
        images: [
            '/access/images/img_zingmp3_1.png',
            '/access/images/img_zingmp3_2.png',
            '/access/images/img_zingmp3_3.png',
            '/access/images/img_zingmp3_4.png',
            '/access/images/img_zingmp3_5.png',
            '/access/images/img_zingmp3_6.png',
        ],
        description:
            'The presented user interface is related to the Zing Mp3 Music website. It uses the popular responsive design, which can give you the same experience as the original application, whether on a PC or mobile phone, motion or move.',
    },

    {
        key: 'portfolio',
        title: 'Portfolio',
        link: 'https://portfolio-anhtuanlee.vercel.app',
        category: 'Web Creative',
        type: 'Personal',
        technology: [
            'Typescript',
            'NextJs',
            'Zustand',
            'SCSS',
            'Tailwind',
            'Three Fiber',
            'GSAP',

        ],
        thumbnail: '/access/images/thumbnail_portfolio.png',
        images: [
            '/access/images/img_portfolio_1.png',
            '/access/images/img_portfolio_2.png',
        ],
        description:
            ' I believe personal projects are the key to skill development and idea exploration. Explore freely created projects, from app development to experimenting with new concepts.',
    },
];
