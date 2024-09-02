export const resolveFormDataVariables = (FormData) => {
  let variables = {}
  for (const [key, value] of FormData.entries()) {
    variables = { ...variables, [key]: value }
  }

  return variables
}
