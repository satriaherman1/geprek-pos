class FormatService {
  truncate(text: string, maxLen: number) {
    if (text.length > maxLen) {
      const result = text.slice(0, maxLen);
      return result + "...";
    } else {
      return text;
    }
  }

  currency(amount: number) {
    const IDRupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    const formattedAmount = IDRupiah.format(amount);

    return formattedAmount;
  }
}

export default FormatService;
