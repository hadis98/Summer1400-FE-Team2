/** @format */

let register_btn = document.getElementById("registerBtn");

const checkData = (e) => {
  e.preventDefault();
  showToast("ثبت شما با موفقیت انجام شد");
};
register_btn.addEventListener("click", checkData);