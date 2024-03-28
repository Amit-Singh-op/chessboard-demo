"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";

const Chessboard = () => {
  const [rows, setRows] = useState("8");
  const [columns, setColumns] = useState("8");

  const board = () => {
    return new Array(parseInt(rows)).fill(0).map((_, row: any) => {
      return new Array(parseInt(columns)).fill(0).map((_, col: any) => {
        const isBlack = (col + row) % 2 === 0;
        const paddingValue = () => {
          const val = parseInt(rows);
          if (val > 10) {
            return 10;
          }
          return 20;
        };
        return (
          <div
            key={`${row + 1 + col + 1}`}
            className={`border border-gray-600 ${
              isBlack ? "bg-black" : "bg-white"
            }`}
            style={{
              padding: `${paddingValue()}px`,
            }}
          />
        );
      });
    });
  };

  return (
    <div className="flex max-[690px]:flex-col max-[690px]:gap-5 items-center justify-evenly w-full">
      <InputForm
        rows={rows}
        columns={columns}
        setColumns={setColumns}
        setRows={setRows}
      />
      <div
        className={`grid`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {board()}
      </div>
    </div>
  );
};

export default Chessboard;
