import React from 'react'
import Link from 'next/link'
import {HoverEffect } from './ui/card-hover-effect'
import SparklesText from './ui/sparkles-text'

const Skills = () => {

   const projects = [
        {
          title: "QuizMater - A Discord Quiz Bot",
          description:
            "QuizMaster is a Discord.js bot with dynamic quizzes on Programming, Java, and Data Structures from quiz.json. Test your knowledge, compete with friends, and learn while having fun!",
          link: "https://github.com/Meharwan-Singh2308/Discord-bot",
        },
        {
          title: "Youtube Backend Clone",
          description:
            "A YouTube backend clone using Node.js, Express, MongoDB, Multer, JWT, and bcrypt. Features include authentication, authorization, file uploads . with  industry-standards code and file structure.",
          link: "https://github.com/Meharwan-Singh2308/Backend-Mega-Project-MEN-",
        },
        {
          title: "1st Open Source Contribution",
          description:
            "I made a significant and impactful contribution to the Skill Swap project by Contributing the user.model.ts file written in TypeScript and mongoose",
          link: "https://github.com/Meharwan-Singh2308/skillswap/commit/af2b79736b29adfbc88619e61179d2afe92819c8",
        },
        {
          title: "2nd Open Source Contribution",
          description:
            "I was contributed in an open source project SkillSwap ( Currently Under Development ) of two validation files - chat.validation.ts and post.validation.ts using Zod library. ",
          link: "https://github.com/Meharwan-Singh2308/skillswap/commit/14f8ccf9199491156fa11aa1c9a5236da5c3ddcb",
        },
        {
          title: "Sundown Studio Website Clone",
          description:
            "this is a HTML , CSS and JS Clone of Sundown Studio's official website with loading animations , button effect and many more amazing animations",
          link: "https://github.com/Meharwan-Singh2308/sundown-Studios",
        },
        {
          title: "Significo Site Clone",
          description:
            "It is not responsive yet , this is a HTML , CSS and JS Clone of Significo's official website with loading animations , button effect and many more amazing animations",
          link: "https://github.com/Meharwan-Singh2308/Significo-Site-Clone/tree/main",
        },
      ];


  return (
    <div className='w-screen h-screen px-10 py-10 bg-[#1E1A1A]'>
        <SparklesText sparklesCount={3} text='Projects :-'></SparklesText>
       
        <HoverEffect className='' items={projects} >
        </HoverEffect>

    </div>
  )
}

export default Skills