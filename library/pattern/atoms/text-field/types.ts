export interface Properties
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  error: boolean
  isPassword?: boolean
}
