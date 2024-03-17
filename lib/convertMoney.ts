export const convertMoney = (money: number | undefined): string => {
  if (money === undefined) return "";

  const moneyStr = money.toString().split("").reverse().join("");

  let result = "";
  for (let i = 0; i < moneyStr.length; i++) {
    result += moneyStr[i];

    if ((i + 1) % 3 === 0 && i !== moneyStr.length - 1) {
      result += ".";
    }
  }

  return result.split("").reverse().join("");
};
