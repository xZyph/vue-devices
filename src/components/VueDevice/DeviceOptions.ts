export const deviceOptions = {
    "apple-watch-s8": {
      colors: ["midnight"],
      options: ["showStripe", "showHeader", "showBtns", "showPower"]
    },
    "apple-watch-ultra": {
      colors: ["titanium"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "galaxy-s8": {
      colors: ["black", "blue"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel-2-xl": {
      colors: ["black"],
      options: ["showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel-6-pro": {
      colors: ["white", "gold", "black"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel": {
      colors: ["silver", "black", "blue"],
      options: ["showStripe", "showSensors", "showBtns", "showPower"]
    },
    "homepod": {
      colors: ["silver"],
      options: ["showStripe", "showHome"]
    },
    "imac-pro": {
      colors: ["spacegray"],
      options: ["showPower"]
    },
    "imac": {
      colors: ["silver", "blue", "green", "pink", "yellow", "orange", "purple"],
      options: ["showPower", "showHome"]
    },
    "ipad-pro-2017": {
      colors: ["silver", "gold", "rosegold", "spacegray"],
      options: ["showHome", "showSensors"]
    },
    "ipad-pro": {
      colors: ["silver", "spacegray"],
      options: ["showBtns", "showSensors"]
    },
    "iphone-14-pro": {
      colors: ["purple", "silver", "black", "gold"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "iphone-14": {
      colors: ["midnight", "purple", "starlight", "red", "blue"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "iphone-8": {
      colors: ["silver", "gold", "spacegray"],
      options: ["showStripe", "showHome", "showSensors", "showBtns", "showPower"]
    },
    "iphone-x": {
      colors: ["silver"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "the-iphone": {
      colors: ["silver"],
      options: ["showSensors", "showBtns", "showHome", "showPower"]
    },
    "macbook-pro-2018": {
      colors: ["silver", "spacegray"],
      options: ["showPower"]
    },
    "macbook-pro": {
      colors: ["silver", "spacegray"],
      options: ["showPower"]
    },
    "macbook": {
      colors: ["silver", "spacegray", "gold", "rosegold"],
      options: ["showPower"]
    },
    "pro-display-xdr": {
      colors: ["silver"],
      options: ["showPower", "showHome"]
    },
    "surface-book": {
      colors: ["silver"],
      options: ["showBtns", "showPower"]
    },
    "surface-pro-2017": {
      colors: ["silver"],
      options: ["showBtns", "showSensors"]
    },
    "surface-studio": {
      colors: ["silver"],
      options: ["showStripe", "showPower"]
    }
  };

export type DeviceType = keyof typeof deviceOptions;