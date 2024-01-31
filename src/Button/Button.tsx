import React from "react";
import { ResizableBox } from "react-resizable";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

interface DataItem {
  [key: string]: string | number;
}

const Button = () => {
  const columns = ["Name", "Age", "Job"];

  const data: DataItem[] = [
    {
      Name: "John Doe",
      Age: 30,
      Job: "Software Developer",
    },
    {
      Name: "Jane Doe",
      Age: 28,
      Job: "Data Scientist",
    },
    {
      Name: "Bob Smith",
      Age: 35,
      Job: "Product Manager",
    },
  ];
  <table>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>
            <ResizableBox width={100} height={20}>
              <div>{column}</div>
            </ResizableBox>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{row[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>;
};

export default Button;
