function load({ url, route }) {
  const ids = url.searchParams.get("ids");
  return { ids };
}
export {
  load
};
