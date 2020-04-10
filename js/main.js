  const cartButton = document.querySelector(".btn-light");    //Эта стркоа создаёт переменную с именем cartButton и оброщается к css классу .btn-light
  const modal = document.querySelector(".moodal");            //Эта стркоа создаёт переменную с именем modal и оброщается к css классу .moodal
  const close = document.querySelector(".btn-close");         //Эта стркоа создаёт переменную с именем close и оброщается к css классу .btn-close

  // cartButton.addEventListener("click", function (event) { |             //это уже функция которая говорит что при клике на  переменную с именем cartButton должно выполняться следущее действие "смотреть ниже"
  //  modal.classList.add("is-open");                        |             //выполняется действие что берётся переменная modal,проссматривается у неё классы и после всего этого с помощью ".add("...")" добавляем тот или иной класс
  // });

  // close.addEventListener("click", function (event) { |               // то же самое что в первом варианте только в этой функции у переменной modal удаляется класс команндой ".remove("...")".
  //   modal.classList.remove("is-open");               |
  // });                                                |


 //Дальше идёт тот же включатель и выключатель модального окна только короче 

 cartButton.addEventListener("click", toggleModal); //
 close.addEventListener("click", toggleModal);

 function toggleModal() {
   modal.classList.toggle("is-open");  //toggle это такая функция которая как бы включает и выключает класс
 }

 new WOW().init();