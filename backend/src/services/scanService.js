const { exec } = require('child_process');

// 🔥 Função de cálculo de risco
function calculateRisk(data) {
  let score = 0;

  data.forEach(item => {
    if (item.state === 'open') score += 10;

    // portas comuns e risco
    if (item.port === 22) score += 30;   // SSH
    if (item.port === 21) score += 40;   // FTP
    if (item.port === 3389) score += 50; // RDP
    if (item.port === 80) score += 10;   // HTTP
    if (item.port === 443) score += 5;   // HTTPS
  });

  let level = "LOW";
  if (score > 70) level = "CRITICAL";
  else if (score > 40) level = "HIGH";
  else if (score > 20) level = "MEDIUM";

  return { score, level };
}

// 🚀 Função principal de scan
function runScan(target) {
  return new Promise((resolve, reject) => {

    const command = `/home/kali/Desktop/Mini_SOC/scanner/venv/bin/python3 ../scanner/scan.py ${target}`;

    exec(command, (error, stdout, stderr) => {

      // ❌ erro na execução
      if (error) {
        console.error("ERRO EXEC:", error);
        console.error("STDERR:", stderr);
        return reject("Erro ao executar o scan");
      }

      console.log("SAÍDA PYTHON:", stdout);

      try {
        const parsed = JSON.parse(stdout);

        // 🔥 cálculo de risco
        const risk = calculateRisk(parsed);

        // ✅ resposta final
        resolve({
          target,
          risk,
          results: parsed
        });

      } catch (err) {
        console.error("ERRO JSON:", err);
        reject("Erro ao processar resultado");
      }
    });
  });
}

module.exports = { runScan };