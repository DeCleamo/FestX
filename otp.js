function sendOTP() {
    const email = document.getElementById('email').value;
    const otpverify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(1000 + Math.random() * 9000); 

    let emailBody = `<h2>Your OTP is:</h2> <h3>${otp_val}</h3>`;

    Email.send({
        SecureToken: "14456ceb-717c-40a5-8d88-16dccb8a3c37",
        To: email,
        From: "rishuag233@gmail.com",
        Subject: "Your OTP Code",
        Body: emailBody
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent to your email: " + email);
            otpverify.style.display = "flex";

            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert("✅ OTP Verified Successfully!");
                } else {
                    alert("❌ Incorrect OTP. Please try again.");
                }
            });
        } else {
            alert("❌ Failed to send OTP. Try again.");
        }
    });
}
