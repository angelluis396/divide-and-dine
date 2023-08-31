const DisplayCard = (props) => {
  const { tipPerGuest, totalPerGuest, total, reset } = props
  const data = [
    {
      label: 'Tip Amount',
      value: tipPerGuest.toFixed(2),
    },
    {
      label: 'Total',
      value: totalPerGuest.toFixed(2),
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#68AEB8] p-5 lg:py-10">
      <div className="flex flex-col gap-y-8">
        {data.map((item, i) => (
          <div key={i} className="flex items-end justify-between">
            <div>
              <p className="text-[#f4efe4] lg:text-lg">{item.label}</p>
              <p className="text-xs font-light text-gray-300 lg:text-sm">
                / guest
              </p>
            </div>

            <div className="flex items-baseline gap-x-2">
              <span className="text-xl font-extralight text-[#f4efe4] lg:text-xl">
                $
              </span>
              <span className=" text-3xl font-medium text-[#f4efe4] lg:text-4xl">
                {item.value}
              </span>
            </div>            
          </div>
        ))}
        <div className="flex items-end justify-between">
          <p className=" font-medium text-[#f4efe4] lg:text-lg">
            Total Bill
          </p>

          <div className="flex items-baseline gap-x-2">
            <span className="text-xl font-extralight text-[#f4efe4] lg:text-2xl">
              $
            </span>
            <span className=" text-4xl font-medium text-[#f4efe4] lg:text-5xl">
              {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-14 w-full rounded-md bg-cyan-200 px-3.5 py-2.5 text-lg font-semibold uppercase tracking-wide text-cyan-700 shadow-sm hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={(e) => reset(e)}
      >
        Reset Tip
      </button>
    </div>
  )
}

export default DisplayCard