document.addEventListener('DOMContentLoaded', () => {
    const adviceText = document.getElementById('advice-text');
    const newAdviceBtn = document.getElementById('new-advice-btn');


    const fetchAdvice = () => {
        adviceText.textContent = 'Loading...';
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                adviceText.textContent = data.slip.advice;
            })
            .catch(error => {
                console.error('Error fetching advice:', error);
                adviceText.textContent = 'Failed to fetch advice. Please try again later.';
            });
    };


    newAdviceBtn.addEventListener('click', fetchAdvice);

    fetchAdvice();
});
