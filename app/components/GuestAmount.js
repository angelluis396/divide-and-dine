import { UsersIcon } from '@heroicons/react/20/solid';

const GuestAmount = ({ guests, setGuests }) => {
  return (
		<div>
			<label
				htmlFor='guests'
				className='block leading-6 text-[x-large]'
			>
				Number of Guests
			</label>
			<div className='relative mt-2 flex flex-grow items-stretch focs-within:z-10'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<UsersIcon className='h-5 w-5 text-gray-400 aria-hidden=true' />
				</div>

				<input
          type="number"
          name="guests"
          id="guests"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          placeholder="0"
          aria-describedby="number-of-guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
			</div>
		</div>
  )
}

export default GuestAmount