export type BannerFormat = {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type ContactFormat = {
  id: number;
  label: string;
  url: string;
};

export type HomeWelcome = {
  id: number;
  welcome: {
    name: string;
    role: string;
    banner: BannerFormat;
  };
};

export type HomeAbout = {
  id: number;
  about: {
    id: number;
    title: string;
    content: string;
  };
};

export type HomeContact = {
  id: number;
  contact: ContactFormat[];
};

export type HomeData = {
  welcome: HomeWelcome;
  about: HomeAbout;
  contact: HomeContact;
};
