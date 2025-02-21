function toggleTransparency() {
    if (isTransparent) {
      document.body.style.background = "rgba(255, 255, 255, 1)";
      document.body.style.backdropFilter = "none";
      document.querySelectorAll("*").forEach(el => el.style.opacity = "1");
    } else {
      document.body.style.background = "rgba(255, 255, 255, 0.6)";
      document.body.style.backdropFilter = "blur(10px)";
      document.querySelectorAll("*").forEach(el => el.style.opacity = "0.7");
    }
    isTransparent = !isTransparent;
  }
  
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "toggle_transparency") {
      toggleTransparency();
    }
  });
  