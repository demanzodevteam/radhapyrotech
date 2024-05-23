import { api_url } from '@/helpers/constants';

export async function getCategories({
  categoryPage,
  categoryEntries,
  categorySearch,
}) {
  try {
    if (!api_url) return [];

    const res = await fetch(
      `${api_url}/categories/read?categoryentries=${categoryEntries}&categorysearch=${categorySearch}&categorypage=${categoryPage}`
    );

    // check res is ok
    if (!res.ok) {
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
