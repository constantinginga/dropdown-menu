export {
  reset,
  createAnimation,
  styleDropdown,
  styleDropdownList,
  toggleDropdownList,
  hideAllDropdowns,
  styleDropdownBtn,
  styleDropdownItems,
  resizeDropdownList,
};

const LIGHT = 'rgb(255, 255, 255)';
const DARK_GREEN = 'rgb(5, 107, 104)';
const LIGHT_GREEN = '#e5f6f5';
const TXT_COLOR = 'rgb(103, 98, 98)';
const BOX_SHADOW = '3px 3px 5px 2px rgba(5,107,104,0.15)';
const ARROW_DOWN = 'rotate(45deg)';
const ARROW_UP = 'rotate(225deg)';
const SCALEDOWN_ANIM = 'scaleDown 500ms ease-in';
const PADDING_LARGE = '.7rem 1.5rem';
const PADDING_SMALL = '.7rem';

const reset = (elem) => {
  elem.style.boxSizing = 'border-box';
  elem.style.margin = 0;
  elem.style.padding = 0;
};

const createAnimation = () => {
  const style = document.createElement('style');
  const keyFrames = `@keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @keyframes scaleDown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }`;
  style.innerHTML = keyFrames;
  document.head.appendChild(style);
};

const styleDropdown = (elem) => {
  reset(elem);
  elem.style.fontFamily = 'Helvetica';
  elem.style.width = '300px';
  elem.style.minWidth = '150px';
  elem.style.fontSize = '10px';
  elem.style.display = 'inline-block';
  elem.style.position = 'relative';
};

const styleDropdownList = (elem) => {
  const btnWidth = document.querySelector('.dd-btn').offsetWidth;
  elem.style.display = 'none';
  elem.style.position = 'absolute';
  elem.style.zIndex = '1';
  elem.style.width = `${btnWidth}px`;
  elem.style.marginTop = '1rem';
  elem.style.backgroundColor = '#fff';
  elem.style.borderRadius = '.5rem';
  elem.style.BOX_SHADOW = `${BOX_SHADOW}`;
};

const toggleDropdownList = (btn, list) => {
  btn.style.borderColor =
    btn.style.borderColor === LIGHT ? `${DARK_GREEN}` : LIGHT;

  btn.style.color =
    btn.style.color === `${TXT_COLOR}` ? `${DARK_GREEN}` : `${TXT_COLOR}`;

  if (list) {
    if (list.style.display === 'none') {
      list.style.animation = '';
      list.style.display = 'block';
    } else {
      list.style.animation = SCALEDOWN_ANIM;
    }
    const items = list.querySelectorAll('.dd-item');
    if (items) {
      items.forEach((item, i) => {
        item.style.animation = `rotateX 300ms ${i * 60}ms ease-in-out forwards`;
      });
    }
  }

  const arrow = btn.querySelector('.arrow');
  arrow.style.transform =
    arrow.style.transform === ARROW_DOWN ? ARROW_UP : ARROW_DOWN;
};

const styleDropdownBtn = (elem) => {
  elem.style.fontSize = '1.3rem';
  elem.style.backgroundColor = '#fff';
  elem.style.color = `${TXT_COLOR}`;
  elem.style.padding = elem.offsetWidth > 200 ? PADDING_LARGE : PADDING_SMALL;
  elem.style.border = '.1rem solid #fff';
  elem.style.borderRadius = '.5rem';
  elem.style.cursor = 'pointer';
  elem.style.BOX_SHADOW = `${BOX_SHADOW}`;
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
      item.style.backgroundColor = `${LIGHT_GREEN}`;
    }
    item.style.display = 'block';
    item.style.opacity = '0';
    item.style.padding = item.offsetWidth > 200 ? PADDING_LARGE : PADDING_SMALL;
    item.style.textDecoration = 'none';
    item.style.fontSize = '1.3rem';
    item.style.color = `${TXT_COLOR}`;
    item.addEventListener('mouseover', () => {
      item.style.color = `${DARK_GREEN}`;
    });
    item.addEventListener('mouseout', () => {
      item.style.color = `${TXT_COLOR}`;
    });
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
  arrowDiv.style.backgroundColor = `${LIGHT_GREEN}`;
  arrowDiv.style.borderRadius = '50%';
  arrow.style.display = 'inline-block';
  arrow.style.border = `solid ${DARK_GREEN}`;
  arrow.style.borderWidth = '0 .1rem .1rem 0';
  arrow.style.padding = '.2rem';
  arrow.style.transform = ARROW_DOWN;
  arrowDiv.appendChild(arrow);
  return arrowDiv;
};

const hideAllDropdowns = (e, btnArr, listArr) => {
  if (btnArr && !e.target.classList.contains('dd-btn')) {
    btnArr.forEach((btn, i) => {
      const arrows = document.querySelectorAll('.arrow');
      if (btn.style.borderColor === `${DARK_GREEN}`) {
        btn.style.borderColor = LIGHT;
        btn.style.color = `${TXT_COLOR}`;
        arrows[i].style.transform = ARROW_DOWN;
      }
      if (listArr[i]) {
        if (listArr[i].style.display === 'block')
          listArr[i].style.animation = SCALEDOWN_ANIM;
      }
    });
  }
};

const resizeDropdownList = (btnArr, listArr) => {
  if (btnArr && listArr) {
    btnArr.forEach((btn, i) => {
      if (listArr[i]) listArr[i].style.width = `${btn.offsetWidth}px`;
    });
  }
};
