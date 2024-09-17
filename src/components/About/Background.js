import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(30);
  }
`;

const StoryList = styled.ul`

  display: grid;
  grid-template-columns: repeat(2, 1fr); // Creates 2 columns
  grid-gap: 20px; // Space between grid items
  padding: 0;
  margin: 0;
  max-width: 1200px; // Adjust as needed
  list-style-type: none; // Removes bullet points
`;

const StoryItem = styled.li`
  margin: 5vh 0;
  line-height: 1.6;
  font-size: 1.1em;
  opacity: 0; // Start invisible
  transform: translateY(20px); // Start below final position
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &.visible {
    opacity: 1; // End visible
    transform: translateY(0); // End at final position
    animation: ${fadeIn} 0.5s ease-out forwards;
  }

  &:before {
   
    color: #8a2be2;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    transition: transform 0.3s ease;
  }
  &:hover:before {
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: 2em;
`;

const MyStories = () => {
  const stories = [
    
    /*
    {
      content:
        "I moved to Sweden from Iran in 2016 and had to start learning everything from scratch. Despite the challenges, I have been persistent and diligent in my efforts. I have successfully learned both Swedish and English and completed my high school education with top grades.",
    },
    */
    {
      content:
        "Initially, I was interested in studying medicine. However, I soon discovered that my true passion lay in technology and computers, as they offered me greater opportunities for creativity and innovation.",
    },
    // Add two more stories
    {
      content: "My first programming language was Haskell, which I initially disliked because it felt like a black box full of recursion, making it hard to understand the processes. However, my journey took a positive turn when I was introduced to C, which was much easier to understand.",
    },
    {
      content: "Gaming got me intrested in programming. My favorite games are Counter Strike and Lol",
    },
  ];

  const storyRefs = useRef([]);
  storyRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Remove the 'visible' class when the item is not in the viewport
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    storyRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      storyRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <StoryList>
      {stories.map((story, index) => (
        <StoryItem key={index} ref={(el) => (storyRefs.current[index] = el)}>
          {story.content}
        </StoryItem>
      ))}
    </StoryList>
  );
};

export default MyStories;
