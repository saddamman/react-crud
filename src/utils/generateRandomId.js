export const generateRandomId = () => {
  return (
    new Date().getTime().toString(36) + Math.random().toString(36).substr(2, 9)
  );
};
