export function generate6OTP() {
  const otpLength = 6;
  let otp = "";
  for (let i = 0; i < otpLength; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

export function isValidEmailOrUsername(username, email) {
  const regexForUsername = /^[a-z0-9_\.]+$/;
  const regexForEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValidUsername = regexForUsername.test(username);
  if (!isValidUsername) return { error: "Please enter valid username" };
  else {
    const isValidEmail = regexForEmail.test(email);
    if (!isValidEmail) return { error: "Please enter valid email" };
    else return true;
  }
}
