import CardColumn from './CardColumn';
function CardRow({ cardItems }) {
  return (
    <section className="mb-4 ">
      <section className=" m d:grid-cols-2  grid grid-cols-1 gap-x-5 lg:grid-cols-4">
        {cardItems.map((item) => (
          <CardColumn item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}

export default CardRow;
