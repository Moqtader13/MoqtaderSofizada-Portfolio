<script>

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
  let isTyping = false;
  const typingElement = document.querySelector(".typing-text");

  function startTypingEffect() {
    if (isTyping || !typingElement) return;
    isTyping = true;

    function type() {
      if (charIndex < textList[textIndex].length) {
        typingElement.textContent += textList[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
      } else {
        setTimeout(() => {
          typingElement.textContent = "";
          charIndex = 0;
          textIndex = (textIndex + 1) % textList.length;
          type();
        }, 1500);
      }
    }

    type();
  }

  document.addEventListener("DOMContentLoaded", () => {
    startTypingEffect();
    window.scrollTo(0, 0); 
  });


  const toggleBtn = document.getElementById("modeToggle");
  const mobileModeToggle = document.getElementById("mobileModeToggle");

  function toggleMode() {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    const modeText = isLight ? "Dark Mode" : "Light Mode";
    toggleBtn.textContent = modeText;
    mobileModeToggle.textContent = modeText;
  }

  toggleBtn.addEventListener("click", toggleMode);
  mobileModeToggle.addEventListener("click", toggleMode);

  
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenu = document.getElementById("closeMenu");

  menuToggle.addEventListener("click", () => {
    mobileNav.style.right = "0";
  });

  closeMenu.addEventListener("click", () => {
    mobileNav.style.right = "-100%";
  });
</script>
