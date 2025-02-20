import React, {useState} from 'react';

export function ComposeForm(props) {

  const {addToMessagesSomehow} = props;

  const [inputtedText, setInputtedText] = useState('')

  const handleChange = (event) => {
    const typedValue = event.target.value;
    console.log(typedValue);
    setInputtedText(typedValue);
  }

  const handleClick = (event) => {
    console.log("submitting form with data " + inputtedText)
    addToMessagesSomehow(inputtedText);
    setInputtedText('');
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={inputtedText}
          ></textarea>
        <button className="btn btn-secondary" type="button"
          onClick ={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}