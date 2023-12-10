
const homeData = {
    title: "Hi, I'm Irsyad",
    description: "Have a strong motivation to become a Fullstack Developer. Currently exploring Frontend more broadly. I am ready to explore coding technology more widely. Proficient in Javascript and well in some aspects of web technologies. Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.",
};

const article = {
    title: "Latest Article",
    description: 'These are the latest articles I have written.'
};

const blog = {
    title: "Blog",
    description: "Welcome to this blog! Here, you'll discover a diverse range of articles covering interesting, informative, and inspiring topics. Join us in exploring and uncovering intriguing things you might not have known before. Happy reading!",
};

const project = {
    title: "Project",
    description: "Explore my coding journey through various projects showcasing creativity, innovation, and problem-solving skills in the dynamic world of programming.",
};

const articleData = [
    {
        image: '/img/comingsoon.jpg',
        title: 'Coming soon :D',
        date: '~'
    }

];

const experienceData = {
    image: '/img/wikrama-logo.png',
    job: 'Backend Developer',
    company: 'Sysweb Wikrama',
    date: 'April 2023 - Oct 2023'
}

const tech = [
    {
        title: 'React JS',
        icon: '/icon/react.png'
    },
    {
        title: 'Tailwind Css',
        icon: '/icon/tailwind.png'
    },
    {
        title: 'Vite Js',
        icon: '/icon/vite.png'
    }
]

const projectData = [
    {
        slug: 'apotek-app',
        image: '/project/apotek.png',
        title: 'Apotek App',
        description: 'School project for education purpose. Learn how to build an application using laravel and mysql.',
        icons: ['skill-icons:laravel-light', 'skill-icons:mysql-light', 'skill-icons:bootstrap'],
        isLive: false,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/apotek-app'
    },
    {
        slug: 'piketkuy',
        image: '/project/piketkuy.png',
        title: 'PiketKuy ',
        description: 'Website to manage and monitor toilet cleaning activities, classes, etc. Utilizing the collaboration of the Sysweb Wikrama team.',
        icons: ['skill-icons:laravel-light', 'skill-icons:mysql-light', 'skill-icons:bootstrap'],
        isLive: false,
        isPrivate: true,
        project_link: null,
    },
    {
        slug: 'old-personal-web',
        image: '/project/old_personal.png',
        title: 'Old Personal Website ',
        description: 'My first personal website, made with React and TailwindCss and Vite. ',
        icons: ['skill-icons:react-light', 'skill-icons:tailwindcss-light', 'skill-icons:vite-light'],
        isLive: true,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/newPersonalWeb',

    },
    {
        slug: 'simple-school-website',
        image: '/project/school-wk.png',
        title: 'Simple School Website ',
        description: 'A simple school website using HTML and CSS. This project is for education purpose.',
        icons: ['skill-icons:html', 'skill-icons:css'],
        isLive: true,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/school-website',

    },
    {
        slug: 'box-shadow-generator',
        image: '/project/boxshadow.png',
        title: 'Box Shadow Generator',
        description: 'A simple website using HTML CSS and Javascript. This project is for education purpose.',
        icons: ['skill-icons:html', 'skill-icons:css', 'skill-icons:javascript'],
        isLive: true,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/boxshadow-generator',

    },
    {
        slug: 'masjid-wikrama',
        image: '/project/masjid.png',
        title: 'Masjid Wikrama',
        description: 'This project is for education purpose using React Tailwind and MYSQL.',
        icons: ['skill-icons:react-light', 'skill-icons:tailwindcss-light', 'skill-icons:mysql-light'],
        isLive: false,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/masjid-wikrama   ',

    },
    {
        slug: 'simple-shop',
        image: '/project/shop.png',
        title: 'Simple Shop Website',
        description: 'This project is for education purpose using HTML CSS and JS.',
        icons: ['skill-icons:html', 'skill-icons:css', 'skill-icons:javascript'],
        isLive: false,
        isPrivate: false,
        project_link: 'https://github.com/isadkang/simple-shop ',

    },
]


export { homeData, blog, project, article, articleData, experienceData, tech, projectData };
