const notched = (`
    <div class="notched-outline">
        <div class="notched-outline__leading"></div>
        <div class="notched-outline__notch"></div>
        <div class="notched-outline__trailing"></div>
    </div>
`),

customizeLabel = (textField) => {
    const label = textField.previousElementSibling

    textField.parentElement.insertAdjacentHTML('afterbegin', notched)

    textField.parentElement
        .querySelector('.notched-outline__notch')
        .insertAdjacentElement('afterbegin', label)
},

ZenInput = () => {
    const inputs = document.querySelectorAll('.input input')

    for (let input of inputs) {
        let label = input.previousElementSibling
        customizeLabel(input)

        let {classList} = input.parentNode,
            {style} = label.parentNode

        if (input.disabled) {
            classList.add('input--disabled')
        }

        if (input.required) {
            label.classList.add('floating-label--required')
        }

        if (input.value.trim().length > 0) {
            classList.add('input--filled')
            if (label) {
                style.width = ((label.clientWidth + 13) * .75) + 'px'
            }
        }

        input.addEventListener('focus', () => {
            classList.add('input--focused')
            if (label) {
                style.width = ((label.clientWidth + 13) * .75) + 'px'
            }
        })

        input.addEventListener('blur', () => {
            classList.remove('input--focused')
            if (input.value.trim().length <= 0 && label) {
                style.width = 'auto'
            }
        })

        input.addEventListener('input', () => {
            if (input.value.trim().length > 0) {
                classList.add('input--filled')
            } else {
                classList.remove('input--filled')
            }
        })
    }
},

ZenTextarea = () => {
    const textareas = document.querySelectorAll('.textarea textarea')

    for (let textarea of textareas) {
        let label = textarea.previousElementSibling
        customizeLabel(textarea)

        let {classList} = textarea.parentNode,
            {style} = label.parentNode

        if (textarea.disabled) {
            classList.add('textarea--disabled')
        }

        if (textarea.required) {
            label.classList.add('floating-label--required')
        }

        if (textarea.value.trim().length > 0) {
            classList.add('textarea--filled')
            if (label) {
                style.width = ((label.clientWidth + 13) * .75) + 'px'
            }
        }

        textarea.addEventListener('focus', () => {
            classList.add('textarea--focused')
            if (label) {
                style.width = ((label.clientWidth + 13) * .75) + 'px'
            }
        })

        textarea.addEventListener('blur', () => {
            classList.remove('textarea--focused')
            if (textarea.value.trim().length <= 0 && label) {
                style.width = 'auto'
            }
        })

        textarea.addEventListener('change', () => {
            if (textarea.value.trim().length > 0) {
                classList.add('textarea--filled')
            } else {
                classList.remove('textarea--filled')
            }
        })

        textarea.addEventListener('input', () => {
            if (classList.contains('textarea--auto-resizeable')) {
                textarea.style.height = 'auto'
                textarea.style.height = (textarea.scrollHeight) + 'px'
            }
        })
    }
}

export {
    ZenInput,
    ZenTextarea
}
