let scanCount = 0;

document.getElementById("scanBtn").addEventListener("click", () => {
  const bar = document.getElementById("bar");
  const status = document.getElementById("status");
  const details = document.getElementById("details");
  const button = document.getElementById("scanBtn");

  button.disabled = true;
  button.textContent = "Scanning...";
  status.textContent = "🧠 Scanning system files...";
  details.textContent = "Please wait...";

  bar.style.width = "0%";
  let progress = 0;

  const scan = setInterval(() => {
    progress += 3;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(scan);
      scanCount++;

      if (scanCount % 3 === 0) {
        // Every 3rd scan: virus found
        bar.style.background = "linear-gradient(90deg, #ff0033, #ff6600)";
        status.textContent = "⚠️ Threat Detected!";
        details.textContent = "1 malware quarantined successfully!";
      } else {
        // Normal scans: system clean
        bar.style.background = "linear-gradient(90deg, #00e676, #00ffaa)";
        status.textContent = "✅ No Threats Found";
        details.textContent = "Your system is clean and secure.";
      }

      button.disabled = false;
      button.textContent = "Scan Full System";
    }
  }, 100);
});
