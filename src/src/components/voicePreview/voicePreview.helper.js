const getTwoDigitFormat = (number) => {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
export const getCounterDigit = (second) => {
  return `${getTwoDigitFormat((second / 3600) % 60)} : ${getTwoDigitFormat(
    (second / 60) % 60
  )} : ${getTwoDigitFormat(second % 60)}`;
};

const format = (num, decimals = 0) =>
  num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });

export const getDecimalSize = (num) => {
  if (num < 1024) return num + "b";
  else if (num < 1024 * 1024) return format(num / 1024) + "Kb";
  else if (num < 1024 * 1024 * 1024)
    return format(num / (1024 * 1024), 1) + "Mb";
  else if (num < 1024 * 1024 * 1024 * 1024)
    return format(num / (1024 * 1024 * 1024), 1) + "Gb";
};

export const audioPlayer = () => {};
