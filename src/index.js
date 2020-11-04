/* To-do:
    - fix bug where clicking arrow div doesn't show properly
    - add transition for items hover and btn click and arrow and dropdownlist (same timer for all)
*/

import {
  reset,
  createAnimation,
  styleDropdown,
  styleDropdownList,
  styleDropdownBtn,
  styleDropdownItems,
  toggleDropdownList,
  hideAllDropdowns,
  resizeDropdownList,
} from './helpers';

const dropdown = document.querySelectorAll('.dropdown');

(function styleElements() {
  if (!dropdown) return;

  reset(document.querySelector('body'));
  createAnimation();

  const dropdownBtn = [];
  const dropdownList = [];
  dropdown.forEach((elem) => {
    styleDropdown(elem);
    const btn = elem.querySelector('.dd-btn');
    const list = elem.querySelector('.dd-list');
    if (btn) dropdownBtn.push(btn);
    if (list) dropdownList.push(list);
  });

  if (dropdownBtn.length) {
    dropdownBtn.forEach((btn, i) => {
      styleDropdownBtn(btn);
      btn.addEventListener('click', () => {
        toggleDropdownList(btn, dropdownList[i]);
      });
    });

    if (dropdownList.length) {
      dropdownList.forEach((list) => {
        styleDropdownList(list);
        list.addEventListener('animationend', (e) => {
          if (e.animationName === 'scaleDown') list.style.display = 'none';
        });

        // style each item
        let items = list.querySelectorAll('.dd-item');
        if (items) {
          items = Array.from(items);
          styleDropdownItems(items);
        }
      });
    }

    document.addEventListener('click', (e) => {
      hideAllDropdowns(e, dropdownBtn, dropdownList);
    });

    window.addEventListener('resize', () => {
      resizeDropdownList(dropdownBtn, dropdownList);
    });
  }
})();
