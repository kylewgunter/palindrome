// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPal, setIsPal] = useState(false)

  const handleChange = (evnt) => {
    // console.log('Inputting...')
    // console.log(isPalindrome(evnt.target.value))
    let inputValue = evnt.target.value;
    isPalindrome(inputVal)
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    isPalindrome(inputValue)
  }

  const isPalindrome = (word) => {
    word = word.replace(/\s/g, '')
    if (!word.length){
      return setIsPal(false)
    }
    let left = 0;
    let right = word.length -1
    while (left < right) {
      if(word(left) !== word(right)){
        return setIsPal(false)
      } else {
        left++;
        right--;
      }
    }
    return setIsPal(true);
  }

    console.log("INPUT VALUE: ", inputValue)
    
    return (
      <div className="App">
        <h1>Is this a palindrome?</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' name='palindrome' onChange={handleChange} />
        <div>
          <button type='submit'>Submit</button>
        </div>
        </form>
        <h1>
          { isPal ? 'True': 'False'}
        </h1>
      </div>
    );
  }

export default App;
