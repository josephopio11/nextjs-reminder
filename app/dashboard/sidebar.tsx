import { cn } from "@/lib/utils";
import {
  BarChart,
  CreditCard,
  Layers,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* <aside
        className={cn("bg-gray-800 text-white w-64 min-h-screen p-4", 
        //   isSidebarOpen ? "block" : "hidden"
         ,"md:block")}
      > */}
      <aside
        className={cn(
          "bg-gray-800 text-white w-64 min-h-screen p-4",
          "md:block"
        )}
      >
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center space-x-2 text-xl font-bold mb-6"
          >
            <Layers className="w-8 h-8" />
            <span>Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <BarChart className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Orders</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <Users className="w-5 h-5" />
            <span>Customers</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <CreditCard className="w-5 h-5" />
            <span>Transactions</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
