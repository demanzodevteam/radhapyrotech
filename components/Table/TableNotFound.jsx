function TableNotFound({ message }) {
  return (
    <tbody>
      <tr className='text-center h-8 flex justify-center items-center p-16 w-full'>
        <td colSpan={10} className="flex-grow">{message}</td>
      </tr>
    </tbody>
  );
}

export { TableNotFound };
