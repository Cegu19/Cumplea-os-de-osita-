document.addEventListener("DOMContentLoaded", function() {
    // Iniciar audio de fondo
    const backgroundAudio = document.getElementById("background-audio");
    backgroundAudio.play();

    // Confetti effect
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }

    // Fireworks effect
    const container = document.querySelector('.container');
    setInterval(() => {
        createFirework();
    }, 2000);

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        container.appendChild(firework);

        setTimeout(() => {
            createParticles(firework);
        }, 1000);
        
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    function createParticles(firework) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 100;
            particle.style.setProperty('--x', `${Math.cos(angle) * radius}px`);
            particle.style.setProperty('--y', `${Math.sin(angle) * radius}px`);
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Balloons effect
    const balloonsContainer = document.querySelector('.balloons');
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloonsContainer.appendChild(balloon);
        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
    setInterval(createBalloon, 1000);
});