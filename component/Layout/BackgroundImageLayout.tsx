// BackgroundImageLayout.tsx
import React, { ReactNode } from 'react';

interface BackgroundImageLayoutProps {
  backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRce9ZRPEQQk87P6qWb3IEf7yanwnGbuza_7SAcOWm4XeSmERN6IblBusrYYjUs6YTkgyI&usqp=CAU";
  children: ReactNode;
}

const BackgroundImageLayout: React.FC<BackgroundImageLayoutProps> = ({ backgroundImage, children }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100%',width:"100%" }}>
      {children}
    </div>
  );
};

export default BackgroundImageLayout;
