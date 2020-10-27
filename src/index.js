/* To-do:
    - create separate module for style functions (helpers.js)
    - add light and dark class (dd-light and dd-dark)
*/

import {
  reset,
  styleDropdown,
  styleDropdownList,
  styleDropdownBtn,
  styleDropdownItems,
  showDropdownList,
} from './helpers';

const dropdown = document.querySelectorAll('.dropdown');

(function styleElements() {
  if (!dropdown) return;

  reset(document.querySelector('body'));

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
        showDropdownList(btn, dropdownList[i]);
      });
    });

    if (dropdownList.length) {
      dropdownList.forEach((list) => {
        styleDropdownList(list);

        // style each item
        let items = list.querySelectorAll('.dd-item');
        if (items) {
          items = Array.from(items);
          styleDropdownItems(items);
        }
      });
    }
  }
})();
