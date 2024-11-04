"use client"

import {NextFont} from "next/dist/compiled/@next/font";
import {useRevealTextInstance} from "@/components/providers/reveal-text-provider";
import React from "react";
import {motion} from "framer-motion";
import {twMerge} from "tailwind-merge";

interface RevealTextProps {
  font?: NextFont;
  className?: string;
  children: React.ReactNode;
  staggerChars?: boolean
}

export default function RevealText(props: RevealTextProps): React.JSX.Element {
  const DURATION = 0.55;
  const STAGGER_DURATION = 0.1;

  const getInstanceNumber = useRevealTextInstance();
  const instanceNumber = getInstanceNumber();

  const staggerChars: boolean = props.staggerChars !== undefined ? props.staggerChars : false;

  const renderText = (text: string) => {
    return text.split(" ").map((word, outerIndex) => (
      <React.Fragment key={outerIndex}>
        {outerIndex > 0 && <span className={"inline-block"}>&nbsp;</span>}
        <span className={"inline-block"} key={outerIndex}>
          {word.split("").map((letter, index) => (
            <motion.span
              className={"inline-block"}
              key={index}
              animate={{
                y: ["100%", 0],
                opacity: [0, 1]
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: !staggerChars ? instanceNumber * STAGGER_DURATION : instanceNumber ? instanceNumber * STAGGER_DURATION + outerIndex * 0.08 + index * 0.02 : outerIndex * 0.08 + index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </React.Fragment>
    ));
  };

  const renderChildren = (children: React.ReactNode): React.ReactNode => {
    if (typeof children === "string") {
      return renderText(children);
    } else if (React.isValidElement(children)) {
      // if ((children as React.ReactElement).type === StaggeredFlippingText) {
      //   return children; // Bypass rendering for StaggeredFlippingText
      // }
      return React.cloneElement(children as React.ReactElement, {
        children: renderChildren((children as React.ReactElement).props.children)
      });
    } else if (Array.isArray(children)) {
      return children.map((child, index) => (
        <React.Fragment key={index}>
          {renderChildren(child)}
        </React.Fragment>
      ));
    }
    return children;
  };

  return (
    <motion.span
      className={twMerge(`${props.font ? props.font.className : ''} relative flex flex-rows overflow-hidden whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-4xl`, props.className)}
    >
      <div>{renderChildren(props.children)}</div>
    </motion.span>
  );
}