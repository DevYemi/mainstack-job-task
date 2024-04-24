import FloatingAsideNav from "./_local-components/FloatingAsideNav";
import FloatingHeaderSection from "./_local-components/FloatingHeaderSection";
import TransactionsSection from "./_local-components/TransactionsSection";
import WalletsStatsSections from "./_local-components/WalletsStatsSections";


export default function HomePage() {
  return (
    <div style={{
      maxWidth: "144rem",
      margin: "auto",
      position: "relative",
    }}>
      <FloatingHeaderSection />
      <FloatingAsideNav />
      <main style={{
        maxWidth: "115.9rem",
        margin: "6.5rem auto",
        padding: "1.6rem",
      }}>
        <WalletsStatsSections />
        <TransactionsSection />
      </main>
    </div>
  );
}
