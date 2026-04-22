const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılacaktır.");
  form.reset();
});