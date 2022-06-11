import "./styles.css";

export default function UserCard({ name, value }) {
  return (
    <div className="user-card">
      <div>
        <p>CryptoName: {name},</p>
        <p>
          1 BTC : {value} {name}{" "}
        </p>
      </div>
    </div>
  );
}
