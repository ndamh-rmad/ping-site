function startPing() {
  const signal = document.getElementById("signal");
  const result = document.getElementById("ping-result");

  const start = performance.now();
  fetch("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", { mode: 'no-cors' })
    .then(() => {
      const ping = Math.round(performance.now() - start);
      result.textContent = `البنق: ${ping}ms`;

      if (ping < 60) {
        signal.textContent = "✅";
      } else if (ping < 120) {
        signal.textContent = "🟡";
      } else {
        signal.textContent = "🔴";
      }
    })
    .catch(() => {
      result.textContent = "فشل الاتصال";
      signal.textContent = "❌";
    });
}