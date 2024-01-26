import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Form = ({ collectedData }) => {
  return (
    <form class = "frm">
      {Object.keys(collectedData).map((key, index) => {
        const item = collectedData[key];
        return (
          <div class= "frmelem" key={index}>
            {item.fieldName}:
            {item.fieldType === 'TextBox' && (
              <input
                type={(item.fieldDataType === "Number") ? "number" : "text"}
                maxLength={item.maxLength || undefined}
                required={item.mandatory === 'yes'}
              />
            )}
            {item.fieldType === 'DatePicker' && (
              <>
                <input
                  type="date"
                  required={item.mandatory === 'yes'}
                  min = {item.dateRange.from}
                  max = {item.dateRange.to}
                />
              </>
            )}
            {item.fieldType === 'Dropdown' && (
              <>
                <select class = "otherselect">
                    <option value="">Select</option>
                    {item.fieldDataArr.map((option,index)=>(
                        <option key = {index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </>
            )}
          </div>
        );
      })}
      <button class = "but" type="submit">Submit</button>
    </form>
  );
};

export default Form;
