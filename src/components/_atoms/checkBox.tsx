import React, { useState } from "react"
import { RowDiv , CheckBoxDiv , SignUpInputFull } from "../../style"
const LabelDiv = () =>{
    const [isVisible2, setIsVisible2] = useState(false);
    const handleRadioChange = () => {
    setIsVisible2(!isVisible2);
  };
    return (
        <>
        <RowDiv>
            <CheckBoxDiv>
              <label htmlFor="male1">Male</label>
              <input type="radio" id="male1" name="gender" />
            </CheckBoxDiv>
            <CheckBoxDiv>
              <label htmlFor="male2">Female</label>
              <input type="radio" id="male2" name="gender" />
            </CheckBoxDiv>
            <CheckBoxDiv>
              <label  htmlFor="male3">custom</label>
              <input onClick={handleRadioChange} type='radio' id='male3' name='gender'  />
            </CheckBoxDiv>
          </RowDiv>
          <SignUpInputFull placeholder='Gender (optional)' style={{ display: isVisible2 ? 'block' : 'none' }}  type="text" />
          </>
          
    )
}
export default LabelDiv