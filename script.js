const COLOR_LIST = ['green', 'red', 'yellow', 'blue', 'purple'];
const $profileDrawer = document.querySelector('.profile-drawer');
const $tagList = document.querySelector('.tag-list');
const $tagItem = document.querySelectorAll('.tag-item');
const $addTagButton = document.querySelector('.add-item-button');

const TagItem = ({ name }) => {
  return `<li class="tag-item">${name}</li>`;
};

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

const onClickAddTagButton = () => {};

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

document.addEventListener('DOMContentLoaded', onLoaded);
window.addEventListener('resize', setDrawerOffset);
$profileDrawer.addEventListener('click', toggleProfileDrawer);
$profileDrawer.addEventListener('touch', toggleProfileDrawer);
