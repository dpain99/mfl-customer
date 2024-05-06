export function LightenColor(originalColor: string, amount: number) {
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (!hexRegex.test(originalColor)) {
    console.error("Mã màu không hợp lệ");
    return null;
  }
  let color = originalColor.replace("#", "");
  if (color.length === 3) {
    color = color
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const red = parseInt(color.substring(0, 2), 16);
  const green = parseInt(color.substring(2, 4), 16);
  const blue = parseInt(color.substring(4, 6), 16);

  const lightenedRed = Math.min(255, red + amount);
  const lightenedGreen = Math.min(255, green + amount);
  const lightenedBlue = Math.min(255, blue + amount);

  const lightenedColor = `#${(
    (1 << 24) +
    (lightenedRed << 16) +
    (lightenedGreen << 8) +
    lightenedBlue
  )
    .toString(16)
    .slice(1)}`;

  return lightenedColor;
}
