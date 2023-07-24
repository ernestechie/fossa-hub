export const parseDate = (date: Date) => {
  return `${new Date(date).toLocaleDateString('default', {
    month: 'long',
  })} ${new Date(date).getDate()}, ${new Date(date).getUTCFullYear()}`;
};

export const parseDateMonth = (date: Date) => {
  return new Date(date).toLocaleDateString('default', {
    month: 'short',
  });
};

export const parseDateDay = (date: Date) => {
  return new Date(date).getDate();
};
