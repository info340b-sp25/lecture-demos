import React, {useState} from 'react';

export function ComposeForm(props) {

  const {addToMessageFunction} = props;
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const typedValue = event.target.value;
    setInputValue(event.target.value);
  }

  const handleClick = (event) => {
    console.log("submitting form with data ", inputValue)
    if (inputValue) {
      addToMessageFunction(inputValue)
    }
    setInputValue('')
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" 
          onChange={handleChange}
          value={inputValue}
          rows="2" placeholder="Type a new message"></textarea>
        <button className="btn btn-secondary" type="button"
          onClick={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}