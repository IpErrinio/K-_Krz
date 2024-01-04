let obecnyGracz = 'X';
let planszaGry = ['', '', '', '', '', '', '', '', ''];
let graTrwa = true;

function wykonajRuch(index) {
  if (planszaGry[index] === '' && graTrwa) {
    planszaGry[index] = obecnyGracz;
    document.getElementsByClassName('komorka')[index].innerText = obecnyGracz;
    
    if (sprawdzZ()) {
      alert(`Gracz ${obecnyGracz} wygrywa!`);
      zresetujGre();
    } else if (planszaGry.every(komorka => komorka !== '')) {
      alert('Remis!');
      zresetujGre();
    } else {
      obecnyGracz = obecnyGracz === 'X' ? 'O' : 'X';
    }
  }
}

function sprawdzZ() {
  const kombinacjeZ = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return kombinacjeZ.some(kombinacja => {
    const [a, b, c] = kombinacja;
    return planszaGry[a] !== '' && planszaGry[a] === planszaGry[b] && planszaGry[a] === planszaGry[c];
  });
}

function zresetujGre() {
  obecnyGracz = 'X';
  planszaGry = ['', '', '', '', '', '', '', '', ''];
  graTrwa = true;

  const komorki = document.getElementsByClassName('komorka');
  Array.from(komorki).forEach(komorka => {
    komorka.innerText = '';
  });
}
