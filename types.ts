export enum AspectRatio {
  Square = "1:1",
  Portrait = "3:4",
  Landscape = "4:3",
  Wide = "16:9",
  Tall = "9:16",
  Cinematic = "21:9"
}

export enum ImageSize {
  OneK = "1K",
  TwoK = "2K",
  FourK = "4K"
}

export interface PsalmAnalysisState {
  isLoading: boolean;
  result: string | null;
  error: string | null;
}

export interface ImageGenerationState {
  isLoading: boolean;
  imageUrl: string | null;
  error: string | null;
}

export interface ImageEditState {
  isLoading: boolean;
  imageUrl: string | null;
  error: string | null;
}