/** @format */

let register_btn = document.getElementById("registerBtn");

let register_email = document.getElementById("register-email");
let register_password = document.getElementById("register-password");

const checkData = (e) => {
  e.preventDefault();
  if (register_email.value !== "" && register_password !== "")
    showToast("ثبت شما با موفقیت انجام شد");
  else showToast("لطفا ایمیل و رمز عبور را وارد کنید");
};
register_btn.addEventListener("click", checkData);