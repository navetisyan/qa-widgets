import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();

    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popState");
    dispatchEvent(navEvent);
  };
  return (
    <div>
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
