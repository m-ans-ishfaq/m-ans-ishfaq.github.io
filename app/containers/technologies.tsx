import Image from "next/image";
import { Title } from "../components/title";

const technologies = [
    {
        label: "HTML5",
        img: "html.svg"
    },
    {
        label: "CSS3",
        img: "css.svg"
    },
    {
        label: "Javascript",
        img: "js.svg"
    },
    {
        label: "SCSS",
        img: "sass.svg"
    },
    {
        label: "Typescript",
        img: "ts.svg"
    },
    {
        label: "Tailwind",
        img: "tailwind.svg"
    },
    {
        label: "Bootstrap",
        img: "bootstrap.png"
    },
    {
        label: "MongoDB",
        img: "mongodb.svg"
    },
    {
        label: "NextJS",
        img: "nextjs.svg"
    },
    {
        label: "PostCSS",
        img: "postcss.svg"
    },
    {
        label: "React",
        img: "reactjs.svg"
    },
    {
        label: "Svelte",
        img: "svelte.png"
    },
    {
        label: "Vue",
        img: "vue.png"
    },
    {
        label: "Git",
        img: "git.svg"
    },
    {
        label: "Python",
        img: "python.svg"
    },
    {
        label: "Numpy",
        img: "numpy.svg"
    },
    {
        label: "Pandas",
        img: "pandas.png"
    },
    {
        label: "Matplotlib",
        img: "matplotlib.png"
    },
    {
        label: "DiscordJS",
        img: "discordjs.png"
    },
    {
        label: "ElectronJS",
        img: "electronjs.png"
    },
    {
        label: "ExpressJS",
        img: "expressjs.svg"
    },
    {
        label: "Fastify",
        img: "fastify.svg"
    },
    {
        label: "Flask",
        img: "flask.png"
    },
    {
        label: "NodeJS",
        img: "nodejs.svg"
    },
    {
        label: "GraphQL",
        img: "graphql.png"
    },
    {
        label: "Socket.IO",
        img: "socketio.png"
    },
    {
        label: "Debian / Arch",
        img: "linux.png"
    },
    {
        label: "Bash",
        img: "bash.svg"
    },
    {
        label: "Docker",
        img: "docker.png"
    },
    {
        label: "Photoshop",
        img: "ps.svg"
    },
    {
        label: "Illustrator",
        img: "ai.svg"
    },
    {
        label: "Premiere Pro",
        img: "pr.png"
    },
    {
        label: "After Effects",
        img: "ae.png"
    },
    {
        label: "Animate",
        img: "an.png"
    },
    {
        label: "Figma",
        img: "figma.svg"
    },
    {
        label: "Expo",
        img: "expo.svg"
    },
    {
        label: "Kotlin",
        img: "kotlin.png"
    },
    {
        label: "MySQL",
        img: "mysql.png"
    },
    {
        label: "PostgreSQL",
        img: "postgres.png"
    },
    {
        label: "SQL Server",
        img: "sqlserver.png"
    },
    {
        label: "SQLite",
        img: "sqlite.webp"
    },
    {
        label: "Redis",
        img: "redis.png"
    },
    {
        label: "Firebase",
        img: "firebase.png"
    },
    {
        label: "Supabase",
        img: "supabase.png"
    },
    {
        label: "C / C++",
        img: "cpp.png"
    },
    {
        label: "Java",
        img: "java.webp"
    },
    {
        label: "C#",
        img: "csharp.png"
    },
    {
        label: "WF/WPF",
        img: "dotnetcore.png"
    },
    {
        label: "Xamarin",
        img: "xamarin.png"
    },
    {
        label: "MAUI",
        img: "maui.png"
    },
    {
        label: "Astro",
        img: "astro.png"
    },
    {
        label: "NestJS",
        img: "nest.webp"
    },
    {
        label: "TypeORM",
        img: "typeorm.png"
    },
    {
        label: "Prisma",
        img: "prisma.png"
    },
    {
        label: "Unity 2D",
        img: "unity.png"
    }
]

const TechnologyComponent = async ({ label, img }: { label: string, img: string }) => {
    return (
        <div className="bg-white bg-opacity-5 p-4 flex flex-col items-center justify-center gap-4 group hover:bg-primary">
            <Image className="h-8 w-12 object-contain group-hover:saturate-100" src={await import(`@/public/technologies/${img}`)} alt={label} />
            <p>{label}</p>
        </div>
    )
}

export function Technologies()
{
    return (
        <section id="technologies" className="px-4 py-6 md:p-8 flex justify-center">
            <div className="container flex flex-col gap-12">
                <Title>
                    Technologies
                </Title>
                <div className="text-xs grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-11 gap-2">
                    {technologies.map(({img, label}, i) => (
                        <TechnologyComponent {...{img, label, key: i}} />
                    ))}
                </div>
            </div>
        </section>
    )
}