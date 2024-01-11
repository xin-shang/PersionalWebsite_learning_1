/**
 * 菜单
*/
// 找ID为 'XX' 的元素，并将其赋值给 XX
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// 显示菜单
navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
})

// 隐藏菜单
navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
})

/**
 * 搜索
*/
// 找ID为 'XX' 的元素，并将其赋值给 XX
const  search = document.getElementById('search'),
        searchBtn = document.getElementById('search-btn'),
        searchClose = document.getElementById('search__close')

// 显示搜索
searchBtn.addEventListener('click', () => {
        search.classList.add('show-search')
})

// 隐藏菜单
searchClose.addEventListener('click', () => {
        search.classList.remove('show-search')
})