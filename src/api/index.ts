import { DefaultApi as SpotifyApi } from "@/api/spotify";
import { DefaultApi as OmbdApi } from "@/api/omdb";
import { CandidateControllerApi } from "@/api/custom"

// export const fecApiKey = 'egOCr35thUijs4P0fmyBLCMd7tRNa488YEnVUOFi'

export const spotifyApi = new SpotifyApi();
export const ombdApi = new OmbdApi();

export const customCandidateApi = new CandidateControllerApi()
