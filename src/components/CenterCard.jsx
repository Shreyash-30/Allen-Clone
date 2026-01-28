export default function CenterCard({ img, alt, city, state }) {
  return (
    <div className="w-[250px] h-[250px] bg-white border shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
      
      <img
        src={img}
        alt={alt}
        className="w-full h-[160px] object-cover"
      />

      <div className="p-3 flex flex-col gap-1">
        <p className="font-semibold text-lg">{city}</p>
        <p className="text-sm text-gray-500">{state}</p>
      </div>

    </div>
  );
}
