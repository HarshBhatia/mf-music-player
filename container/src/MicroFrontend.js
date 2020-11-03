import React, { useEffect } from "react";

function MicroFrontend({ name, bundle }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.crossOrigin = "";
    script.src = bundle;
    script.onload = () => {
      renderMicroFrontend();
    };
    document.head.appendChild(script);

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`}>Loading {name}</main>;
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
