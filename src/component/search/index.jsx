import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';

const Search = () => {
    const [active, setActive] = useState("номеру")

  return (
    <section className="mt-20 ">
      <div className="container">
        <div className="flex items-center gap-5 mb-6">
          <button onClick={() => setActive("номеру")} className="py-2 px-6 bg-gray rounded-md text-xl font-normal">
            Поиск по номеру
          </button>
          <button onClick={() => setActive("марке")} className="py-2 px-6 text-xl font-normal">
            Поиск по марке
          </button>
          <button onClick={() => setActive("товара")} className="py-2 px-6 text-xl font-normal">
            Поиск по названию товара
          </button>
        </div>

        <form className=" w-full flex items-center gap-2">
          <Input
            size="lg"
            label={`Введите ${active} `}
            className='py-4'
          />

          <Button variant='gradient' type='submit' className='bg-primary rounded-none py-[14px] px-10'>искать</Button>
        </form>
      </div>
    </section>
  );
};

export default Search;
