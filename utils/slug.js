const slugGenerator = (title) => {
  let slug = title.toLowerCase();
  slug = slug.replace(/\s+/g, "-");
  slug = slug.replace(/[^\w\-]+/g, "");
  slug = slug.replace(/\-\-+/g, "-");
  slug = slug.replace(/^-+/, "").replace(/-+$/, "");
  return slug;
};

export { slugGenerator };
