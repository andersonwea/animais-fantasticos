const outsideClick = (element, events, callback) => {
  const html = document.documentElement;
  const outside = "data-outside";

  const handleOutsideClick = (event) => {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  };

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
};

export default outsideClick;
