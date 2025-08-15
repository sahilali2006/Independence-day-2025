    // GSAP animations
    gsap.from("header h1", {y: -50, opacity: 0, duration: 1});
    gsap.from("header p", {y: 50, opacity: 0, duration: 1, delay: 0.5});
    gsap.from(".chakra", {scale: 0, opacity: 0, duration: 1, delay: 1});

    gsap.utils.toArray("section").forEach((sec, i) => {
        gsap.from(sec, {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: i * 0.2
        });
    });

    // Floating particles
    const colors = ["#ff9933", "#ffffff", "#138808"];
    for(let i=0; i<20; i++){
        let particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);
        let size = Math.random() * 10 + 5;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
    }