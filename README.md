# RoundUp – Digital Esusu on Base + Farcaster

## 1. Problem Statement
Across Africa and many other parts of the world, people rely on rotating savings and credit associations (*Esusu*, *Ajo*, *Thrift*) for financial security. These groups help members save, access lump sums, and build trust within communities.

However, the current system faces challenges:
- Manual cash handling → risk of theft or mismanagement.
- Trust issues → some collectors run away with funds.
- No transparent record of contributions and payouts.
- Difficult coordination across members in different locations.

---

## 2. Our Solution – RoundUp
**RoundUp** is a **trustless, on-chain rotating savings platform** where contributions and payouts are managed by smart contracts on **Base**, and group coordination happens via **Farcaster**.

We take the traditional Esusu model and make it:
- **Secure** – funds locked in smart contracts until payout.
- **Transparent** – everyone can see transactions on-chain.
- **Borderless** – members can participate from anywhere.
- **Coordinated** – group updates and payment confirmations via Farcaster.

---

## 3. How It Works

### Step 1: Create a Group
- A user opens the **RoundUp Farcaster Frame**.
- They enter:
  - Group name & description
  - Number of members & wallet addresses
  - Contribution amount (in USDC)
  - Payout interval (weekly/monthly)
  - Payout order
- The smart contract is deployed for this group with the rules locked in.

### Step 2: Join & Contribute
- Members join the group through the Farcaster Frame link.
- Each payout cycle:
  - Members deposit their contribution in USDC via Base.
  - The smart contract records the payment and locks funds until payout date.

### Step 3: Automated Payouts
- On payout day, the smart contract automatically sends the pooled amount to the member scheduled for that round.
- Continues until all members have received their payout once.

### Step 4: Social Coordination on Farcaster
- Each group has a dedicated **Farcaster feed**:
  - Reminders for upcoming contributions
  - Payment confirmation posts
  - Payout announcements

---

## 4. Core Features

| Feature                 | Description |
|-------------------------|-------------|
| **Smart Contract Security** | Rules are enforced by code — no middleman. |
| **Stablecoin Payments**     | USDC on Base for stability. |
| **Automated Payouts**       | No delays, no manual handling. |
| **Farcaster Integration**   | Social interaction, group management, and payment reminders inside Farcaster. |
| **On-Chain Transparency**   | Public record of all contributions and payouts. |
| **Low Fees**                | Base network ensures cheap, fast transactions. |

---

## 5. Tech Stack
- **Blockchain**: Solidity smart contracts on Base (Hardhat or Foundry)
- **Frontend & Frames**: Next.js + Farcaster Frames SDK
- **Wallet Connection**: WalletConnect / RainbowKit
- **Stablecoin Payments**: USDC on Base
- **Deployment**: Vercel (frontend) + Base mainnet/testnet for contracts

---

## 6. Example Use Case
A 10-person group in Nigeria creates a RoundUp group.  
Each member contributes **$50 USDC** per month.  
- Month 1 → **Member 1** receives $500 USDC directly from the smart contract.  
- Month 2 → **Member 2** receives $500 USDC, and so on until all members have been paid.  

All activity is visible and coordinated via Farcaster, with zero chance of a member running away with funds.

---

## 7. Why This Will Stand Out in the Hackathon
- **Real-world impact** → Tackles financial inclusion head-on.
- **Cultural relevance** → Brings a traditional savings method to Web3.
- **Social + Finance synergy** → Base provides secure transactions, Farcaster keeps members engaged.
- **Scalable** → Works for local groups, global communities, NGOs, and co-ops.


## 8. Project Structure

```
src/
  app/
    page.tsx                # zkLogin landing page
    dashboard/
      page.tsx              # Home page
    groups/
      page.tsx              # Groups list + create group modal
    history/
      page.tsx              # Transaction history
    layout.tsx              # Shared dashboard layout with footer
  components/
    FooterMenu.tsx          # Bottom navigation
    StatsCard.tsx           # For Home stats
    TransactionList.tsx     # Reusable list for Home/History
    GroupCard.tsx           # For group listings
    CreateGroupModal.tsx    # Modal for creating groups
  lib/
    auth.ts                 # zkLogin / SIWE helpers
    contracts.ts            # Ethers.js contract instances
    api.ts                  # API calls to backend
  pages/api/
    auth/                   # Auth endpoints
    groups/                 # Group endpoints
    transactions/           # Transactions API
```

## Features

- **Smart Contract Security**: Rules are enforced by code — no middleman.
- **Stablecoin Payments**: USDC on Base for stability.
- **Automated Payouts**: No delays, no manual handling.
- **Farcaster Integration**: Social interaction, group management, and payment reminders inside Farcaster.
- **On-Chain Transparency**: Public record of all contributions and payouts.
- **Low Fees**: Base network ensures cheap, fast transactions.

## Home

- Dashboard with stats cards:
  - Total Contributions
  - Total Received
  - Active Groups Count
  - Latest 5 Transactions (incoming/outgoing USDC)

## Groups

- Create Group button opens modal:
  - Group name
  - Members’ wallet addresses
  - Contribution amount
  - Payout frequency
- My Groups list:
  - Group name
  - Status (Active / Completed)
  - Members count
  - Next payout date

## History

- List of all transactions:
  - Date
  - Amount
  - Type (Contribution / Received)
  - Group name
- Filter: Contributions | Received
