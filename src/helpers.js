export {
  reset,
  styleDropdown,
  styleDropdownList,
  showDropdownList,
  styleDropdownBtn,
  styleDropdownItems,
};

const darkGreen = '#056b68';
const lgGreen = '#e5f6f5';
const txtColor = '#676262';
const boxShadow = '3px 3px 5px 2px rgba(5,107,104,0.15)';

const reset = (elem) => {
  elem.style.boxSizing = 'border-box';
  elem.style.margin = 0;
  elem.style.padding = 0;
};

const styleDropdown = (elem) => {
  reset(elem);
  elem.style.fontFamily = 'Helvetica';
  elem.style.width = '300px';
  elem.style.fontSize = '10px';
  elem.style.display = 'inline-block';
  elem.style.position = 'relative';
};

const styleDropdownList = (elem) => {
  elem.style.display = 'none';
  elem.style.marginTop = '1rem';
  elem.style.backgroundColor = '#fff';
  elem.style.borderRadius = '.5rem';
  elem.style.boxShadow = `${boxShadow}`;
};

const showDropdownList = (btn, list) => {
  btn.style.borderColor =
    btn.style.borderColor === 'rgb(255, 255, 255)'
      ? `${darkGreen}`
      : 'rgba(255, 255, 255)';

  const arrow = btn.querySelector('.arrow');
  // search for arrow orientation and change it
  if (list) {
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  }
};

const styleDropdownBtn = (elem) => {
  elem.style.fontSize = '1.3rem';
  elem.style.backgroundColor = '#fff';
  elem.style.color = `${txtColor}`;
  elem.style.padding = '.7rem 1.5rem';
  elem.style.border = '.1rem solid #fff';
  elem.style.borderRadius = '.5rem';
  elem.style.cursor = 'pointer';
  elem.style.boxShadow = `${boxShadow}`;
  elem.style.display = 'flex';
  elem.style.justifyContent = 'space-between';
  elem.style.alignItems = 'center';
  elem.appendChild(createArrow());
};

const styleDropdownItems = (items) => {
  // Fix border when first item in list is active
  items[0].style.borderTopLeftRadius = 'inherit';
  items[0].style.borderTopRightRadius = 'inherit';

  items.forEach((item) => {
    reset(item);
    if (item.classList.contains('dd-active')) {
      item.style.backgroundColor = `${lgGreen}`;
    }

    item.style.display = 'block';
    item.style.padding = '.7rem 1.5rem';
    item.style.textDecoration = 'none';
    item.style.fontSize = '1.3rem';
    item.style.color = `${txtColor}`;
  });
};

const createArrow = () => {
  const arrowDiv = document.createElement('div');
  const arrow = document.createElement('i');
  arrow.classList.add('arrow');
  arrowDiv.style.width = '1.6rem';
  arrowDiv.style.height = '1.6rem';
  arrowDiv.style.display = 'flex';
  arrowDiv.style.justifyContent = 'center';
  arrowDiv.style.alignItems = 'center';
  arrowDiv.style.backgroundColor = `${lgGreen}`;
  arrowDiv.style.borderRadius = '50%';
  arrow.style.display = 'inline-block';
  arrow.style.border = `solid ${darkGreen}`;
  arrow.style.borderWidth = '0 .1rem .1rem 0';
  arrow.style.padding = '.2rem';
  arrow.style.transform = 'rotate(45deg)';
  arrowDiv.appendChild(arrow);
  return arrowDiv;
};

const setArrowDirection = (dir, arrow) => {
  arrow.style.transform = `rotate(${dir}deg)`;
};
