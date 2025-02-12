import { AppShell } from "@mantine/core";
import BlogPostList from "./components/BlogPostList";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav/TopNav";

export default function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <TopNav />
      </AppShell.Header>
      <AppShell.Navbar mt="sm">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <BlogPostList />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
