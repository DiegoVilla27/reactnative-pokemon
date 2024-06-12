import { TextTW } from "@helpers/nativewind";
import { ErrorMessage } from "@hookform/error-message";
import { IForm } from "@screens/home/components/search/hooks";
import { ReactNode } from "react";
import { FieldErrors, ValidateResult } from "react-hook-form";

const HTMLError: (type: string, message: ValidateResult) => ReactNode = (
  type: string,
  message: ValidateResult
) => {
  return (
    <TextTW
      className="text-red-500 font-montserrat-l"
      key={type}
    >
      {message}
    </TextTW>
  );
};

export const ErrorMessageCustom = (
  errors: FieldErrors<IForm>,
  name: keyof IForm
) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(
              ([type, message]: [string, ValidateResult]) =>
                HTMLError(type, message)
            )
          : null;
      }}
    />
  );
};
