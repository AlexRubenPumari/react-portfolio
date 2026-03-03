export const decode = {
  base64(content: string): string {
    return atob(content)
  },

  utf8(content: string): string {
    try {
      return decodeURIComponent(content)
    } catch {
      console.log("fdfd")
      return content
    }
  }
}
