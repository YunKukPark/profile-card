// var htmlToImage = require('html-to-image');

const COLOR_LIST = ['green', 'red', 'yellow', 'blue', 'purple'];
const $profileCard = document.querySelector('.profile-card');
const $profileDrawer = document.querySelector('.profile-drawer');
const $downloadButton = document.querySelector('.download-button');
const $screenshot = document.querySelector('#profile');
const $tagList = document.querySelector('.tag-list');
const $tagItem = document.querySelectorAll('.tag-item');

const setTagColor = () => {
  $tagItem.forEach(($tag, index) => {
    const color = COLOR_LIST[index % COLOR_LIST.length];
    $tag.classList.add(color);
  });
};

const setDrawerOffset = () => {
  const $tagList = document.querySelector('.tag-list');
  const tagListHeight = $tagList.clientHeight;

  if ($profileDrawer.classList.contains('open')) {
    $profileDrawer.style.bottom = 0;
  } else {
    $profileDrawer.style.bottom = `-${tagListHeight}px`;
  }
};

const toggleProfileDrawer = () => {
  $profileDrawer.classList.toggle('open');
  $tagList.classList.toggle('open');
  $tagItem.forEach(({ classList }) => classList.toggle('open'));

  setDrawerOffset();
};

const onLoaded = () => {
  setDrawerOffset();
  setTagColor();
};

// DOMContentLoaded Fallback Logic
if (document.readyState !== 'loading') {
  onLoaded();
} else {
  document.addEventListener('DOMContentLoaded', onLoaded);
}

window.addEventListener('resize', setDrawerOffset);
$profileDrawer.addEventListener('click', toggleProfileDrawer);
$profileDrawer.addEventListener('touch', toggleProfileDrawer);
