import Wine from '../../components/Wine/Wine';
import Link from "next/link";
import prisma from '../../../lib/prisma';

async function getWines() {
    const wines = await prisma.wine.findMany({})
    return wines;
}

export default async function Home() {
    const wines = await getWines();
    return (
        <div className='container'>
            <Link href='/create-wine'>
                <button className="bg-indigo-800 hover:bg-blue-700 text-white font-bold my-6 py-2 px-4 rounded">
                    Create
                </button>
            </Link>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 ">
                <table>
                    <thead className='bg-indigo-800 text-white'>
                        <tr className='h-10'>
                            <th scope="col" className="p-3 border-b">Id</th>
                            <th scope="col" className="p-3 border-b">Name</th>
                            <th scope="col" className="p-3 border-b">Year</th>
                            <th scope="col" className="p-3 border-b">Type</th>
                            <th scope="col" className="p-3 border-b">Varietal</th>
                            <th scope="col" className="p-3 border-b">Rating</th>
                            <th scope="col" className="p-3 border-b">Consumed</th>
                            <th scope="col" className="p-3 border-b">Date Consumed</th>
                            <th scope="col" className="p-3 border-b"><span className="t">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            wines.map((wine) => {
                                let consumed;
                                {
                                    wine.consumed ? (consumed = "Yes") : (consumed = "No")
                                }
                                return (
                                    <Wine key={wine.id} id={wine.id} name={wine.name} year={wine.year} type={wine.type} varietal={wine.varietal} rating={wine.rating} consumed={consumed} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
