"use client"

import {Aleo, Inter} from "next/font/google";
import {twMerge} from "tailwind-merge";
import {RevealTextProvider} from "@/components/providers/reveal-text-provider";
import RevealText from "@/components/ui/reveal-text";
import {motion} from "framer-motion";
import {Briefcase, Download, LinkedinIcon, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {siStackoverflow} from 'simple-icons';
import Link from "next/link";
import React from "react";

const inter = Inter({
  subsets: ["latin"]
})

const aleo = Aleo({
  subsets: ["latin"]
})

const PulsingDot = () => (
  <motion.div
    className="flex items-center space-x-2 mb-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="w-3 h-3 bg-green-500 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <span className="text-sm ">Currently looking for jobs in London.</span>
  </motion.div>
)

export default function Home() {
  console.log(siStackoverflow)
  return (
    <div className={twMerge("flex flex-col h-[100vh] w-full items-center justify-center p-6", inter.className)}>
      <div className={"flex flex-col max-w-2xl w-full gap-4"}>
        <RevealTextProvider>
          <div className={"flex flex-col gap-2"}>
            <PulsingDot />
            <RevealText className={""}>
              <p className={twMerge("text-base font-bold", aleo.className)}>Welcome! I&#39;m</p>
            </RevealText>
            <RevealText staggerChars={true}>
              <p className={twMerge("text-4xl font-bold", aleo.className)}>Ege Kaan Gürkan</p>
            </RevealText>

            <div className={"flex w-full items-center gap-2 overflow-hidden"}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%"
                }}
                animate={{
                  opacity: 1,
                  y: ["100%", 0],
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Briefcase className={"w-5 h-5"} strokeWidth={1}/>
              </motion.div>
              <RevealText>
                <p className={"text-base text-muted-foreground"}>
                  Integrations and Software Developer @ Maltego
                </p>
              </RevealText>
            </div>
            <div className={"flex w-full items-center gap-2 overflow-hidden"}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%"
                }}
                animate={{
                  opacity: 1,
                  y: ["100%", 0],
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <MapPin className={"w-5 h-5"} strokeWidth={1}/>
              </motion.div>
              <RevealText>
                <p className={"text-base text-muted-foreground"}>
                  From Ankara, based in Munich
                </p>
              </RevealText>
            </div>

            <RevealText staggerChars={false}>
              <p className={twMerge(
                "text-lg text-foreground leading-relaxed max-w-prose text-wrap",
              )}>
                A computer scientist dedicated to creating intelligent integrations and scalable full-stack solutions. Driven by a passion for LLM technologies and process optimization, I transform complex technical challenges into efficient and impactful solutions.
              </p>
            </RevealText>
            <motion.div
              className={"flex items-center"}
              animate={{
                opacity: 1
              }}
              initial={{
                opacity: 0
              }}
              transition={{
                delay: 1,
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <Link href={"/resume.pdf"} download={"resume.pdf"}>
                <Button variant={"outline"}>
                  <Download className={"w-5 h-5"}/>
                  <p className={"text-base"}>Resume</p>
                </Button>
              </Link>
            </motion.div>

            <div className={"flex gap-2"}>
              <motion.div
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                initial={{
                  scale: 0,
                  opacity: 0
                }}
                transition={{
                  delay: 1,
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <Link href={"https://github.com/EgeKaanGurkan"}>
                  <Button size={"icon"} variant={"ghost"} className={"hover:bg-[#5b5757]"}>
                    <img src={"https://cdn.simpleicons.org/github/white"} className={"w-5 h-5"}/>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                initial={{
                  scale: 0,
                  opacity: 0
                }}
                transition={{
                  delay: 1.1,
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <Link href={"https://linkedin.com/in/ege-kaan-gurkan"}>
                  <Button size={"icon"} variant={"ghost"} className={"hover:bg-[#0A66C2]"}>
                    <LinkedinIcon className={"w-5 h-5 "}/>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                initial={{
                  scale: 0,
                  opacity: 0
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <Link href={"https://stackoverflow.com/users/4770282/ege-kaan-g%c3%bcrkan"}>
                  <Button size={"icon"} variant={"ghost"} className={"hover:bg-[#F58025]"}>
                    <img src={"https://cdn.simpleicons.org/stackoverflow/white"} className={"w-5 h-5"}/>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/*<div className={"flex gap-2"}>*/}
            {/*  <ProjectPreviewCard project={{*/}
            {/*    name: "Buluşunca",*/}
            {/*    tags: ["aws"],*/}
            {/*    description: "A startup I started with a few friends during the COVID-19 pandemic lockdowns to help small businesses."*/}
            {/*  }}/>*/}
            {/*</div>*/}

          </div>

        </RevealTextProvider>
      </div>
    </div>
  );
}
