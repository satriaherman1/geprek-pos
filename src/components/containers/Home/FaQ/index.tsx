import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function FaQ() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const faqList = [
    {
      question: "Apakah Semua UMKM Bisa Mendaftar InvestKU?",
      answer: "Ya, semua jenis umkm bisa mendaftar InvestKU jika berhasil lolos dalam tahap verifikasi di sistem kami",
    },
    {
      question: "Apakah ada biaya admin untuk mendaftar InvestKU?",
      answer: "Tidak, anda tidak akan dikenakan biaya admin saat mendaftar. Namun kami akan memotong 1.2% dari total Dana yang anda dapat",
    },
    {
      question: "Apakah InvestKU aman?",
      answer: "Ya, InvestKU merupakan platform crowdfunding yang aman karena telah terdaftar dan diawasi oleh OJK",
    },
  ];
  return (
    <Box paddingY={mediumScreen ? "8vh" : "4vh"}>
      <Container maxW={containerMaxWidth}>
        <Box>
          <Heading as="h1" size="xl">
            Frequenly Ask Questions
          </Heading>
          <Text mt={2}>Beberapa pertanyaan yang sering ditanyakan tentang InvestKU</Text>
        </Box>
        <Accordion defaultIndex={[0]} allowMultiple marginTop="40px">
          {faqList.map((faq, key) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontWeight="bold">{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
