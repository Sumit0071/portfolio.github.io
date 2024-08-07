"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Self learning coding</li>
                <li>B.tech in CSE 26 Netaji Subhas Engineering College</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Google Cloud career Practitioner</li>
                
            </ul>
        ),
    },
    {
        title: "Experince",
        id: "Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Member of Technical Staff at CS FOR ALL form August 2023 to March 2023</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState( "skills" );
    const [isPending, startTransition] = useTransition();

    const handleTabChange = ( id ) => {
        startTransition( () => {
            setTab( id );
        } );
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/assets/setup.jpeg" alt='setup' width={500} height={500} className="rounded border border-white-50" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, MySQL,
                         HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                        Well I am a singer too (not professional) but it is my passion.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange( "skills" )}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange( "education" )}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange( "certifications" )}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange( "Experience" )}
                            active={tab === "Experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find( ( t ) => t.id === tab ).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
