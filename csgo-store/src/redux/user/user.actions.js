import { UserActionsTypes } from "./users.type";

export const setCurretUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});
