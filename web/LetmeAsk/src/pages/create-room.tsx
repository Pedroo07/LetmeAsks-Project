import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsResponse = Array<{
  id: string;
  name: string;
}>;

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/rooms");
      const data: GetRoomsResponse = await response.json();

      return data;
    },
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div>
        {data &&
          data?.map((room) => {
            return (
              <Link key={room.id} to={`/room/${room.id}`}>
                {room.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
