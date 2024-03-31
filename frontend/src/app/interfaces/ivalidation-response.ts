export interface IValidationResponse {
  rawtext: string;
  badwordcount: { [key: string]: number };
  "safety-score": number;
}
