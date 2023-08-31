const BillAmount = (props) => {
  const { bill, setBill } = props
  	return (
			<div>
				<label
					htmlFor="bill"
					className="block font-light leading-6 text-[x-large]"
				>
					Bill Total
				</label>

				<div className="relative mt-2 round-md shadow-sm">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<spn className="text-gray-500 sm:text-sm"> $ </spn>
					</div>

					<input
         		type="number"
          	name="bill"
          	id="bill"
          	className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          	placeholder="0.00"
          	aria-describedby="bill-currency"
          	value={bill}
          	onChange={(e) => setBill(e.target.value)}
        	/>
				</div>

			</div>
  	)
};

export default BillAmount