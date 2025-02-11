import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './skillstack.css'; // Make sure this points to your actual CSS file

function SkillCarousel() {
  const skills = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      description: 'Extensive experience in AI/ML, including deep learning, computer vision, and natural language processing. Proficient in implementing neural networks, working with transformers, and developing real-world AI applications using PyTorch, Scikit-learn and TensorFlow . Strong foundation in AI ethics and responsible development practices.'
    },
    {
      name: 'Software Development and CI/CD',
      description: 'Learned about software development cycle, including agile development, version control, testing, CI/CD and how to use tools such as Git, Github and Docker.'
    },
    {
      name: 'A lot of math',
      description: 'completed courses in linear algebra, calculus, differential equations, probability, statistics, discrete mathematics, and graph theory, essential for proficiency in AI',
    },
    {
      name: 'Hardware',
      description: ' completed courses in digital logic, computer architecture, and embedded systems, gaining experience in programming with C, VHDL, and Cuda, and developing skills in state machine construction and hardware-software interfacing',

    },
    {
      name: 'Web Development',
      description: 'Learned about web development, including both front-end and back-end. We have worked with HTML, CSS, MongoDB, Javasript, React, Express and Node.js',
    },{
      name: 'Data Structures',
      description: 'Proficient in the implementation and application of key data structures such as trees, graphs, and hash tables.'
    },
      {
        name: 'Networking Fundamentals',
        description: 'Understanding of network protocols, architecture, and data communication principles.'
      }
      
    // ... Add more skills with descriptions as needed ...
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true, // Center the current slide
    centerPadding: '60px', // Padding on the sides when centerMode is true
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1,
    focusOnSelect: true, // Focus on the slide clicked
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: '20px'}}>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-block">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SkillCarousel;
