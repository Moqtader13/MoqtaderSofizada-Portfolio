    function openGmailCompose() {
      const email = "moqtadersofizada@gmail.com";
      const subject = encodeURIComponent("Project Request from Portfolio Website");
      const body = encodeURIComponent("Hi Moqtader, I would like to discuss a project with you.");
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }

    const textList = [
      "Hello, I’m Moqtader Sofizada",
      "MOQ 👨‍💻 Designer",
      "Based In Kabul"
    ];

    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector(".typing-text");

    function typeText() {
      if (charIndex < textList[textIndex].length) {
        typingElement.textContent += textList[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
      } else {
        setTimeout(() => {
          typingElement.textContent = "";
          charIndex = 0;
          textIndex = (textIndex + 1) % textList.length;
          typeText();
        }, 1500);
      }
    }

    document.addEventListener("DOMContentLoaded", typeText);

    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      toggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
      document.getElementById("mobileModeToggle").textContent = isLight ? "Dark Mode" : "Light Mode";
    });

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const closeMenu = document.getElementById("closeMenu");

    menuToggle.addEventListener("click", () => {
      mobileNav.style.right = "0";
    });

    closeMenu.addEventListener("click", () => {
      mobileNav.style.right = "-100%";
    });

    const mobileModeToggle = document.getElementById("mobileModeToggle");
    mobileModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      toggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
      mobileModeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
    });

    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });