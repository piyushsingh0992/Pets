export   function toastManager(state, action) {
    const { type, message } = action;
switch (type) {
  case "RESET":
    return { trigger: false };

  default:
    return { trigger: true, type, message };
}
}