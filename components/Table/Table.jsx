function Table({ children }) {
  return (
    <section class='container mx-auto'>
      <div class='w-full mb-8 overflow-hidden rounded shadow dark:border dark:border-gray-600 border-solid'>
        <div class='w-full overflow-x-auto'>
          <table class='w-full'>{children}</table>
        </div>
      </div>
    </section>
  );
}

export { Table };
