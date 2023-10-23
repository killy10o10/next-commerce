import {UserButton} from "@clerk/nextjs"
import MainNav from "@/components/MainNav"
import StoreSwitcher from "@/components/StoreSwitcher"

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-2">
        <StoreSwitcher />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
