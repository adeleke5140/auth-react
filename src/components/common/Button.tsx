import * as React from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
  type?: string;
  handleAction: () => void;
};

export const FormButton = ({ type, handleAction }: ButtonProps) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      {type}
    </Button>
  );
};
