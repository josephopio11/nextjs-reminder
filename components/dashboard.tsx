"use client";

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Frame,
  GitBranch,
  Github,
  Home,
  LayoutPanelLeft,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

export function DashboardComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        >
          <Frame className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="text-primary font-bold">
            Projects
          </Link>
          <Link href="#" className="text-muted-foreground">
            Deployments
          </Link>
          <Link href="#" className="text-muted-foreground">
            Analytics
          </Link>
          <Link href="#" className="text-muted-foreground">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg?height=32&width=32"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <form className="flex-1">
            <Input placeholder="Search projects..." />
          </form>
          <Button>Add New</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <ProjectCard
            title="www"
            description="example.com"
            icon={<Home className="w-8 h-8" />}
            commitMessage="feat: update color scheme"
            timeAgo="3h ago"
            branch="main"
          />
          <ProjectCard
            title="docs"
            description="docs.example.com"
            icon={<BookOpen className="w-8 h-8" />}
            commitMessage="docs: add API reference"
            timeAgo="1 day ago"
            branch="main"
          />
          <ProjectCard
            title="app"
            description="app.example.com"
            icon={<LayoutPanelLeft className="w-8 h-8" />}
            commitMessage="fix: resolve login issues"
            timeAgo="2 days ago"
            branch="develop"
          />
        </div>
      </main>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  commitMessage: string;
  timeAgo: string;
  branch: string;
};

function ProjectCard({
  title,
  description,
  icon,
  commitMessage,
  timeAgo,
  branch,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div className="grid gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <MoreHorizontal className="w-4 h-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Project</DropdownMenuItem>
            <DropdownMenuItem>View Deployments</DropdownMenuItem>
            <DropdownMenuItem>Edit Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="text-sm font-semibold">{commitMessage}</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span className="text-muted-foreground">{timeAgo}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch className="w-4 h-4" />
            <span className="text-muted-foreground">{branch}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
