export default function Post({ id, name, year, type, varietal, rating, consumed, dateConsumed }) {
    return (
        <tr key={id}>
            <td className="text-center p-3 border-b">{id}</td>
            <td className="text-center p-3 border-b">{name}</td>
            <td className="text-center p-3 border-b">{year}</td>
            <td className="text-center p-3 border-b">{type}</td>
            <td className="text-center p-3 border-b">{varietal}</td>
            <td className="text-center p-3 border-b">{rating}</td>
            <td className="text-center p-3 border-b">{consumed}</td>
            <td className="text-center p-3 border-b">{dateConsumed}</td>
            <td className="text-center p-3 border-b"><a href="#" className="">Edit</a></td>
        </tr>
    )
}