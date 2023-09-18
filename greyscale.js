function createGrayColormap(M, N) {
  // Verifique se o número de cores RGB (M) é maior que o número de entradas na colormap (N).
  if (M <= N) {
    console.log("O número de cores RGB (M) deve ser maior que o número de entradas na colormap (N).");
    return;
  }

  // Inicialize a colormap como um array vazio.
  const colormap = [];

  // Calcule o passo entre os valores na escala de tons de cinza.
  const grayStep = 255 / (N - 1);

  // Preencha a colormap com tons de cinza, interpolando entre preto (0, 0, 0) e branco (255, 255, 255).
  for (let i = 0; i < N; i++) {
    const grayValue = Math.round(i * grayStep);
    colormap.push(`rgb(${grayValue}, ${grayValue}, ${grayValue})`);
  }

  // Se houver mais cores RGB do que entradas na colormap, distribua as cores restantes igualmente.
  if (M > N) {
    const extraColors = M - N;
    const colorStep = Math.floor(N / extraColors);

    for (let i = 0; i < extraColors; i++) {
      colormap[i * colorStep] = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  }

  return colormap;
}

// Exemplo de uso: criar uma colormap com 8 entradas usando 12 cores RGB.
const M = 12;
const N = 8;
const colormap = createGrayColormap(M, N);

// Exibir a colormap resultante no console.
console.log(colormap);
