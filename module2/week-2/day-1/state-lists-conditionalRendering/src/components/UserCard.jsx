export default function UserCard({ user }) {
  return (
    <div>
      <img src={user.image} alt="user-image" style={{ width: "30vw" }} />
      <h1>{user.name}</h1>

      <p>is he a cool guy? {user.bio.includes("cool") && <span>yep</span>}</p>
    </div>
  )
}
