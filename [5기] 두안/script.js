class Caculator{
    
    $previousPreview = ''
    $currentPreview = ''
    previousOperation = ''
    curruntOperation = ''


    constructor($previousPreview,$currentPreview){
        this.$previousPreview =  $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number){
        this.$currentPreview.textContent += number
    }
    onPressOperation(operation){
        this.$previousPreview.textContent = this.$currentPreview.textContent + ' ' + operation
        this.$currentPreview.textContent = ''
        this.previousOperation = operation
    }

    onEqual(){


    }
    onReset(){
        this.$previousPreview.textContent = ''
        this.$currentPreview.textContent = ''
        this.previousOperation = ''
        this.curruntOperation = ''

    }

    onDelete(){
        
    }

}

// 4 phép toán cơ bản
const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $divide = document.querySelector('[data-btn-divide]')
const $multify = document.querySelector('[data-btn-multify]')

// nút bằng

const $equal = document.querySelector('[data-btn-equal]')

// All Clear (AC), Delete (Del)

const $reset = document.querySelector('[data-btn-reset]')
const $delete = document.querySelector('[data-btn-delete]')


// số, phép tính
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

// 프롬프트
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')

//연산 처리
const calc = new Caculator($previousPreview, $currentPreview)

$numbers.forEach(($number)=>{
    $number.addEventListener('click', (e) => {
        calc.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener('click', (e) => {
        calc.onPressOperation(e.target.textContent)
    })
})

$reset.addEventListener('click', (e) => {
    calc.onReset
})
