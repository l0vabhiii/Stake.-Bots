let demoCount = 0;
const demoLimit = 5;
const bypassCode = "MIDOWOWNER";

function checkLogin(user, email, code) {
  if (code === bypassCode) {
    alert("Bypass activated!");
    return true;
  }
  if (demoCount >= demoLimit) {
    alert("Demo limit reached. Contact WhatsApp to unlock.");
    return false;
  }
  // Save to Google Sheet
  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify({ user, email }),
    headers: { "Content-Type": "application/json" }
  });
  demoCount++;
  return true;
}
