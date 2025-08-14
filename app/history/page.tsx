import React from 'react'
import FooterMenu from '../components/FooterMenu'
import TransactionList from '../components/TransactionList'
import Header from '../components/Header'

export default function History() {
  return (
    <div className='p-4'>
        <Header />
      <h1 className='text-2xl font-bold'>Transaction History</h1>

      <TransactionList />

      <FooterMenu />
    </div>
  )
}
