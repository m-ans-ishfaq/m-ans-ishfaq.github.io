import { Title } from "../components/title";

const skills = [
    {
        title: 'Frontend Development',
        desc: 'CSS Frameworks like Tailwind, Bootstrap, SCSS along with JQuery or Modern Javascript Frameworks like react, vue, angular, svelte. Understanding of metaframeworks like Next, SEO and SSG, SSR, CSR, ISR, hydration, islands and other web rendering techniques.'
    },
    {
        title: 'Backend Development',
        desc: 'NodeJS, Express, NestJS, Flask, Fastify, TypeORM, working with template engines, databases from NoSQL to SQL; mongodb, firestore, mySQL, sQLServer, postgreSQL, API Integration, JWT Authentication REST and GraphQL API, along with socket real-time connection.'
    },
    {
        title: 'Desktop Development',
        desc: 'Native Windows DevTools from .NET Development, Universal Windows Platform, Windows Forms (Winforms), Windows Presentation Foundation (WPF), MAUI, Xamarin to Hybrid Options like ElectronJS'
    },
    {
        title: 'Mobile Development',
        desc: 'Native mobile development from android studio in Kotlin, to hybrid like React-Native (Expo)'
    },
    {
        title: '2D Game Development',
        desc: 'Understanding of Unity Framework, SFML, SDL2 and how these frameworks are made, from collision detection, culling to handling physics of game objects.'
    },
    {
        title: 'Cloud Computing',
        desc: 'Hosting on various cloud platforms like Netlify, Heroku, Github and Vercel. Understanding of Linux ecosystem, Dockerization, git, github, CI/CD pipelines, workflows, microservices and monolithic architecture'
    },
    {
        title: 'UI/UX Designing',
        desc: 'Figma, Adobe Photoshop, Illustrator, editing vector illustrations, understanding of color theory, Wireframing and Prototyping'
    },
    {
        title: 'Motion Graphics',
        desc: 'Adobe After Effects, Premiere Pro, Animate, frame-by-frame and tweening, 2D VFX, green screening, masking, video editing and compositing'
    }
];

const SkillCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <article className="capitalize group hover:text-primary transition-all duration-300 overflow-hidden relative bg-white bg-opacity-5 px-8 py-12 flex flex-col gap-4">
            <h3 className="font-bold text-4xl">
                {title}
            </h3>
            <p className="text-justify opacity-75">
                {desc}
            </p>
            <div className="group-hover:left-0 transition-all duration-300 absolute top-0 -left-full bg-secondary -z-10 w-full h-full"></div>
        </article>
    )
}

export function Skills()
{
    return (
        <section id="skills" className="px-4 md:px-8 py-6 flex justify-center">
            <div className="container flex flex-col gap-12">
                <Title>Skills</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {skills.map(({title, desc}, i) => (
                        <SkillCard key={i} {...{title, desc}} />
                    ))}
                </div>
            </div>
        </section>
    )
}