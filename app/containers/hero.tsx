"use client";
import Typewriter from 'typewriter-effect';
import { Title } from '../components/title';

export function Hero()
{
    return (
        <section id="about" className="w-full flex justify-center px-4 md:px-8 my-20">
            <div className="container flex flex-col items-center md:items-start text-center md:text-start gap-2 md:gap-4">
                <Title>
                    Hi, my name is
                </Title>
                <h1 className="text-primary-lighter text-5xl md:text-6xl font-bold">
                    Muhammad Ans Ishfaq
                </h1>
                <h2 className="text-primary-light text-xl md:text-4xl lg:text-6xl font-bold">
                    <Typewriter
                        options={{
                            strings: [
                                'Full Stack Web Developer',
                                'Hybrid Mobile App Developer',
                                'Native Windows App Developer',
                                '2D Unity Game Developer',
                                'UI/UX Designer'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p className="max-w-4xl text-xs md:text-base mb-4 leading-loose opacity-75">
                    Proficient in JavaScript, React, Next.- js, NestJS, Express, TypeScript, C/C++, C#, and Python. Adaptable to new technologies, I excel in dynamic environments, crafting innovative solutions for evolving digital needs.
                </p>
                <div>
                    <button onClick={() => {
                        const link = document.createElement('a');
                        link.href = `/resume.pdf`;
                        link.download = 'resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }} className="text-xs md:text-base border-2 border-secondary p-4 text-secondary font-bold hover:bg-secondary hover:text-primary-dark">Check Out My Resume</button>
                </div>
            </div>
        </section>
    )
}