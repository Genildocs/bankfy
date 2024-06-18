import HeaderBox from '@/components/HeaderBox';
import TotalBalancebox from '@/components/TotalBalancebox';

export default function Home() {
  const loggedIn = { firstName: 'John' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your bank accounts"
          />
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
}
