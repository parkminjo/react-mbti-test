import { toast } from "react-toastify";
import { VALIDATE_MESSAGES } from "../../constants/validateMessages";

export const validateInput = (inputValue) => {
  const { id, password, passwordCheck, nickname } = inputValue;

  if (id === "") {
    toast.error(VALIDATE_MESSAGES.ID_ERROR);
    return;
  }
  if (password === "") {
    toast.error(VALIDATE_MESSAGES.PASSWORD_ERROR);
    return;
  }
  if (password.length < 8) {
    toast.error(VALIDATE_MESSAGES.PASSWORD_LENGTH_ERROR);
  }
  if (passwordCheck !== password) {
    toast.error(VALIDATE_MESSAGES.PASSWORD_CHECK_ERROR);
    return;
  }
  if (nickname === "") {
    toast.error(VALIDATE_MESSAGES.NICKNAME_ERROR);
  }
  if (nickname.length < 2 || nickname.length > 10) {
    toast.error(VALIDATE_MESSAGES.NICKNAME_LENGTH_ERROR);
  }
};
