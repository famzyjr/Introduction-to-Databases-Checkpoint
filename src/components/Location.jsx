import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  // const mapStyles = {
  //   height: "450px",
  //   width: "600%",
  // };

  // const defaultCenter = {
  //   lat: 37.7749, // Replace with your desired latitude
  //   lng: -122.4194, // Replace with your desired longitude
  // };

  return (
    //   <LoadScript
    //     googleMapsApiKey= "https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Alafia, Surulere,Lagos, Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    //     <GoogleMap
    //       mapContainerStyle={mapStyles}
    //       zoom={10}
    //       center={defaultCenter}
    //     />
    //   </LoadScript>
    // );
    <div>
      <p>
        <iframe
          id="map-canvas"
          className="map_part"
          width="600"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Surulere, Lagos, Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          Powered by{" "}
          <a href="https://www.googlemapsgenerator.com">
            html embed google maps
          </a>{" "}
          and{" "}
          <a href="https://xn--samla-ln-utan-uc-job.se/">samla lån utan uc</a>
        </iframe>
      </p>
    </div>
  );
};

export default MapComponent;
