export let useFetch = async (url) => {
  return (
    await window.fetch(url, {
      headers: { csr: "1" },
    })
  ).json();
};
