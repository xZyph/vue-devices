export const deviceOptions = {
    "apple-watch-s8": {
      colors: ["midnight"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showBtns", "showPower"]
    },
    "apple-watch-ultra": {
      colors: ["titanium"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "galaxy-s8": {
      colors: ["black", "blue"],
      orientations: ["portrait", "landscape"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel-2-xl": {
      colors: ["black"],
      orientations: ["portrait"],
      options: ["showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel-6-pro": {
      colors: ["white", "gold", "black"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "google-pixel": {
      colors: ["silver", "black", "blue"],
      orientations: ["portrait"],
      options: ["showStripe", "showSensors", "showBtns", "showPower"]
    },
    "homepod": {
      colors: ["silver"],
      orientations: ["portrait"],
      options: ["showStripe", "showHome"]
    },
    "imac-pro": {
      colors: ["spacegray"],
      orientations: ["landscape"],
      options: ["showPower"]
    },
    "imac": {
      colors: ["silver", "blue", "green", "pink", "yellow", "orange", "purple"],
      orientations: ["landscape"],
      options: ["showPower", "showHome"]
    },
    "ipad-pro-2017": {
      colors: ["silver", "gold", "rosegold", "spacegray"],
      orientations: ["portrait"],
      options: ["showHome", "showSensors"]
    },
    "ipad-pro": {
      colors: ["silver", "spacegray"],
      orientations: ["portrait"],
      options: ["showBtns", "showSensors"]
    },
    "iphone-14-pro": {
      colors: ["purple", "silver", "black", "gold"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "iphone-14": {
      colors: ["midnight", "purple", "starlight", "red", "blue"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower", "showHome"]
    },
    "iphone-8": {
      colors: ["silver", "gold", "spacegray"],
      orientations: ["portrait"],
      options: ["showStripe", "showHome", "showSensors", "showBtns", "showPower"]
    },
    "iphone-x": {
      colors: ["silver"],
      orientations: ["portrait"],
      options: ["showStripe", "showHeader", "showSensors", "showBtns", "showPower"]
    },
    "the-iphone": {
      colors: ["silver"],
      orientations: ["portrait"],
      options: ["showSensors", "showBtns", "showHome", "showPower"]
    },
    "macbook-pro-2018": {
      colors: ["silver", "spacegray"],
      orientations: ["landscape"],
      options: ["showPower"]
    },
    "macbook-pro": {
      colors: ["silver", "spacegray"],
      orientations: ["landscape"],
      options: ["showPower"]
    },
    "macbook": {
      colors: ["silver", "spacegray", "gold", "rosegold"],
      orientations: ["landscape"],
      options: ["showPower"]
    },
    "pro-display-xdr": {
      colors: ["silver"],
      orientations: ["landscape"],
      options: ["showPower", "showHome"]
    },
    "surface-book": {
      colors: ["silver"],
      orientations: ["landscape"],
      options: ["showBtns", "showPower"]
    },
    "surface-pro-2017": {
      colors: ["silver"],
      orientations: ["landscape"],
      options: ["showBtns", "showSensors"]
    },
    "surface-studio": {
      colors: ["silver"],
      orientations: ["landscape"],
      options: ["showStripe", "showPower"]
    }
  };

export type DeviceType = keyof typeof deviceOptions;