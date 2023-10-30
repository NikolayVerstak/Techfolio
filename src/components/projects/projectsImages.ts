import { ProjectsNames } from "@/utils/constants";

// Function to generate image paths for a given project name and quantity of images
const generateImagePaths = (projectName: ProjectsNames, imagesQty: number) => {
    const basePath = `src/assets/projects/${projectName}/${projectName}-`;

    // Returning an object with full and small image paths
    // e.g. `src/assets/projects/ewallet/ewallet-1.png` `src/assets/projects/ewallet/ewallet-1_small.png`
    return {
        full: Array.from({ length: imagesQty }, (_, i) => `${basePath}${i + 1}.png`),
        small: Array.from({ length: imagesQty }, (_, i) => `${basePath}${i + 1}_small.png`),
    };
};

type ProjectImages = { full: string[]; small: string[] };

// Object containing projects names and qty of images for each project
const projectsImages: Record<ProjectsNames, ProjectImages> = {
    foodify: generateImagePaths("foodify", 4),
    ewallet: generateImagePaths("ewallet", 6),
    "rick-and-morty": generateImagePaths("rick-and-morty", 3),
    notes: generateImagePaths("notes", 6),
    youtube: generateImagePaths("youtube", 3),
    quotes: generateImagePaths("quotes", 3),
    "md-previewer": generateImagePaths("md-previewer", 2),
    calculator: generateImagePaths("calculator", 1),
    yelpcamp: generateImagePaths("yelpcamp", 6),
};

export default projectsImages;
