"use client";
import React, { useState } from "react";

interface form {
  rows: String;
  columns: String;
  setColumns: Function;
  setRows: Function;
}

const InputForm = ({ rows, columns, setColumns, setRows }: form) => {
  const [board, setBoard] = useState({
    row: rows,
    col: columns,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const row = parseInt(String(board.row));
    const col = parseInt(String(board.col));
    if (board.row !== board.col) {
      alert("Select row and column in NxN format");
    } else if (row > 20 || (col > 20 && row !== 20 && col !== 20)) {
      alert("Select row and column within the range of 20x20");
    } else {
      setRows(board.row);
      setColumns(board.col);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="rows" className="block text-gray-700 font-bold mb-2">
          Rows
        </label>
        <input
          type="text"
          id="rows"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter number of rows"
          value={String(board.row)}
          onChange={(e) => setBoard({ ...board, row: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="columns" className="block text-gray-700 font-bold mb-2">
          Columns
        </label>
        <input
          type="text"
          id="columns"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter number of columns"
          value={String(board.col)}
          onChange={(e) => setBoard({ ...board, col: e.target.value })}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
