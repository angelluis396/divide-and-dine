'use client';
import BillAmount from './BillAmount'
import TipAmount from './TipAmount'
import GuestAmount from './GuestAmount'
import DisplayCard from './DisplayCard'
import { useState, useEffect } from 'react';

const TipForm = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [guests, setGuests] = useState(0);

    const [tipPerGuest, setTipPerGuest] = useState(0);
    const [totalPerGuest, setTotalPerGuest] = useState(0);
    const [total, setTotal] = useState(0);

    const handleResetTip = (e) => {
      e.preventDefault();
      setBill(0);
      setGuests(0);
      setTipPerGuest(0);
      setTotalPerGuest(0);
      setTotal(0);
    };
  
    useEffect(() => {
      if (bill && tip && guests) {
        const tipAmount = Number(bill) * Number(tip);
        const totalAmount = Number(bill) + tipAmount;
  
        setTipPerGuest(tipAmount / guests);
        setTotalPerGuest(totalAmount / guests);
        setTotal(totalAmount);
      }
    }, [bill, tip, guests]);

    return (
    <form className="mx-auto grid max-w-6xl gap-y-5 lg:grid-cols-2 lg:gap-x-8">
      <div className="flex flex-col gap-y-8 py-5 lg:px-5 lg:py-6">
        <BillAmount bill={bill} setBill={setBill} />
        <TipAmount setTip={setTip} />
        <GuestAmount guest={guests} setGuests={setGuests} />
      </div>

      <DisplayCard
        tipPerGuest={tipPerGuest}
        totalPerGuest={totalPerGuest}
        total={total}
        reset={handleResetTip}
      />
    </form>
    );
}

export default TipForm