function openWhatsApp() {
  const phone = "919876543210"; // Use your business WhatsApp number
  const message = encodeURIComponent(
    "Hi! I'm interested in your housekeeping services."
  );
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}
