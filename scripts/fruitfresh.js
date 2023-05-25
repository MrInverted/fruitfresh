// Language switcher
const languageBlock = document.querySelector('.top__language');
const languageText = document.querySelector('.language__text');
const languageFlagInitial = document.querySelector('.language__flagInitial');
const languageSubMenu = document.querySelector('.language__subMenu');
const languageSubItem = document.querySelectorAll('.language__item');
const languageSubText = document.querySelectorAll('.language__subText');
const languageSubFlag = document.querySelectorAll('.language__flag');

languageBlock.addEventListener('click', () => languageSubMenu.classList.toggle('block') );

for (let i = 0; i < languageSubItem.length; i++) {
    languageSubItem[i].addEventListener('click', switchFlag)

    function switchFlag() {
        languageText.textContent = languageSubText[i].textContent;
        languageFlagInitial.attributes.src.value = languageSubFlag[i].attributes.src.value;
    }
}


// Log in
const loginButton = document.querySelector('.top__login');
const loginBlock = document.querySelector('.login');

loginButton.addEventListener('click', () => loginBlock.classList.toggle('block'))


// Department
const departmentBlock = document.querySelector('.department');
const departmentText = document.querySelector('.department__text');
const departmentSubMenu = document.querySelector('.department__submenu');
const departmentItem = document.querySelectorAll('.department__item');

departmentBlock.addEventListener('click', () => departmentSubMenu.classList.toggle('block') );

for (let i = 0; i < departmentItem.length; i++) {
    departmentItem[i].addEventListener('click', () => departmentText.textContent = departmentItem[i].textContent)
}


// Search panel
const searchBlock = document.querySelector('.search__selection');
const searchText = document.querySelector('.search__text');
const searchSubMenu = document.querySelector('.search__js');
const searchItem = document.querySelectorAll('.search__itemText');

searchBlock.addEventListener('click', () => searchSubMenu.classList.toggle('block') );

for (let i = 0; i < searchItem.length; i++) {
    searchItem[i].addEventListener('click', () => searchText.textContent = searchItem[i].textContent)
}


AOS.init()