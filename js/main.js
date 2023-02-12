function convert() {
    let input = document.getElementById('input_field').value
    let conversion = document.getElementById('unit').value
    let result = 0
    console.log(input)
    if (conversion == 'lb to kg') {
        result = input * 0.4536
    } else if (conversion == 'kg to lb') {
        result = input * 2.2046
    }
     document.getElementById('result').innerText = result
}

function calculate() {
    let input = document.getElementById('number_series_input').value
    let values = []
    if (input) {
        values = input.replace(/\s/g, "").split(',')
    }
    console.log(values)
    if (values.length > 0) {
        values = values.filter((e) => e !== undefined && e !== '').map((value) => {
            return parseFloat(value)
        })
        let max = Math.max( ...values )
        let min = Math.min( ...values)
        let sum = values.reduce((a,b) => a + b, 0)
        let average = sum / values.length
        let reverse_order = values.reverse().join(', ')
    
        document.getElementById('max').innerText = max
        document.getElementById('min').innerText = min
        document.getElementById('sum').innerText = sum
        document.getElementById('average').innerText = average
        document.getElementById('reverse_order').innerText = reverse_order
    } else {
        document.getElementById('max').innerText = ''
        document.getElementById('min').innerText = ''
        document.getElementById('sum').innerText = ''
        document.getElementById('average').innerText = ''
        document.getElementById('reverse_order').innerText = ''
    }
}

const textarea = document.querySelector('textarea');
const clearBtn = document.querySelector('#clear');
const capitalizeBtn = document.querySelector('#capitalize');
const sortBtn = document.querySelector('#sort');
const reverseBtn = document.querySelector('#reverse');
const stripBlankBtn = document.querySelector('#strip-blank');
const addNumbersBtn = document.querySelector('#add-numbers');
const shuffleBtn = document.querySelector('#shuffle');

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        textarea.value = '';
      });
    
}
if (capitalizeBtn) {
    capitalizeBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n');
        let newValue = '';
        
        for (let line of lines) {
          if (line === line.toUpperCase()) {
            newValue += line.toLowerCase() + '\n';
          } else {
            newValue += line.toUpperCase() + '\n';
          }
        }
        
        textarea.value = newValue;
      });
}

if (sortBtn) {
    sortBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n').sort();
        textarea.value = lines.join('\n');
      });
}


if (reverseBtn) {
    reverseBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n');
        let newValue = '';
        
        for (let line of lines) {
          newValue += line.split('').reverse().join('') + '\n';
        }
        
        textarea.value = newValue;
      });
}

if (stripBlankBtn) {
    stripBlankBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n');
        let newValue = '';
        
        for (let line of lines) {
          if (line.trim().length > 0) {
            newValue += line.trim() + '\n';
          }
        }
        
        textarea.value = newValue;
      });
}

if (addNumbersBtn) {
    addNumbersBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n');
        let newValue = '';
        
        for (let i = 0; i < lines.length; i++) {
          newValue += (i + 1) + '. ' + lines[i] + '\n';
        }
        
        textarea.value = newValue;
      });
}

if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
        const lines = textarea.value.split('\n');
        let newValue = '';
        
        while (lines.length > 0) {
          const randomIndex = Math.floor(Math.random() * lines.length);
          newValue += lines[randomIndex] + '\n';
          lines.splice(randomIndex, 1);
        }
        
        textarea.value = newValue;
      });
}
