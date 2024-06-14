const id_Exp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
const password_Exp = /^[a-zA-Z0-9!-~]{8,15}$/;
const names_Exp = /^[가-힣]{2,}$/;
const email_Exp = /^\S{1,}@\S{1,}.com$/;

id.addEventListener("input", function () {
  if (id_Exp.test(id.value)) {
    id2.style.color = "green";
    id2.innerHTML = "OK!";
  } else {
    id2.style.color = "red";
    id2.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

password.addEventListener("input", function () {
  if (password_Exp.test(password.value)) {
    password2.style.color = "green";
    password2.innerHTML = "OK!";
  } else {
    password2.style.color = "red";
    password2.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

password_check.addEventListener("input", function () {
  if (password.value === password_check.value) {
    password_check2.style.color = "green";
    password_check2.innerHTML = "OK!";
  } else {
    password_check2.style.color = "red";
    password_check2.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});

names.addEventListener("input", function () {
  if (names_Exp.test(names.value)) {
    names2.style.color = "green";
    names2.innerHTML = "OK!";
  } else {
    names2.style.color = "red";
    names2.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

email.addEventListener("input", function () {
  if (email_Exp.test(email.value)) {
    email2.style.color = "green";
    email2.innerHTML = "OK!";
  } else {
    email2.style.color = "red";
    email2.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  }
});
