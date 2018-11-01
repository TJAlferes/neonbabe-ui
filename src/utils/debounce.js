/*
const debounce = (func, wait) => {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  function later() {
    let last = Date.now() - timestamp;  // Number()?

    if ((last < wait) && (last >= 0)) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      context = null;
      args = null;
    }
  }

  let debounced = () => {
    context = this;
    args = arguments;
    timestamp = Date.now();  // Number()?
    if (!timeout) {
      timeout = setTimeout(later, wait);
      result = func.apply(context, args);
      context = null;
      args = null; 
    }

    return result;
  }

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = null;
      args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  }

  return debounced;
}
*/
const debounce = (func, wait, immediate) => {
  let timeout;
  return () => {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
}

export default debounce;