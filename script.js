window.addEventListener('DOMContentLoaded', () => {
    let text = ""

    document.getElementById("submit").addEventListener('click', () => {
        text = document.getElementById('text').textContent
        const result = document.getElementById("result");
        fetch(`https://api.api-ninjas.com/v1/sentiment?text=${text}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'eY2xTnDHPEinZ/veCgDAeA==5Q2KCOZs3dYIKMm8'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
                    <h3>Sentimence Score: ${(data.score * 100).toFixed(2)}</h3>
                    <h4>Sentimence Analysis: ${data.sentiment}.</h2>
                `;
            });
    });
});


