import * as yup from "yup";

interface IProps {
  maxLength: number;
}

export const validationsSearch = ({ maxLength }: IProps) =>
  yup.object().shape({
    query: yup
      .string()
      .max(maxLength, `Search cannot contain more than ${maxLength} characters`)
  });
