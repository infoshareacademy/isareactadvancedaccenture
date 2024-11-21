import { ChangeEvent } from "react";

export const Input = ({
  name,
  setData,
}: {
  name: string;
  setData: (data: { [key: string]: string }) => void;
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      [event.target.name]: event.target.value,
    });
  };
  return <input name={name} onChange={handleChange} />;
};
