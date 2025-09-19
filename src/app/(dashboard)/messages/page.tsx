import { Search, Grid3X3, Users, Briefcase, UserCheck, MessageSquare, Settings, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MessagingApp() {
  const conversations = [
    {
      id: 1,
      name: "Chaitanya Roy",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      time: "6h ago",
      avatar: "/man-with-sunglasses-brown-jacket.jpg",
    },
    {
      id: 2,
      name: "Chaitanya Roy",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      time: "6h ago",
      avatar: "/man-with-dark-hair-red-shirt.jpg",
    },
    {
      id: 3,
      name: "Chaitanya Roy",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      time: "6h ago",
      avatar: "/man-with-dark-hair-red-shirt.jpg",
    },
    {
      id: 4,
      name: "Chaitanya Roy",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      time: "6h ago",
      avatar: "/man-with-dark-hair-red-shirt.jpg",
    },
    {
      id: 5,
      name: "Chaitanya Roy",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      time: "6h ago",
      avatar: "/man-with-dark-hair-red-shirt.jpg",
    },
  ]

  const chatMessages = [
    {
      id: 1,
      sender: "Chaitanya Roy",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11:00 AM",
      avatar: "/man-with-sunglasses-brown-jacket.jpg",
    },
    {
      id: 2,
      sender: "Ritik Singh",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11:08 AM",
      avatar: "/man-with-light-hair-casual-shirt.jpg",
    },
  ]

  return (
    <div>  
      
    </div>
  )
}
