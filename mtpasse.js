function generatePassword() {
   const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const minuscules = "abcdefghijklmnopqrstuvwxyz";
   const chiffres = "1234567890";
   const symboles = "!@#$%^&*()-_=+[]{}|;:,.<>?";

   const chars = majuscules + minuscules + chiffres + symboles;

   const length = parseInt(document.getElementById('passwordLength').value, 10);

   if (isNaN(length) || length < 12 || length > 128) {
       alert('La longueur doit être comprise entre 12 et 128 caractères.');
       return;
   }

   let password = "";

   for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * chars.length);
       password += chars.charAt(randomIndex);
   }

   document.getElementById('password').value = password;
}

document.getElementById('generateBtn').addEventListener('click', generatePassword);

document.getElementById('copy').addEventListener('click', function () {
   const passwordField = document.getElementById('password');
   passwordField.select();
   document.execCommand('copy');
   alert('Mot de passe copié dans le presse-papier !');
});

