import React, { useState } from "react";
import Layout from "../common/layouts";
import { PageProps, graphql } from "gatsby";
import Seo from "../common/seo";
import {
  Title,
  Form,
  FormContainer,
  Input,
  Button,
  TextArea,
  Select,
} from "../common/components/contactForm";
import { Parallax } from "react-parallax";
import { InsideSection, Container } from "../common/components/parallax";
import { ContactPageQuery } from "../types/queries";

const Contact = ({ data }: PageProps<ContactPageQuery>) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let phoneNum = e.currentTarget.value.replace(/\D/g, "");

    if (phoneNum.length > 13) return;

    const areaCode = phoneNum.substring(0, 3);
    const prefix = phoneNum.substring(3, 6);
    const lineNumber = phoneNum.substring(6, 10);

    phoneNum = `${areaCode ? "(" : ""}${areaCode}${
      prefix ? ") " : ""
    }${prefix}${phoneNum.length > 6 ? "-" : ""}${lineNumber}`;
    setPhoneNumber(phoneNum);
  };

  return (
    <Layout>
      <Seo title={`Contact`} description={data.site.siteMetadata.description} />
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={data.banner.img.url}
        bgImageAlt={data.banner.img.description}
        strength={100}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `hsla(0, 100%, 94%, 0.2)`,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        )}
      >
        <Container>
          <InsideSection />
        </Container>
      </Parallax>

      <FormContainer>
        <Form method="post" data-netlify="true" name="contact" action="#">
          <Title>Contact Me</Title>
          <Input type="hidden" name="form-name" value="contact" />
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            onChange={phoneMask}
            value={phoneNumber}
          />
          <Select defaultValue="0" name="foundBy" id="foundBy">
            <option value="0" disabled hidden>
              How did you find us?
            </option>
            <option value="facebook">FaceBook</option>
            <option value="instagram">Instagram</option>
            <option value="instagram">Google</option>
            <option value="instagram">Referred</option>
            <option value="instagram">Other</option>
          </Select>
          <TextArea
            placeholder="Message"
            id="message"
            name="message"
            cols={30}
            rows={10}
            required
          />
          <div data-netlify-recaptcha="true" />
          <Button style={{ border: "none" }} type="submit" value="submit" />
        </Form>
      </FormContainer>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    site {
      siteMetadata {
        description
      }
    }
    banner: contentfulImage(title: { eq: "ContactBanner" }) {
      title
      img {
        title
        description
        url
      }
    }
  }
`;

export default Contact;
