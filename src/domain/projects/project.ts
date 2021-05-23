export type ProjectCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type ProjectCover = ProjectCoverFormat & {
  id: number;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: ProjectCoverFormat;
    small: ProjectCoverFormat;
    medium: ProjectCoverFormat;
    large: ProjectCoverFormat;
  };
};

export type ProjectData = {
  id: number;
  title: string;
  description: string;
  feats01: string;
  feats02: string;
  feats03: string;
  url: string;
  cover: ProjectCover;
};
