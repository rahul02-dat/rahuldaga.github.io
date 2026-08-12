export function chipClass(tone: string): string {
  switch (tone) {
    case "accent":
      return "chip chip-accent";
    case "red":
      return "chip chip-red";
    case "green":
      return "chip chip-green";
    case "amber":
      return "chip chip-amber";
    default:
      return "chip";
  }
}
