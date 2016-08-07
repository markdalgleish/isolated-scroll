const calculateHeight = el => {
  // Source adapted from: http://youmightnotneedjquery.com/#outer_height_with_margin
  let height = el.offsetHeight;
  const { marginTop, marginBottom } = getComputedStyle(el);

  height += parseInt(marginTop, 10) + parseInt(marginBottom, 10);
  return height;
};

// Source adapted from: http://stackoverflow.com/a/16324762
const makeHandler = el => event => {
  const { scrollTop, scrollHeight } = el;
  const { type, detail, wheelDelta } = event;
  const height = calculateHeight(el);
  const delta = (type === 'DOMMouseScroll' ? detail * -40 : wheelDelta);
  const up = delta > 0;

  const prevent = () => {
    event.stopPropagation();
    event.preventDefault();
    event.returnValue = false;

    return false;
  };

  if (!up && -delta > scrollHeight - height - scrollTop) {
    el.scrollTop = scrollHeight;
    return prevent();
  } else if (up && delta > scrollTop) {
    el.scrollTop = 0;
    return prevent();
  }
};

export default el => {
  const handler = makeHandler(el);

  const addEvent = (el.addEventListener || el.attachEvent).bind(el);
  const removeEvent = (el.removeEventListener || el.detachEvent).bind(el);

  addEvent('mousewheel', handler);
  addEvent('DOMMouseScroll', handler);

  return () => {
    removeEvent('mousewheel', handler);
    removeEvent('DOMMouseScroll', handler);
  };
};
