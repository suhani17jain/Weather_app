import React from "react";

const Debounce = (func) => {
    let timer
    return function(...args) {
      const context = this;
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    }
}

export default Debounce;