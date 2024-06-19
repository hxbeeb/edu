import React from 'react';

const StreamlitEmbed = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://edu-ai-6tw9.onrender.com"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Streamlit App"
      ></iframe>
    </div>
  );
};

export default StreamlitEmbed;
