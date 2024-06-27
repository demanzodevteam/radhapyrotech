import { api_url } from '@/helpers/constants';

export async function getCategories({
  categoryPage,
  categoryEntries,
  categorySearch,
}) {
  try {
    if (!api_url) return [];

    // let res;

    // res = await fetch(`${api_url}/categories/read`);

    // if (categoryPage !== 1) {
    //   console.log(categoryPage);
    //   res = await fetch(
    //     `${api_url}/categories/read?categorypage=${categoryPage}`
    //   );
    // }
    // if (categorySearch.length >= 3 && categorySearch !== '') {
    //   res = await fetch(
    //     `${api_url}/categories/read?categorysearch=${categorySearch}`
    //   );
    // }

    // if (categoryEntries !== 'default') {
    //   res = await fetch(
    //     `${api_url}/categories/read?categoryentries=${categoryEntries}`
    //   );
    // }

    const res = await fetch(
      `${api_url}/categories/read?categoryentries=${categoryEntries}&categorysearch=${categorySearch}&categorypage=${categoryPage}`
    );

    if (!res.ok) {
      // check res is ok
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed To Fetch Categories');
    }

    if (res.status === 400) {
      throw new Error('Failed To Fetch Categories');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
