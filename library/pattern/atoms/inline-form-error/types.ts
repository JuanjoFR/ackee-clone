import { MultipleFieldErrors } from "react-hook-form"

export interface Properties {
  data: { message: string; messages?: MultipleFieldErrors | undefined }
}
