import { FormEvent, useRef } from "react";
import MyButton from "../myButton/MyButton";

function AddForm({addItem}: {addItem: (a: string) => void}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        addItem(inputRef.current!.value);
    }
    return (
      <div>
        <form  onSubmit={submitHandler}>
            <br />
            <div>
                <label htmlFor="my-input">What is your Name?  </label>
                <input type="text" id="my-input" ref={inputRef}/>
            </div>
            <br />
            
            <div>
                <MyButton type="submit" >You Got It</MyButton>
            </div>
        </form>
      </div>
    );
  }
  
  export default AddForm;