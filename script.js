function downloadCard() {
    const card = document.getElementById('card'); // Sélectionne la carte
    html2canvas(card).then(canvas => {
      // Convertit le canvas en URL d'image
      const link = document.createElement('a');
      link.download = 'carte_dbia.png'; // Nom du fichier
      link.href = canvas.toDataURL('image/png');
      link.click(); // Déclenche le téléchargement
    });
  }
  
  console.log("Carte responsive avec téléchargement prête !");
  