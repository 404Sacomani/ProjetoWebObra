import React from 'react';

function CardHome({ title, slug, desc, image, alt, size = 'default' }) {

  const headerClasses = size === 'large'
    ? 'lg:col-span-2 bg-slate-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row'
    : 'bg-slate-900 rounded-lg shadow-lg overflow-hidden';

  return (
    <>
      <div className={`hover:-translate-y-2 transition-all hover:shadow-lg hover:shadow-slate-500/20 duration-400 ${headerClasses}`}>
        {
          size === 'large' ? (
            <div className="flex flex-col md:flex-row">
              <img alt={alt} className="w-full md:w-1/2 h-64 md:h-auto object-cover" src={image} />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-sm text-amber-400 font-semibold">MAIS RECENTE</span>
                  <h3 className="text-2xl font-bold text-slate-200 mt-2 mb-2">{title}</h3>
                  <p className="text-slate-400 mb-4">{desc}</p>
                </div>
                <a className="bg-amber-500 hover:bg-amber-600 text-slate-200 font-bold py-2 px-4 rounded-md self-start" href={`/blog/${slug}`}>Leia Mais</a>
              </div>
            </div>
          ) : (<>
            <img alt={alt} className="w-full h-40 object-cover" src={image} />
            <div className="p-4">
              <h4 className="font-bold text-lg text-slate-200">{title}</h4>
              <a className="text-amber-400 hover:text-amber-500 font-semibold text-sm mt-2 inline-block" href={`/blog/${slug}`}>Leia Mais</a>
            </div >
          </>)
        }
      </div>
    </>
  );
}

export default CardHome;