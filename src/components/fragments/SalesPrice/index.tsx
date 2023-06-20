import { useMutation, gql } from "@apollo/client";
import { Skeleton, Text } from "@chakra-ui/react";
import FormatService from "@src/utils/services/format.service";
import { useEffect } from "react";

interface ISalesPrice {
  price: () => number[];
}
export default function SalesPrice({ price }: ISalesPrice) {
  const [calculatePrice, { data, loading, error }] = useMutation(gql`
    mutation CalculatePrice($price: [Float]!) {
      calculatePrice(price: $price) {
        currentPrice
      }
    }
  `);

  useEffect(() => {
    console.log(price);
    calculatePrice({
      variables: {
        price: price(),
      },
    });
  }, []);

  const format = new FormatService();

  return loading ? (
    <Skeleton>
      {" "}
      <Text>hi</Text>{" "}
    </Skeleton>
  ) : (
    <Text>{format.currency(data?.calculatePrice.currentPrice)}</Text>
  );
}
