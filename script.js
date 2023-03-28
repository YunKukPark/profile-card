const $profileDrawer = document.querySelector('.profile-drawer');
const $tagList = document.querySelector('.tag-list');
const $tagItem = document.querySelectorAll('.tag-item');

const setDrawerOffset = () => {
  const $tagList = document.querySelector('.tag-list');
  const tagListHeight = $tagList.clientHeight;
  console.log('tagListHeight: ', tagListHeight);

  if ($profileDrawer.classList.contains('open')) {
    $profileDrawer.style.bottom = 0;
  } else {
    $profileDrawer.style.bottom = `-${tagListHeight}px`;
  }
};

const toggleProfileDrawer = () => {
  $profileDrawer.classList.toggle('open');
  $tagList.classList.toggle('open');
  $tagItem.forEach(tag => {
    tag.classList.toggle('open');
  });
  setDrawerOffset();
};

const fallbackBackdrop = () => {
  const $backdrop = document.querySelector('.backdrop-layer');
  $backdrop.style.backdropFilter = 'blur(30px)'; // fallback for browsers that doesn't support backdrop-filter
};

const onResizeWindow = () => {
  setDrawerOffset();
  fallbackBackdrop();
};

document.addEventListener('DOMContentLoaded', setDrawerOffset);
window.addEventListener('resize', onResizeWindow);
$profileDrawer.addEventListener('click', toggleProfileDrawer);
$profileDrawer.addEventListener('touch', toggleProfileDrawer);
