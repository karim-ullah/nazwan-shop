import Image from "next/image";

const TopCategories = () => {
  const categories = [
    { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Fashion", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Home & Garden", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Sports", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Toys", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Automotive", image: "https://via.placeholder.com/150" },
  ];
  return (
    <section>
      <h3 className="text-lg font-semibold font-inter text-center uppercase">
        Top Categories
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={150}
              height={150}
              className="w-40 h-35 object-cover"
            />
            <span className="mt-2 text-sm font-inter font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
