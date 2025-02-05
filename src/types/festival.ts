export interface Artist {
  time: string;
  artist: string;
  duration: string;
  genre: string;
  description: string;
  image: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Stage {
  name: string;
  schedule: Artist[];
}
