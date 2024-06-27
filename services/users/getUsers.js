import { api_url } from '@/helpers/constants';

export async function getUsers({ userPage, userbySearch, userShowEntries }) {
  try {
    if (!api_url) return [];

    // console.log(typeof userPage, userbySearch, userShowEntries);

    // let res;

    // res = await fetch(`${api_url}/user/read`);

    // if (userPage) {
    //   res = await fetch(`${api_url}/user/read?userpage=${userPage}`);
    // }

    // if (userbySearch !== '') {
    //   res = await fetch(`${api_url}/user/read?userbysearch=${userbySearch}`);
    // }

    // if (userShowEntries) {
    //   res = await fetch(`${api_url}/user/read?userentries=${userShowEntries}`);
    // }

    const res = await fetch(
      `${api_url}/user/read?userentries=${userShowEntries}&userbysearch=${userbySearch}&userpage=${userPage}`
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
