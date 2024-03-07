import { fetchInstant } from "@/common/fetch";

export const createPaymentLinkGuest = ({ body }: { body: any }) => {
  return fetchInstant(`guest/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createPaymentLinkCustomer = ({
  data: { body, token },
}: {
  data: { body: any; token: string };
}) => {
  return fetchInstant(
    `customer/checkout`,
    {
      method: "POST",
      body: JSON.stringify(body),
    },
    token
  );
};
