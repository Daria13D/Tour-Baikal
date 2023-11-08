//кнопка-гамбургер
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

//кнопка открытия ответов
$(".spoiler_title").click(function () {
  var container = $(this).parents(".spoiler_wrap");
  var answer = container.find(".spoiler_content");
  var trigger = container.find(".arrow-t");

  answer.slideToggle(500);

  if (trigger.hasClass("arrow-b")) {
    trigger.removeClass("arrow-b");
  } else {
    trigger.addClass("arrow-b");
  }
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  } else {
    container.addClass("expanded");
  }
});

// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Определяем функции для проверки формы
function validateForm() {
  // Получение значений элементов формы
  var name = document.contactForm.name.value;
  var surname = document.contactForm.surname.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var link = document.contactForm.link.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies[]");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // Заполняем массив хобби выбранными значениями
      hobbies.push(checkboxes[i].value);
    }
  }

  // Определяем переменные ошибок со значением по умолчанию
  var nameErr =
    (surnameErr =
    emailErr =
    mobileErr =
    countryErr =
    genderErr =
    linkErr =
    hobbiesErr =
      true);

  // Проверяем имя
  if (name == "") {
    printError("nameErr", "Пожалуйста, введите ваше имя");
  } else {
    var regex = /^[a-яё]+(?:[ -][a-яё]+)*$/i;
    if (regex.test(name) === false) {
      printError("nameErr", "Пожалуйста, введите корректное имя");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }
  // Проверяем фамилию
  if (surname == "") {
    printError("surnameErr", "Пожалуйста, введите вашу фамилию");
  } else {
    var regex = /^[a-яё]+(?:[ -][a-яё]+)*$/i;
    if (regex.test(surname) === false) {
      printError("surnameErr", "Пожалуйста, введите корректную фамилию");
    } else {
      printError("surnameErr", "");
      surnameErr = false;
    }
  }

  // Проверяем адрес электронной почты
  if (email == "") {
    printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
  } else {
    // Регулярное выражение для базовой проверки электронной почты
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError(
        "emailErr",
        "Пожалуйста, введите действительный адрес электронной почты"
      );
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Проверяем номер мобильного телефона
  if (mobile == "") {
    printError(
      "mobileErr",
      "Пожалуйста, введите номер вашего мобильного телефона"
    );
  } else {
    var regex = /^([+]?[0-9\s-\(\)]{11,25})*$/i;
    if (regex.test(mobile) === false) {
      printError(
        "mobileErr",
        "Пожалуйста, введите действительный номер мобильного телефона"
      );
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  var regex = /^[a-яё]+(?:[ -][a-яё]+)*$/i;
  // Проверяем город
  if (country == "") {
    printError("countryErr", "Пожалуйста, выберите ваш город");
  } else if (regex.test(country) === false) {
    printError("countryErr", "Пожалуйста, введите корректное название города");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  // Количество человек
  if (gender == "") {
    printError("genderErr", "Пожалуйста, выберите количество человек");
  } else if (gender < 0) {
    printError(
      "genderErr",
      "Пожалуйста, выберите корректное количество человек"
    );
  } else if (gender == 0) {
    printError(
      "genderErr",
      "Пожалуйста, выберите корректное количество человек"
    );
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  var regex =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (link == "") {
    printError(
      "linkErr",
      "Пожалуйста, оставьте ссылку на свою социальную сеть VK, чтобы мы смогли связать с вами"
    );
  } else if (regex.test(link) === false) {
    printError("linkErr", "Пожалуйста, введите ссылку на соц. сеть корректно");
  } else {
    printError("linkErr", "");
    linkErr = false;
  }

  if (hobbies == "") {
    printError("hobbiesErr", "Пожалуйста, выберите нужный пункт");
  } else if (hobbies.length > 1) {
    printError("hobbiesErr", "Пожалуйста, выберите один пункт");
  } else {
    printError("hobbiesErr", "");
    hobbiesErr = false;
  }
  // Запрещаем отправку формы в случае ошибок
  if (
    (nameErr ||
      emailErr ||
      mobileErr ||
      countryErr ||
      genderErr ||
      linkErr ||
      hobbies) == true
  ) {
    return false;
  } else {
    // Создаем строки из входных данных для предварительного просмотра
    var dataPreview =
      "Вы ввели следующие данные: \n" +
      "Имя: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Номер: " +
      mobile +
      "\n" +
      "Город: " +
      country +
      "\n" +
      "Пол: " +
      gender +
      "\n";
    date + "\n";
    if (hobbies.length) {
      dataPreview += "Hobbies: " + hobbies.join(", ");
    }
    // Отображаем входные данные в диалоговом окне перед отправкой формы
    alert(dataPreview);
  }
}

//раскрытие блоков программы туров
function toggleBlock(blockId) {
  var block = document.getElementById("program-" + blockId);
  if (block.style.display != "block") {
    block.style.display = "block"; // Показываем блок, если он был скрыт
  } else {
    block.style.display = "none"; // Скрываем блок, если он был показан
  }
}
function openCards() {
  var block = document.getElementById("cards");
  var btnOpen = document.getElementById("btnOpen");
  if (block.style.display != "block") {
    block.style.display = "block"; // Показываем блок, если он был скрыт
    btnOpen.style.display = "none";
  }
}
