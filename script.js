function calculate(type, valuea){
  if (type === 'action'){

    if(valuea === 'c'){
      document.getElementById('result').value = ''
    }
    
    if(valuea === '+' || valuea ==='-' || valuea === '/' || valuea === '.' || valuea === '*'){
      document.getElementById('result').value += valuea
    }

    if(valuea === '='){
      var field_value = eval(document.getElementById('result').value)

      document.getElementById('result').value = field_value
    }


  } else if (type === 'value'){
    document.getElementById('result').value += valuea
  }
}