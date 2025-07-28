import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams(); // Get the dynamic part from URL

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;
