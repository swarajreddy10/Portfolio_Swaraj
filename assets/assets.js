import arrow_icon_dark from './arrow-icon-dark.png';
import arrow_icon from './arrow-icon.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import code_icon_dark from './code-icon-dark.png';
import code_icon from './code-icon.png';
import download_icon from './download-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import edu_icon from './edu-icon.png';
import figma from './figma.png';
import firebase from './firebase.png';
import git from './git.png';
import graphics_icon from './graphics-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import mobile_icon from './mobile-icon.png';
import mongodb from './mongodb.png';
import moon_icon from './moon_icon.png';
import profile_img from './profile-img.png';
import project_icon_dark from './project-icon-dark.png';
import project_icon from './project-icon.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import sun_icon from './sun_icon.png';
import ui_icon from './ui-icon.png';
import user_image from './user-image.png';
import vscode from './vscode.png';
import web_icon from './web-icon.png';

export const assets = {
    user_image, code_icon, code_icon_dark, edu_icon, edu_icon_dark, project_icon, project_icon_dark,
    vscode, firebase, figma, git, mongodb,
    right_arrow_white, logo, logo_dark, mail_icon, mail_icon_dark, profile_img,
    download_icon, hand_icon, header_bg_color, moon_icon, sun_icon, arrow_icon,
    arrow_icon_dark, menu_black, menu_white, close_black, close_white,
    web_icon, mobile_icon, ui_icon, graphics_icon, right_arrow, send_icon,
    right_arrow_bold, right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Crop Disease Detection',
        description: 'Deep Learning / AI',
        bgImage: '/work-1.png',
        link: 'https://github.com/swarajreddy10/CROP_DISEASE_DETECTION_Final'
    },
    {
        title: 'Portfolio Website',
        description: 'Web Development',
        bgImage: '/work-2.png',
        link: 'https://github.com/swarajreddy10/food-delivery-site'
    },
    {
        title: 'Stock Price Prediction',
        description: 'AI / ML',
        bgImage: '/work-3.png',
        link: 'https://github.com/swarajreddy10/Stock_Prediction_Final'
    },
    {
        title: 'RAG Web App with LangChain',
        description: 'Generative AI',
        bgImage: '/work-4.png',
        link: 'https://github.com/swarajreddy10/Retrieval-Augmented-Generation--Webpage'
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack Development', description: 'Modern, responsive web applications using MERN stack and REST APIs.', link: '' },
    { icon: assets.mobile_icon, title: 'Cloud & DevOps', description: 'AWS, Google Cloud Docker, CI/CD pipelines, serverless architectures, and infrastructure automation.', link: '' },
    { icon: assets.ui_icon, title: 'AI/ML Solutions', description: 'Deploying ML models with TensorFlow and Flask for real-time inference and scalability.', link: '' },
    { icon: assets.graphics_icon, title: 'Database Engineering', description: 'Design and manage SQL & NoSQL databases including MySQL, PostgreSQL, and DynamoDB.', link: '' },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, C, JavaScript, HTML, CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science - GITAM University, 2025' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Developed 4+ major projects including cloud, AI-ML, and web apps' }
];

export const toolsData = [
    assets.vscode, assets.figma, assets.mongodb, assets.firebase, assets.git
];
