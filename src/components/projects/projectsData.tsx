import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsImages from "./projectsImages";

export interface ProjectProps {
    name: string;
    timeline: string;
    description: string;
    technologies: {
        main: string[];
        all: string[];
    };
    images: string[];
    backgroungImages: string[];
    links: Array<{
        label: string;
        icon: JSX.Element;
        href: string;
    }>;
}

const createLinkObject = (gitHubLink: string, deployedLink: string) => {
    return [
        {
            label: "Code",
            icon: <FontAwesomeIcon icon={faGithub} />,
            href: gitHubLink,
        },
        {
            label: "Live",
            icon: <FontAwesomeIcon icon={faRocket} />,
            href: deployedLink,
        },
    ];
};

export const projects: ProjectProps[] = [
    {
        name: "Foodify Delivery",
        timeline: "May 2023",
        description:
            "Foodify Delivery is a web app that allows users to choose a shop and add items from it to the cart, as well as view and modify cart content. The order process can be seamlessly completed through a user-friendly form.",
        technologies: {
            main: ["#MERN", "#Redux", "#Cloudinary"],
            all: [
                "JS",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Cloudinary",
                "SCSS",
                "React Router",
                "Redux Toolkit",
                "Axios",
            ],
        },
        images: projectsImages.foodify.full,
        backgroungImages: projectsImages.foodify.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/ElifTech_TestTask",
            "https://foodify-delivery.onrender.com"
        ),
    },
    {
        name: "eWallet",
        timeline: "January - April 2023",
        description:
            "eWallet is a web app for managing finances. Users can create wallets, add credit cards, set saving goals, and track collections. It provides a clear overview of the user's overall balance, the amount of money in each account type, and the number of items.",
        technologies: {
            main: ["#MERN", "#Redux", "#GoogleAuth"],
            all: [
                "JS",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Redux Toolkit",
                "Bootstrap",
                "CSS",
                "Google OAuth",
                "React Hook Form",
            ],
        },
        images: projectsImages.ewallet.full,
        backgroungImages: projectsImages.ewallet.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/eWallet",
            " https://your-e-wallet.onrender.com"
        ),
    },
    {
        name: "Rick And Morty",
        timeline: "March 2023",
        description: `Rick And Morty is a web app that allows users to search for characters of the cartoon "Rick and Morty" by their name. Characters that match upwith the search query are sorted in a list and divided into pages. Users can access additional information by clicking on a certain character's card.`,
        technologies: {
            main: ["#JS", "#CSS", "#React", "#GraphQL"],
            all: ["JS", "CSS", "React", "React Router", "GraphQL"],
        },
        images: projectsImages["rick-and-morty"].full,
        backgroungImages: projectsImages["rick-and-morty"].small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Reenbit_TestTask",
            "https://rick-and-morty-cartoon.netlify.app"
        ),
    },
    {
        name: "Notes Manager",
        timeline: "August 2023",
        description: `Notes Manager App provides a straightforward platform for users to manage and categorize their notes. Users can create, edit, and organize their notes into distinct categories like "Task," "Random Thought," and "Idea." Additionally, the app offers features such as archiving, unarchiving, and bulk actions to streamline note management.`,
        technologies: {
            main: ["#Typescript", "#React", "#Redux", "#SCSS"],
            all: ["Typescript", "React", "Redux Toolkit", "SCSS", "Font Awesome"],
        },
        images: projectsImages.notes.full,
        backgroungImages: projectsImages.notes.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Radency_TestTask_Front",
            "https://notesflow-react-app.onrender.com"
        ),
    },
    {
        name: "YouTube Search Bar",
        timeline: "November 2022",
        description:
            "This is a web app similar to a YouTube browser application in approach and design. Users are able to look for any YouTube videos by typing a search term. Afterward, the app does a search for a list of videos matching that search query. Users can select some video from the list, watch it, and get acquainted with the description.",

        technologies: {
            main: ["#JS", "#CSS", "#React", "#YouTube Data API"],
            all: ["JS", "CSS", "React", "YouTube Data API"],
        },
        images: projectsImages.youtube.full,
        backgroungImages: projectsImages.youtube.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Youtube_Searchbar",
            "https://youtube-searchbar.netlify.app"
        ),
    },
    {
        name: "Quotes Oasis",
        timeline: "May 2023",
        description:
            "Quote Oasis is a web app that showcases random quotes. Users have the opportunity to choose from various categories (happiness, life, success, failure, etc.) or receive random quotes. They can easily share these quotes on diverse social media platforms such as Twitter, Telegram, or via email.",

        technologies: {
            main: ["#JS", "#SCSS", "#React", "#apiNinjas"],
            all: ["JS", "SCSS", "React", "Bootstrap", "Font Awesome", "API Ninjas"],
        },
        images: projectsImages.quotes.full,
        backgroungImages: projectsImages.quotes.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Quotes_Oasis",
            "https://quotes-oasis.onrender.com"
        ),
    },
    {
        name: "Markdown Previewer",
        timeline: "June 2023",
        description:
            "The Markdown Previewer is a web app enabling users to input Markdown text and instantly view a live preview of the corresponding rendered HTML output. Users can conveniently select essential elements from the toolbar, including headers, bold text, code snippets, quotes, ordered lists, and more.",

        technologies: {
            main: ["#JS", "#SCSS", "#React", "#Marked"],
            all: ["JS", "SCSS", "React", "Font Awesome", "Marked", "Prismjs"],
        },
        images: projectsImages["md-previewer"].full,
        backgroungImages: projectsImages["md-previewer"].small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Markdown_Previewer",
            " https://md-previewer.onrender.com"
        ),
    },
    {
        name: "Calculator",
        timeline: "June 2023",
        description:
            "The Basic Calculator App facilitates essential math operations using formula logic and respecting operation order. It features clickable elements for numbers 0-9, primary operators (+, -, *, /, %), decimals, and equals. Clearing inputs and viewing ongoing calculations are easily managed, while the display element presents inputs and results seamlessly.",

        technologies: {
            main: ["#JS", "#SCSS", "#React"],
            all: ["JS", "SCSS", "React"],
        },
        images: projectsImages.calculator.full,
        backgroungImages: projectsImages.calculator.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/Basic_Calculator",
            "https://easy-calculation.onrender.com"
        ),
    },
    {
        name: "YelpCamp",
        timeline: "February - June 2022",
        description:
            "In the Bootcamp, we developed a web app for creating campgrounds with descriptions and images. User authentication is required for reviews, ratings, and adding new campgrounds. The landing page showcases a zoomable map with campground markers and corresponding cards. Clicking a card reveals detailed information about a specific campground.",

        technologies: {
            main: ["#JS", "#Bootstrap", "#Node.js", "#Mapbox"],
            all: ["JS", "Bootstrap", "Node.js", "Express", "MongoDB", "Mapbox", "Cloudinary"],
        },
        images: projectsImages.yelpcamp.full,
        backgroungImages: projectsImages.yelpcamp.small,
        links: createLinkObject(
            "https://github.com/NikolayVerstak/YelpCamp_2022",
            "https://yelpcamp-2022.onrender.com"
        ),
    },
];
