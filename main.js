        // Set the reveal time (August 1, 2024, 3:50 PM IST)
        const revealTime = new Date('2024-08-01T15:50:00+05:30').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = revealTime - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById('countdown').classList.add('hidden');
                document.getElementById('bubu').classList.add('hidden');
                document.getElementById('congratsMessage').classList.remove('hidden');
                startConfetti();
            }
        }

        const countdownTimer = setInterval(updateCountdown, 1000);

        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }

        function startConfetti() {
            setInterval(createConfetti, 100);
        }

        updateCountdown();// Add JS here