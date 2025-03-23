import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface ContactFormProps {
  name: string;
  Date: Date;
  email: string;
  phone: string;
  service: "Buy Used Furniture" | "Sell Used Furniture";
  message?: string;
}

export const EmailTemplate = ({
  name,
  Date,
  email,
  phone,
  message,
  service,
}: ContactFormProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(Date);

  return (
    <Html>
      <Head />
      <Preview>Order From Website</Preview>
      <Body style={main}>
        <Container>
          <Section>
            <Img
              width={200}
              height={100}
              style={{
                objectFit: "contain",
                margin: "0 auto",
              }}
              src={`https://dubaiusedfurniture.ae/_next/static/media/logo-svg.7b088266.svg`}
            />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Mr. {name} want to {service}.
                </Heading>

                <Text style={paragraph}>
                  <b>Time: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email Address: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone No: </b>
                  {phone}
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    marginTop: -5,
                  }}
                >
                  <b>Looking For: </b>
                  to {service}
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    marginTop: -5,
                  }}
                >
                  <b>Message: </b>
                  {message}
                </Text>

                <Text style={paragraph}>
                  You Can Contact Him on the Given Email Address or Phone Number
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`https://react-email-demo-q2iyfgd67-resend.vercel.app/static/yelp-footer.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | dubaiusedfurniture.ae | All Rights Reserved
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
