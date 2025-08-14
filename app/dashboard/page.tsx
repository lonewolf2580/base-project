import React from 'react'
import FooterMenu from '../components/FooterMenu'
import StatsCard from '../components/StatsCard'
import TransactionList from '../components/TransactionList'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
        <Header />

        <StatsCard />

        <TransactionList limit={5} />

        <FooterMenu />
    </div>
  )
}
