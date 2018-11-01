/*
const throttle = (func, limit) => {
  let inThrottle;

  return () => {
    const args = arguments;

    if (!inThrottle) {
      func.apply(args);

      inThrottle = true;

      setTimeout(
        () => {
          inThrottle = false;
        },
        limit
      );

      //throttled();

      //clearTimeout(throttled);
    }
  }
}
*/
/*
const throttle2 = (callback, delay, noTrailing, debounceMode) => {
  let timeoutID;
  let lastExec = 0;
  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  function wrapper() {
    let self = this;
    let elapsed = Number(new Date()) - lastExec;
    let args = arguments;

    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }
  }
}

const debounce = (callback, delay, atBegin) => {
  return (callback === undefined)
    ? throttle(delay, atBegin, false)
    : throttle(delay, callback, atBegin !== false)
}
*/
/*
const throttle = (delay, noTrailing, callback, debounceMode) => {
	var timeoutID;
	var lastExec = 0;
	
	if (typeof noTrailing !== 'boolean') {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}
	
	function wrapper() {
		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;
		
		function exec() {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		function clear() {
			timeoutID = undefined;
		}
		if (debounceMode && !timeoutID) {
			exec();
		}

		if ( timeoutID ) {
			clearTimeout(timeoutID);
    }
    
		if (debounceMode === undefined && elapsed > delay) {
			exec();
		} else if (noTrailing !== true) {
			timeoutID = setTimeout(
        debounceMode
        ? clear
        : exec,
        debounceMode === undefined
        ? delay - elapsed
        : delay
      );
		}
  }
  
	wrapper.cancel = function () {
		clearTimeout(timeoutID);
	};
	
	return wrapper;
}
*/
function throttle(wait, func, immediate) {
  let timeout;
	return function() {
    let context = this;
    let args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) {
        func.apply(context, args);
      }
		}
		let callNow = immediate && !timeout;
		if (!timeout) {
      timeout = setTimeout(later, wait);
    }
		if (callNow) {
      func.apply(context, args);
    }
	};
}

export default throttle;