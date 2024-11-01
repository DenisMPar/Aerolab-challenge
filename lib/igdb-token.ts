export interface AccessDataType {
  access_token: string;
  expires_in: number;
  token_type: string;
  timestamp: number;
}
let accessData: AccessDataType | null = null;

export function getAccessData() {
  return accessData;
}

export function setAccessData(token: AccessDataType) {
  accessData = token;
}
