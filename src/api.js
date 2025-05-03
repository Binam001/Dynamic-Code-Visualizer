import axios from "axios"
import { LANGUAGE_VERSIONS } from "./constraints"

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
})

export const executeCode = async (selectedLanguage, sourceCode) => {
  const response = await API.post("/execute", {
    "language": selectedLanguage,
    "version": LANGUAGE_VERSIONS[selectedLanguage],
    "files": [
      {
        "content": sourceCode,
      }
    ],
  })
  return response.data;
}