class FormatService {
  truncate(text: string, maxLen: number) {
    if (text.length > maxLen) {
      const result = text.slice(0, maxLen);
      return result + "...";
    } else {
      return text;
    }
  }
}

export default FormatService;
