import React from 'react'
import Button from './Button';

function User({ user }) {
  const { id, cash, credit } = user;

  const onDeposit = () => {
    console.log("user clicked deposit");
  }

  const onWithdraw = () => {
    console.log("user clicked deposit");
  }

  const onTransfer = () => {
    console.log("user clicked deposit");
  }

  const onSetCredit = () => {
    console.log("user clicked deposit");
  }


  return (
    <div className="user">
      <span className="userId">Passport:{id}</span>
      <span className="userCash">Cash:{cash}</span>
      <span className="userCredit"> Credit:{credit}</span>
      <div className="actions">
        <Button action="Deposit" onClick={onDeposit} />
        <Button action="Withdraw" onClick={onWithdraw} />
        <Button action="Transfer" onClick={onTransfer} />
        <Button action="Set Credit" onClick={onSetCredit} />
      </div>
    </div>
  )
}

export default User
