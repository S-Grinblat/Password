export const generatorPassword = (conf) => {
  const CHARACTERS = {
    numbers: '0 1 2 3 4 5 6 7 8 9',
    symbol: '! @ # $ % * / ¡ = ( ) _ - + { } [ ] ; : < , > . ? ',
    capitalLetter: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    lowerCase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  }

  let end = '';
  let passwordEnd = '' ;

  for(let props in conf ) {
    if(conf[props] === true) {
      end += CHARACTERS[props] + ' ';
    }
  }
  end += CHARACTERS.lowerCase;
  end = end.trim();
  end = end.split(' ');

  for(let i = 0; i < conf.characters; i++) {
    passwordEnd += end[Math.floor(Math.random() * end.length)]; 
    
  }
  return passwordEnd
}

export const copyOutput = () => {
  const read = () => {
    let text = document.querySelector('#input').value

    return text
  }

  async function copy(){
    let txt = read()
    await navigator.clipboard.writeText(txt)
  }

  let btn = document.querySelector('#copyInput')
  btn.addEventListener('click', copy)

}