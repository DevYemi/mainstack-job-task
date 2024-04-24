import FloatingAsideNav from "./_local-components/FloatingAsideNav";
import FloatingHeaderSection from "./_local-components/FloatingHeaderSection";
import TransactionsSection from "./_local-components/TransactionsSection";
import WalletsStatsSections from "./_local-components/WalletsStatsSections";


/* 
- Question: Why Inline Styles were used here ?.

- Reason: using `<chaka.tag />` convention which enables you have an element that you can pass chakra ui props forces
you to turn the component to where it's being used to a client component. Converting youe whole page.tsx file will make you lose the whole benefit of serverComponents

So personalily i like keeping my layout and page file as server component and use modular client component when the need arise.
*/
export default async function HomePage() {
  return (
    <div
      data-testid="homePage-testId"
      style={{
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
