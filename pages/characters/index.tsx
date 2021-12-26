import Link from 'next/link';
import Header from '../../components/Header';

const CHARACTERS = [
  'Korilakkuma',
  'Kiroitori',
  'Moo Moo',
  'Ducky',
  'Piggly',
  'Hoot',
  'Twinkle',
  'Pengu',
  'Jello',
  'Teddy Bear Snuffles',
  'Lotso',
  'Breadkuma',
  'Avocuddle',
  'Penguin',
  'Ice Bear',
];

export default function Characters() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="container mx-auto">
        <Header />
        <main className="mt-8 grid grid-cols-2">
          {CHARACTERS.map((characterName) => (
            <Link href="#">
              <a className="text-white hover:text-blue-400">{characterName}</a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
