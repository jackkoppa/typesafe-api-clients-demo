import { CandidateControllerApi } from "@/api/candidate"
import { DefaultApi as TimesMoviesApi } from "@/api/timesmovies"

const timesApiKey = 'SjfV3SGitVtzcEt4HCh4fnwfQlCGSuH2'

export const candidateApi = new CandidateControllerApi()
export const timesMoviesApi = new TimesMoviesApi({
    apiKey: timesApiKey
})
