import { IGatsbyImageData } from "gatsby-plugin-image";

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
    bridal: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    specialEvents: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    separator1: {
      description: string;
      gatsbyImageData: IGatsbyImageData;
    };
  };
  banner: {
    title: string;
    img: { gatsbyImageData: IGatsbyImageData };
  };
};

export type ReviewsQuery = {
  reviewPage: {
    title: string;
    banner: {
      title: string;
      description: string;
      url: string;
    };
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
        carouselImages: Array<{
          id: string;
          title: string;
          gatsbyImageData: IGatsbyImageData;
        }>;
      };
    }>;
  };
  muBanner: {
    title: string;
    img: {
      url: string;
    };
  };
  btsBanner: {
    title: string;
    img: {
      url: string;
    };
  };
};

export type HomePageQuery = {
  home: {
    description: { description: string };
    bannerImage: {
      gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData;
      description: string;
    };
    contactImage: {
      gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData;
      description: string;
    };
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

export type ContactPageQuery = {
  site: {
    siteMetadata: { description: string };
  };
  banner: {
    title: string;
    img: {
      title: string;
      description: string;
      url: string;
    };
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
    bannerImage: {
      description: string;
      title: string;
      url: string;
    };
    aboutImage: {
      description: string;
      title: string;
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export type FourOohFourQuery = {
  site: {
    siteMetadata: { description: string };
  };
  about: {
    bannerImage: {
      description: string;
      title: string;
      url: string;
    };
  };
};

export type BioQuery = {
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
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
