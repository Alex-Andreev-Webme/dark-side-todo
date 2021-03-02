const todoContainer = document.querySelector('.todo__list')
const todoTemplate = document.querySelector('.todo-template').content
const todoForm = document.querySelector('.todo__form')
const todoInput = document.querySelector('.todo__input')
const themeToggleBtn = document.querySelector('.footer__toggle')
const headerTitle = document.querySelector('.header__title')
const footerText = document.querySelector('.footer__hint')

function getTodo() {
	const todoEl = todoTemplate.cloneNode(true)
	const todoTitle = todoEl.querySelector('.todo__title')
	todoTitle.textContent = todoInput.value
	const todoRemobeBtn = todoEl.querySelector('.todo__btn_type_remove')
	todoRemobeBtn.addEventListener('click', removeTodo)
	return todoEl
}

function removeTodo(event) {
	const targetEl = event.target.closest('.todo__list-elem')
	targetEl.classList.add('todo__list-elem_removed')
	setTimeout(() => {
		targetEl.remove()
	}, 800)
}

function addTodo() {
	todoContainer.prepend(getTodo())
}

function addTodoHandler(event) {
	event.preventDefault()
	if (todoInput.value.trim() != '') {
		addTodo()
	}
	todoForm.reset()
}

function toggleTheme() {
	themeToggleBtn.classList.toggle('footer__toggle_active');
	if (themeToggleBtn.classList.contains('footer__toggle_active')) {
		headerTitle.textContent = 'Todo by Chewbacca'
		headerTitle.classList.add('header__title_light')
		footerText.textContent = 'Choose the dark side'
	} else {
		headerTitle.textContent = 'Todo by Darth Vader'
		headerTitle.classList.remove('header__title_light')
		footerText.textContent = 'Become a Jedi'
	}
}

todoForm.addEventListener('submit', addTodoHandler)

themeToggleBtn.addEventListener('click', toggleTheme)