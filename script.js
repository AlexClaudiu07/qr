document.getElementById('downloadButton').addEventListener('click', function() {
    // Calea relativă către fișierul PNG
    const fileUrl = 'images/qr.png';  // Asigură-te că această cale este corectă relativ la fișierul HTML
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'qr.png';  // Numele sub care fișierul va fi descărcat
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
