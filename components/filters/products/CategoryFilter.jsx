'use client';
import { Select } from '@/components/Elements/Select';
import { useRawcategories } from '@/components/hooks/categories/useRawCategories';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function CategoryFilter() {
  // retriving categories for form input
  const { data: categories, isLoading } = useRawcategories();

  // params setting
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentCategory = searchParams?.get('category') ?? 'all';

  function handleCategoryChange(e) {
    const params = new URLSearchParams(searchParams);

    params.set('category', e.target.value);
    params.set('page', 1);
    router.replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <Select
      filterName='category'
      defaultValue='all'
      loading={isLoading}
      onChange={handleCategoryChange}
      optionsData={categories}
      render={(category) => (
        <option
          key={category.id}
          value={String(category.category_name).replaceAll(' ', '-')}
        >
          {category.category_name}
        </option>
      )}
      value={currentCategory}
      firstLabel='All Categories'
      notfoundText='no categories found'
    />
  );
}

export { CategoryFilter };
