export const orderBy = data => {
  if (!data.every(item => item.order)) return data
  return data.sort((prev, next) => prev.order - next.order)
}