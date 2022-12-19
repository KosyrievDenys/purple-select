document.addEventListener('DOMContentLoaded', function () {

  let selected = document.getElementsByClassName('selected');
  let borderChoice = document.getElementsByClassName('border-choice');
  for (let i = 0; i < borderChoice.length; i++) {
    borderChoice[i].addEventListener('click', function () {
      selected[i].classList.toggle('selected-active');
    })
  }

  let selectedSearch = document.getElementsByClassName('selected-search');
  let selectedIcon = document.getElementsByClassName('selected-icon');
  let selectedBlock = document.getElementsByClassName('selected-block');
  let selectedList = document.getElementsByClassName('selected-list');
  let selectedItem = document.getElementsByClassName('selected-item');
  let selectedText = document.getElementsByClassName('selected-text');
  let selectedIconCheck = document.getElementsByClassName('selected-icon-check');
  for (let k = 0; k < selectedSearch.length; k++) {
    for (let i = 0; i < selectedBlock.length; i++) {
      if (selectedItem[i].querySelector('.selected-list').children.length > 0) {
        selectedIcon[i].classList.toggle('selected-icon-active');
        selectedIcon[i].addEventListener('click', function () {
          selectedIcon[i].classList.toggle('selected-icon-active-click');
          selectedList[i + 1].classList.toggle('selected-list-active');
        })
      }
      selectedText[i].addEventListener('click', function () {
        for (let v = 0; v < selectedIconCheck.length; v++) {
          selectedIconCheck[v].classList.remove('selected-icon-check-active')
        }
        selectedSearch[k].textContent = selectedText[i].innerHTML;
        selectedIconCheck[i].classList.add('selected-icon-check-active');
        selectedIconCheck[i].closest('.external-item').querySelector('.selected-icon-check').classList.add('selected-icon-check-active');
      })
    }
    for (let j = 0; j < selected.length; j++) {
      document.addEventListener('click', (e) => {
        if (!selected[j].contains(e.srcElement)) {
          selected[j].classList.remove('selected-active');
        }
      })
    }
  }
});