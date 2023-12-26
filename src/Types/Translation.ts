import type languages from 'Assets/languages.json'

export interface TranslationRequestParams {
  langfrom: keyof typeof languages
  langto: keyof typeof languages
  q: string
}

export interface TranslationResponse {
  matches: [
    {
      'create-date': string
      'created-by': string
      id: string
      'last-update-date': string
      'last-updated-by': string
      match: string
      quality: string
      reference: string
      segment: string
      subject: string
      translation: string
      'usage-count': string
    }
  ]
  responseData: {
    translatedText: string
  }
  responseDetails: string
  responseStatus: string
}
