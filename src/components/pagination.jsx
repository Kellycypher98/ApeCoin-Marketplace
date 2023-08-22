import React from "react";
import { Button } from "@material-tailwind/react";

export default function Pagination(props) {
  const { currentPage, totalPages, pageChange } = props;
  const getPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => pageChange(i)}
          color={currentPage === i ? "blue" : "gray"}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return <div className="space-x-2">{getPageButtons()}</div>;
}
