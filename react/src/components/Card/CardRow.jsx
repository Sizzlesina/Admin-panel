import CardColumn from './CardColumn';
function CardRow({ cardItems }) {
  return (
    <section>
      <section className="grid grid-cols-1  gap-x-5 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item) => (
          <CardColumn item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}

export default CardRow;
