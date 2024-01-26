import React, { useState, useEffect } from 'react';
import { addField } from "../slices/fieldSlice";
import { useDispatch } from "react-redux";


const FieldRow = ({ initialFieldType, onConfirm }) => {
  const [fieldType, setFieldType] = useState(initialFieldType);
  const [fieldName, setFieldName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [maxLength, setMaxLength] = useState('');
  const [mandatory, setMandatory] = useState('no');
  const [fieldData, setFieldData] = useState('');

  useEffect(() => {
    setFieldDataType('');
    setMaxLength('');
    setFieldData('');
  }, [fieldType]);

  const handleConfirm = () => {
    const fieldDataArr = fieldData.trim().split(' ');
    let additionalField = 'Nil';

    if (fieldType === 'TextBox') {
        additionalField = `Max ${maxLength} digits`;
    } else if (fieldType === 'DatePicker') {
        additionalField = `Between ${dateRange.from} to ${dateRange.to}`;
    }
    onConfirm({ fieldType, fieldName, fieldDataType,additionalField, mandatory, fieldData ,maxLength,dateRange,fieldDataArr});
    
  };

  return (
    <>
      <div class = "fieldrow">
        <div class = "fieldrowelem">
          <label>Field Type</label>
          <select class = "fieldtype" value={fieldType} onChange={e => setFieldType(e.target.value)}>
            <option value="TextBox">Text Box</option>
            <option value="Dropdown">Dropdown</option>
            <option value="DatePicker">Date Picker</option>
          </select>
        </div>
        
        
        {fieldType === 'TextBox' && (
          <>
          <div className="fieldrowelem">
            <label>Field Display Name</label>
            <input placeholder="Mobile" value={fieldName} onChange={e => setFieldName(e.target.value)} />
          </div>
            
            <div className="fieldrowelem">
              <label>Field Data Type</label>
              <select class = "otherselect" value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                  <option value="">Select Data Type</option>
                  <option value="String">String</option>
                  <option value="Number">Number</option>
              </select>
            </div>
            
            <div className="fieldrowelem">
              <label>Field Max Length Allowed</label>
              <input placeholder="Max Length" type="number" value={maxLength} onChange={e => setMaxLength(e.target.value)} />
            </div>
            
          </>
        )}
        
        {fieldType === 'Dropdown' && (
          <>
            <div className="fieldrowelem">
              <label>Field Display Name</label>
              <input placeholder="Mobile" value={fieldName} onChange={e => setFieldName(e.target.value)} />
            </div>
            <div className="fieldrowelem">
              <label>Field Data Type</label>
              <select class = "otherselect" value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                  <option value="">Select Data Type</option>
                  <option value="String">String</option>
                  <option value="Number">Number</option>
              </select>  
            </div>
            
            <div className="fieldrowelem">
              <label>Field Data</label>
              <input placeholder="Field Data" value={fieldData} onChange={e => setFieldData(e.target.value)} />
            </div>
                  
          </>
        )}
        
        {fieldType === 'DatePicker' && (
          <>
            <div className="fieldrowelem">
              <label>Field Display Name</label>
              <input placeholder="DOB" value={fieldName} onChange={e => setFieldName(e.target.value)} />
            </div>
            <div className="fieldrowelem">
              <label>Field Data Type</label>
              <select value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                  <option value="">Select Data Type</option>
                  <option value="Date">Date</option>
              </select>
            </div>
            
            <div className="fieldrowelem">
              <label>Date Range From</label>
              <input type="date" placeholder="From" value={dateRange.from} onChange={e => setDateRange({ ...dateRange, from: e.target.value })} />
            </div>

            <div className="fieldrowelem">
              <label>Date Range To</label>
              <input type="date" placeholder="To" value={dateRange.to} onChange={e => setDateRange({ ...dateRange, to: e.target.value })} />
            </div>

          </>
        )}
        <div className="fieldrowelem">
          <label>Mandatory</label>
          <select class = "otherselect" value={mandatory} onChange={e => setMandatory(e.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        
        <button class = "but" onClick={handleConfirm}>Confirm</button>
      </div>
    </>
  );
  
};

export default FieldRow;
