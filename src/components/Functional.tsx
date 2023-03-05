import React, { useState } from "react";
import { FC } from "react";

interface ISearchInputProps {
   search: string;
   onSearch: (value: string) => void;
   options: object;
   defaultValue: string;
   onChange: (sort:any) => void;
   value: string
 }
const Functional: FC<ISearchInputProps> = ({options, defaultValue, value, onChange}) => {


  return (
    <select 
      value={value}
      onChange= {e => onChange(e.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 

        <option key={option.value} value={option.value}>{option.name}</option>
      
      
        )}
    </select>
  );
};

export default Functional;

