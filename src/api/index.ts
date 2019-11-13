import { DefaultApi as SpotifyApi } from "@/api/spotify";
import { DefaultApi as OmbdApi } from "@/api/omdb";
import { FinancialApi } from "@/api/fecgov"

export const fecApiKey = 'egOCr35thUijs4P0fmyBLCMd7tRNa488YEnVUOFi'

export const spotifyApi = new SpotifyApi({});
export const ombdApi = new OmbdApi({});
export const financialApi = new FinancialApi({
    apiKey: fecApiKey
});
