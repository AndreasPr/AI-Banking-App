import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'Andreas', lastName: 'Priftis', email: 'andreas@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user = {loggedIn ?.firstName || "Guest"} subtext="Access and manage your account and trasactions efficiently"/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance = {1250.35}/>
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.45}, {currentBalance: 500.45}]}/>
    </section>
  )
}

export default Home