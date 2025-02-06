import { AppShell, Container } from "@mantine/core";
import BlogPostList from "./components/BlogPostList";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: true } }}
      padding="md"
    >
      <TopNav />
      <Sidebar />
      <Container size="xl">
        <BlogPostList />
      </Container>
      <Footer />
    </AppShell>
  );
}
