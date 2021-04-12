  (() => {
    const opens = document.querySelectorAll('.js-open');

    for (let i = 0; i < opens.length; i++) {
      modalEvent(opens, i);
    }
  })();

  function modalEvent(element, index) {
    const wrappers = document.querySelectorAll('.wrapper');
    const closes = document.querySelectorAll('.js-close');
    const modalBody = document.querySelectorAll('.modal-body');

    // ボタンクリックでopenクラス付与
    element[index].addEventListener('click', () => {
      wrappers[index].classList.add('open');
    });

    // openクラス除去イベント
    wrappers[index].addEventListener('click', () => {
      wrappers[index].classList.remove('open');
    });

    closes[index].addEventListener('click', () => {
      wrappers[index].classList.remove('open');
    });

    // modal-bodyへのクリックイベント遮断
    modalBody[index].addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
