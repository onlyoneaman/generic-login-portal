import React from "react";

const IFrameComponent = ({url}) => {
  if(!url) url = "https://www.youtube.com/embed/2uwThj8-y3I";
  return(
    <div className="iframe-container">
      <iframe
        width="560px"
        height="315px"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default IFrameComponent