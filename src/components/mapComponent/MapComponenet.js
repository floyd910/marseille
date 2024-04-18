import React from "react";
import "./MapComponent.css";

const MapComponent = () => {
  return (
    <div className="map">
      <iframe
        title="Google Maps"
        width="100%"
        height="250"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=56%20Gogebashvili%20Street,%20Batumi+(Marseille)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default MapComponent;
