
window.addEventListener('DOMContentLoaded', function () {
	
	document.querySelectorAll('.tabs-btn').forEach(function (btnTabs) {  // выбирает все элеметы с классом tabs-btn и для каждого для них создает обработчик события на клик
		btnTabs.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path  // для нажатого элемента записывает в константу path значение атрибута data-path
			document.querySelectorAll('.tabs-content').forEach(function (tabsContent) {
				tabsContent.classList.remove('tabs-content-active')  // выбирает все элементы с классом tabs-content и затирает у них класс tabs-content-active
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content-active')  // выбирает элемент с атрибутом data-target равное константе path и добавляет ему класс tabs-content-active
		})

	})
})