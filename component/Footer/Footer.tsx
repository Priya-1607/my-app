// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Footer content */}
      <div>
        {/* Contact details */}
        <p>Contact us: example@example.com</p>
        {/* Copyright notice */}
        <p>&copy; 2024 NGO. All rights reserved.</p>
        {/* Links to relevant pages */}
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
