import React from 'react';
import SkillDataProvider from "@/components/sub/SkillDataProvider";
import {Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data} from "@/constants";
import SkillsText from "@/components/sub/SkillsText";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
            style={{transform: "scale(0.9)"}}
        >
            <SkillsText />

            <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
                {
                    Skill_data.map((image, index)=> (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))
                }
            </div>

            <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
                {
                    Frontend_skill.map((image, index)=> (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
                {
                    Backend_skill.map((image, index)=> (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
                {
                    Full_stack.map((image, index)=> (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
                {
                    Other_skill.map((image, index)=> (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))
                }
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-full"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/assets/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;