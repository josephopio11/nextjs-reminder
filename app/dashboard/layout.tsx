"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bell,
  CreditCard,
  DollarSign,
  Home,
  Layers,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPageComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Layers className="h-6 w-6" />
            </Button>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <Input type="search" placeholder="Search..." className="h-10" />
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon">
                <Bell className="h-6 w-6" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="ml-3 relative rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="@johndoe"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Dashboard
            </h1>

            {/* Overview Section */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Chart Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChart className="h-[350px] w-full" />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>

            {/* Additional Sections */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest actions performed on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    Best selling items this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TopProducts />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function RecentSales() {
  return (
    <div className="space-y-8">
      {[
        {
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          sale: "+$1,999.00",
        },
        {
          name: "Jackson Lee",
          email: "jackson.lee@email.com",
          sale: "+$39.00",
        },
        {
          name: "Isabella Nguyen",
          email: "isabella.nguyen@email.com",
          sale: "+$299.00",
        },
        {
          name: "William Kim",
          email: "william.kim@email.com",
          sale: "+$99.00",
        },
        {
          name: "Sofia Davis",
          email: "sofia.davis@email.com",
          sale: "+$39.00",
        },
      ].map((sale, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`/placeholder.svg?height=32&width=32`}
              alt={sale.name}
            />
            <AvatarFallback>
              {sale.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.sale}</div>
        </div>
      ))}
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="space-y-8">
      {[
        { action: "Created new task", user: "John Doe", time: "2 hours ago" },
        {
          action: "Completed project",
          user: "Jane Smith",
          time: "5 hours ago",
        },
        {
          action: "Uploaded new files",
          user: "Mike Johnson",
          time: "Yesterday",
        },
        {
          action: "Deleted old records",
          user: "Emily Brown",
          time: "2 days ago",
        },
      ].map((activity, index) => (
        <div key={index} className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">by {activity.user}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopProducts() {
  return (
    <div className="space-y-8">
      {[
        { name: "Product A", sales: 1234, revenue: "$12,340" },
        { name: "Product B", sales: 836, revenue: "$8,360" },
        { name: "Product C", sales: 763, revenue: "$7,630" },
        { name: "Product D", sales: 539, revenue: "$5,390" },
      ].map((product, index) => (
        <div key={index} className="flex items-center">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <p className="text-sm text-muted-foreground">
              {product.sales} sales
            </p>
          </div>
          <div className="ml-auto font-medium">{product.revenue}</div>
        </div>
      ))}
    </div>
  );
}
