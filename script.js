
     
    function toggleMenu() {
      document
        .getElementById("navLinks")
        .classList.toggle("active");
    }

    // Close menu when link clicked
    document
     .querySelectorAll("#navLinks a")
      .forEach(link => {

        link.addEventListener("click", () => {
          document
            .getElementById("navLinks")
            .classList.remove("active");
        });

      });

    document
      .getElementById("contactForm")
      .addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
          document.getElementById("name").value;

        const message =
          document.getElementById("message");

        message.innerText =
          "✓ Thank you, " + name +
          "! Your message has been received.";

        message.style.display = "block";

        this.reset();
      });

    const elements =
      document.querySelectorAll(
        ".service, .project, .stat"
      );

    const observer =
      new IntersectionObserver(entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
              "translateY(0)";

          }

        });

      }, {
        threshold: 0.15
      });

    elements.forEach(element => {

      element.style.opacity = "0";
      element.style.transform =
        "translateY(30px)";
      element.style.transition =
        "0.7s ease";

      observer.observe(element);

    });

