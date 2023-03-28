interface IActivityCard {
  activity: string;
  price: number;
}

export default function ActivityCard({ activity, price }: IActivityCard) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{activity}</h2>
        <span>{price * 10000}원</span>
      </div>
    </div>
  );
}