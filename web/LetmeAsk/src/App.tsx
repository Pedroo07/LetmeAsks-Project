import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CreateRoom } from "@/pages/create-room"
import { Room } from "@/pages/room"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const queryClient = new QueryClient()

export const App = () => {

  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route index element={<CreateRoom />} />
      <Route  element={<Room />} path="/room:roomId"/>
    </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
}

