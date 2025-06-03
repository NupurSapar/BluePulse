import React, { useState, useEffect } from 'react';
import { DropletIcon, Menu } from 'lucide-react';

const Banner = () => (
  <div style={{
    background: 'linear-gradient(135deg, #0ea5e9 0%, #ffffff 100%)',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <Menu size={24} style={{ cursor: 'pointer' }} />
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px',
      flex: 1,
      justifyContent: 'center'
    }}>
      <DropletIcon color="#0ea5e9" />
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        margin: 0 
      }}>BluePulse</h1>
    </div>
    <div style={{ 
      color: '#1e40af',
      fontSize: '1.1rem',
      textAlign: 'center' 
    }}>
      Water body pollution prevention and monitoring
    </div>
  </div>
);

const NewsMarquee = () => {
  const news = [
    "MahaKumbh Mela: Millions gather for holy dip in the Ganges",
    "New water quality standards implemented in coastal regions",
    "Record rainfall improves reservoir levels nationwide",
    "International conference on water conservation next month"
  ];

  const [position, setPosition] = useState(100);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => {
        if (prev <= -200) return 100;
        return prev - 0.05;
      });
    }, 16);

    return () => clearInterval(animation);
  }, []);

  return (
    <div style={{
      background: '#e0f2fe',
      padding: '0.5rem',
      overflow: 'hidden',
      position: 'relative',
      marginTop: '1px'
    }}>
      <div style={{
        whiteSpace: 'nowrap',
        position: 'absolute',
        left: `${position}%`,
        color: '#0369a1',
        fontWeight: 'bold'
      }}>
        {news.join(' | ')}
      </div>
    </div>
  );
};

const InfoBox = ({ title, content, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(title);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title]);

  return (
    <div
      id={title}
      style={{
        padding: '2rem',
        margin: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      <h2 style={{ 
        color: '#0ea5e9', 
        marginBottom: '1rem',
        fontSize: '1.5rem'
      }}>{title}</h2>
      <p style={{ 
        color: '#334155',
        lineHeight: '1.6'
      }}>{content}</p>
    </div>
  );
};

const BluePulsePage = () => {
  const infoBoxes = [
    {
      title: "Water Pollution Overview",
      content: "Water pollution occurs when harmful substances contaminate water bodies, degrading water quality and making it toxic to humans or the environment. Major sources include industrial waste, agricultural runoff, and urban sewage.",
      delay: 0
    },
    {
      title: "Impact on Ecosystems",
      content: "Pollution in water bodies severely affects aquatic ecosystems, leading to loss of biodiversity, habitat destruction, and disruption of food chains. This can have far-reaching consequences for both marine life and human communities.",
      delay: 200
    },
    {
      title: "Prevention Measures",
      content: "Preventing water pollution requires collective effort. Key strategies include proper waste disposal, reducing plastic use, implementing water treatment systems, and supporting environmental regulations that protect our water resources.",
      delay: 400
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#f0f9ff',
      minHeight: '100vh'
    }}>
      <Banner />
      <NewsMarquee />
      <div style={{ 
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 1rem'
      }}>
        {infoBoxes.map((box, index) => (
          <InfoBox
            key={index}
            title={box.title}
            content={box.content}
            delay={box.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default BluePulsePage;