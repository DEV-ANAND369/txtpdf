// script.js
document.getElementById('generate-pdf').addEventListener('click', function() {
    const element = document.createElement('div');
    const textInput = document.getElementById('text-input').value;

    element.innerHTML = `<h2>Your Text:</h2><p>${textInput}</p>`;
    
    const options = {
        margin: 1,
        filename: 'generated.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
});