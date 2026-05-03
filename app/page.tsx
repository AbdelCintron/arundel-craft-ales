import { client } from '@/sanity/lib/client'
import Image from 'next/image' // <-- IMPORT NEXT IMAGE COMPONENT
import AgeGate from './components/AgeGate'

const query = `*[_type == "beer"] {
  _id,
  name,
  style,
  abv,
  status,
  tastingNotes,
  "imageUrl": image.asset->url
}`

export default async function Home() {
  const beers = await client.fetch(query)

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-10 font-sans">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-amber-500 mb-4">Arundel Craft Ales</h1>
        <p className="text-xl text-neutral-400">Best Craft Ales in Town!</p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {beers.map((beer: any) => (
          <div key={beer._id} className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 shadow-lg hover:border-amber-500 transition-colors flex flex-col">
            
            {/* 2. ---> THE IMAGE BLOCK GOES RIGHT HERE <--- */}
            {beer.imageUrl && (
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden shrink-0 bg-neutral-900">
                <Image
                  src={beer.imageUrl}
                  alt={`${beer.name} photo`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* -------------------------------------------- */}
            
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-amber-400">{beer.name}</h2>
              <span className="text-xs font-bold uppercase tracking-wider bg-neutral-700 px-3 py-1 rounded-full">
                {beer.status}
              </span>
            </div>
            
            <p className="text-sm font-semibold text-neutral-300 mb-3">
              {beer.style} <span className="text-amber-600">|</span> {beer.abv}% ABV
            </p>
            
            <p className="text-neutral-400 leading-relaxed">
              {beer.tastingNotes}
            </p>
            
          </div>
        ))}
      </section>
    </main>
  )
}