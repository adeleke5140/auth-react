import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormButton } from "./Button";
import { flexbox } from "@mui/system";
import { Link } from "react-router-dom";

type FormProps = {
  type?: string;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleAction: () => void;
};

export const Form = ({
  type,
  handleAction,
  email,
  password,
  setEmail,
  setPassword,
}: FormProps) => {
  return (
    <div>
      <section>
        <h3>{type}</h3>
      </section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter your password"
          variant="outlined"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <FormButton type={type} handleAction={handleAction} />
      <div>
        <Link to={"/"}>Go home</Link>
      </div>
    </div>
  );
};
