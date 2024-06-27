const buildURL = (baseURL, options) => {
  const params = new URLSearchParams();
  if (options) {
    Object.keys(options).forEach((key) => {
      if (options[key]) {
        params.append(key, options[key]);
      }
    });
    return `${baseURL}?${params.toString()}`;
  } else {
    return baseURL;
  }
};

export { buildURL };
