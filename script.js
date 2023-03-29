const $profileDrawer = document.querySelector('.profile-drawer');
const $tagList = document.querySelector('.tag-list');
const $tagItem = document.querySelectorAll('.tag-item');

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

document.addEventListener('DOMContentLoaded', setDrawerOffset);
window.addEventListener('resize', setDrawerOffset);
$profileDrawer.addEventListener('click', toggleProfileDrawer);
$profileDrawer.addEventListener('touch', toggleProfileDrawer);
