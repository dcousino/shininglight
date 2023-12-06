import { IGatsbyImageData } from "gatsby-plugin-image";

type Separator = ImageQuery;

type MarkdownQuery = {
  childMarkdownRemark: {
    rawMarkdownBody: string;
  };
};
export type ServicesQuery = {
  service: {
    name: string;
    intro: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
        headings: Array<{
          value: string;
        }>;
      };
    };
    bridal: MarkdownQuery;
    specialEvents: MarkdownQuery;
    privateLessons: MarkdownQuery;
    separator1: Separator;
    separator2: Separator;
  };
  banner: {
    title: string;
    img: ImageQuery;
  };
};

export type ReviewsQuery = {
  reviewPage: {
    title: string;
    banner: ImageQuery;
  };
  reviews: {
    nodes: Array<{
      rating: number;
      author: string;
      order: number;
      reviewText: {
        childMarkdownRemark: {
          rawMarkdownBody: string;
        };
      };
    }>;
  };
};

export type PortfolioQuery = {
  site: {
    siteMetadata: { description: string };
  };
  makeup: {
    edges: Array<{
      node: {
        title: string;
        carouselImages: Array<ImageQuery>;
      };
    }>;
  };
  muBanner: {
    title: string;
    img: ImageQuery;
  };
  btsBanner: {
    title: string;
    img: ImageQuery;
  };
};

export type HomePageQuery = {
  home: {
    description: { description: string };
    bannerImage: ImageQuery;
    contactImage: ImageQuery;
    bannerVideo: {
      placeholderUrl: string;
      url: string;
      mimeType: string;
    };
  };
  site: {
    siteMetadata: { description: string };
  };
};

type ImageQuery = {
  gatsbyImageData: IGatsbyImageData;
  description: string;
};
export type ContactPageQuery = {
  site: {
    siteMetadata: { description: string };
  };
  banner: {
    title: string;
    img: ImageQuery;
  };
};

export type AboutPageQuery = {
  site: {
    siteMetadata: { description: string };
  };
  about: {
    aboutPageContent: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    bannerImage: ImageQuery;
    aboutImage: ImageQuery;
  };
};

export type FourOohFourQuery = {
  site: {
    siteMetadata: { description: string };
  };
  about: {
    bannerImage: ImageQuery;
  };
};

export type BioQuery = {
  image: ImageQuery;
  contentfulAbout: {
    onsiteBeautyDesign: {
      childMarkdownRemark: { rawMarkdownBody: string };
    };
  };
};

export type AboutQuery = {
  contentfulAbout: {
    mainContent: { childMarkdownRemark: { rawMarkdownBody: string } };
  };
};

export type SeoQuery = {
  site: { siteMetadata: { title: string } };
};

export type ServicesComponentQuery = {
  contentfulAbout: {
    mainContent: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
  };
};

export type NavbarQuery = {
  site: {
    siteMetadata: {
      siteTitle: string;
      navbarLinks: {
        to: string;
        name: string;
      }[];
    };
  };
};

export type FooterQuery = {
  site: {
    siteMetadata: {
      facebook: string;
      instagram: string;
      siteTitle: string;
    };
  };
};

export type Edges = {
  edges: Array<{
    node: {
      title: string;
      carouselImages: Array<{
        id: string;
        title: string;
        url: string;
      }>;
    };
  }>;
};

export type CarouselQuery = {
  makeup: Edges;
  bts: Edges;
  home: Edges;
};
