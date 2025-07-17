import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
  roomId: string;
}
export const Room = () => {
  const params = useParams()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }
  return (
    <div>rooms</div>
  )
}
