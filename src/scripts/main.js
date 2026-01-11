'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

  document.addEventListener('click', (e) => {

 const fieldMore = field.getBoundingClientRect();
 const spiderMore = spider.getBoundingClientRect();

let x = e.clientX - fieldMore.left - spiderMore.width / 2;
let y = e.clientY - fieldMore.top - spiderMore.height / 2;

x = Math.max(0, Math.min(x, fieldMore.width - spiderMore.width));
y = Math.max(0, Math.min(y, fieldMore.height - spiderMore.height));


spider.style.left = x + 'px';
spider.style.top = y + 'px';

 });

