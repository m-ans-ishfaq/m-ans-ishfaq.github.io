"use client";
import Link from "next/link";
import { Title } from "../components/title";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useRef, useState } from "react";

interface IProject
{
    video: string;
    title: string;
    description: string;
    github?: string;
    linkedin?: string
};

const projects: IProject[] = [
    {
        video: 'tod.mp4',
        title: 'Temple of Death',
        description: 'Console based responsive maze game with boss fight made in C++',
        github: 'https://github.com/m-ans-ishfaq/temple-of-death-game',
        linkedin: 'https://www.linkedin.com/posts/muhammad-anas-650070281_excited-to-share-my-project-temple-of-activity-7149399926278438912-3i7W'
    },
    {
        video: 'so.mp4',
        title: 'Shadow Odyssey',
        description: 'C# Winform/SFML based platformer game without any game engine',
        github: 'https://github.com/m-ans-ishfaq/temple-of-death-game',
        linkedin: 'https://www.linkedin.com/posts/muhammad-anas-650070281_excited-to-share-my-project-temple-of-activity-7149399926278438912-3i7W'
    },
    {
        video: 'grounup.mp4',
        title: 'Grounup',
        description: 'Construction Management System / Dashboard in Next.js & NestJS'
    },
    {
        video: 'styrate.mp4',
        title: 'Styrate',
        description: 'Video App made in React Native (Expo) / Firebase Backend'
    },
    {
        video: 'skillflare.mp4',
        title: 'Skillflare',
        description: 'C++ Console based freelancing app with graphs and tables',
        github: 'https://github.com/m-ans-ishfaq/temple-of-death-game',
        linkedin: 'https://www.linkedin.com/posts/muhammad-anas-650070281_excited-to-share-my-project-temple-of-activity-7149399926278438912-3i7W'
    },
    {
        video: 'memory-riddle.mp4',
        title: 'Memory Riddle',
        description: 'C++ Console based memory cards game with keyboard controls',
        github: 'https://github.com/m-ans-ishfaq/temple-of-death-game',
        linkedin: 'https://www.linkedin.com/posts/muhammad-anas-650070281_excited-to-share-my-project-temple-of-activity-7149399926278438912-3i7W'
    },
    {
        video: 'itcrafts.mp4',
        title: 'ITCrafts',
        description: 'Winform based Console based memory cards game with keyboard controls'
    },
    {
        video: 'ced.mp4',
        title: 'CryptoExpoDisk Landing Page',
        description: 'Designed in Figma, Made in NextJS and TailwindCSS',
        github: 'https://github.com/m-ans-ishfaq/temple-of-death-game'
    },
]

const ProjectCard = ({ video, title, description, github, linkedin }: IProject) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div
            className={`relative bg-black flex container justify-center items-end h-96 border ${isPlaying ? 'border-secondary' : 'border-black'}`}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
            onFocus={handlePlay}
            onBlur={handlePause}
            tabIndex={0} // Ensure the div is focusable
        >
            <video
                ref={videoRef}
                src={`/projects/${video}`}
                className="absolute top-0 left-0 w-full h-full object-contain object-top"
                muted
                loop
                playsInline
            />
            <div className="absolute top-2 right-4 flex gap-3 text-2xl">
                {github && (
                    <Link href={github} className="hover:text-secondary">
                        <BsGithub />
                    </Link>
                )}
                {linkedin && (
                    <Link href={linkedin} className="hover:text-secondary">
                        <BsLinkedin />
                    </Link>
                )}
            </div>
            <div className="container relative z-10 px-4 md:px-8 py-4 flex flex-col gap-2 bg-black bg-opacity-50">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="opacity-75">{description}</p>
            </div>
        </div>
    );
};

export function Projects()
{
    return (
        <section id="projects" className="p-4 md:px-8 flex justify-center">
        <div className="container justify-center">
            <Title>Projects</Title>
            <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map(({video, title, description, github, linkedin}, i) => (
                    <ProjectCard key={i} {...{title, description, video, github, linkedin}} />
                ))}
            </div>
        </div>
        </section>
    )
}