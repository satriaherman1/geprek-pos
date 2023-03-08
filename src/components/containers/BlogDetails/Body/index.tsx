import { Box, BoxProps, Button, Container, Divider, Flex, Icon, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import BlogList from "@src/components/fragments/BlogList";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { FaCopy, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function BlogBodyDetails(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const toast = useToast();

  const handleCopy = (text: string) => {
    window.navigator.clipboard.writeText(text);
    toast({
      title: "Berhasil menyalin.",
      description: "Berhasil menyalin link.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box {...props} marginTop="2vh">
      <Text>
        <Box as="b">JEPARA</Box> – Setelah sempat terhenti selama dua tahun karena pandemi, Festival Perang Obor kembali digelar dalam acara pamungkas sedekah bumi di Desa Tegalsambi, Senin
        (20/6/2022). Apresiasi disampaikan Penjabat (Pj) Bupati Jepara melalui Sekretaris Daerah Edy Sujatmiko atas pelaksanaan perang obor kali ini, yang dapat kembali digelar dengan meriah. Tidak
        hanya pelaksanaan aktivitas sosial budaya, melalui event seperti ini Edy berharap, mampu menggerakkan kembali perekonomian masyarakat. Disampaikan, pihaknya sangat terkesan dengan dengan
        masyarakat menuangkan perang obor ke dalam bentuk seni lain, seperti Batik Perang Obor dan Tari Obor. <br /> <br /> “Silakan berkomunikasi dengan Disparbud, nanti kita olah menjadi kreasi yang
        lebih baik,” ucapnya. Tegalsambi, yang senantiasa melestarikan budaya lokal. Sebagaimana diketahui, perang obor merupakan warisan budaya tak benda (WBTB), yang diakui Kementerian Pendidikan,
        Kebudayaan, Riset dan Teknologi (Kemendikbudristek) RI sejak 2021, bersama dengan Pesta Lomban dan Jembul Tulakan. Edy juga menyambut positif, inovasi Pemerintah Desa Tegalsambi yang
        menuangkan perang obor ke dalam bentuk seni lain, seperti Batik Perang Obor dan Tari Obor. <br /> <br /> “Silakan berkomunikasi dengan Disparbud, nanti kita olah menjadi kreasi yang lebih
        baik,” ucapnya. Ditemui secara terpisah, Petinggi Tegalsambi Agus Santoso mengatakan, tradisi perang obor merupakan tradisi turun temurun yang dilaksanakan tiap Senin Pahing, malam Selasa Pon,
        di bulan besar atau Dzulhijjah, bertepatan dengan sedekah bumi desanya. “Ini merupakan bentuk rasa syukur kami. Api obor ini kami percaya mampu mendatangkan kesehatan dan menolak bala,” kata
        Agus. Agus menceritakan, perang obor bermula dari legenda Ki Gemblong yang dipercaya oleh Kiai Babadan untuk merawat dan menggembalakan ternaknya. Namun, karena terlena dengan ikan dan udang
        di sungai, ternak tersebut terlupakan sehingga sakit atau mati. Kiai Babadan yang tidak terima dengan kelalaian Ki Gemblong, memukul Ki Gemblong dengan obor dari pelapah kelapa. Akibatnya, ia
        menggunakan obor serupa untuk membela diri. Tanpa diduga, benturan kedua obor menyebarkan api di tumpukan jerami di sebelah kandang, dan ternak yang awalnya sakit tiba-tiba menjadi sembuh.
      </Text>

      <Box mt="60px" mb="30px">
        <Text>Bagikan :</Text>
        <Flex marginTop="12px" columnGap="8px">
          <Button size="sm" colorScheme="teal" onClick={() => handleCopy(window.location.href)}>
            <Icon as={FaCopy} />
          </Button>
          <Button size="sm" colorScheme="facebook">
            <Icon as={FaFacebookF} />
          </Button>
          <Button size="sm" colorScheme="twitter">
            <Icon as={FaTwitter} />
          </Button>
          <Button size="sm" colorScheme="pink">
            <Icon as={FaInstagram} />
          </Button>
          <Button size="sm" colorScheme="whatsapp">
            <Icon as={FaWhatsapp} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
