import React from "react";
import { CardContainer } from "../../styles";

type CardProps = {
  text: string;
  id: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
