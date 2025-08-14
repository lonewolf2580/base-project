import React from 'react'
import FooterMenu from '../components/FooterMenu'
import GroupCard from '../components/GroupCard'
import CreateGroupModal from '../components/CreateGroupModal'
import Header from '../components/Header'

export default function Groups() {
  return (
    <div className='p-4'>
        <Header />
      <h1 className='text-2xl font-bold mb-4'>Create and Manage Groups</h1>

      <div className="mb-4">
        <CreateGroupModal />
      </div>

      <div className="">
        <h1 className="text-2xl font-bold mb-4">Your Groups</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32'>
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </div>
      </div>

      <FooterMenu />
    </div>
  )
}
