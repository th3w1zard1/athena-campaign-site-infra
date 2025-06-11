import { FC } from 'react';

const DonatePage: FC = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Support Our Campaign</h1>

      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Your contribution helps us build a stronger community. Every donation, no matter the size,
        makes a difference in our ability to reach voters and implement our vision.
      </p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Make a Donation</h2>
          <p className="mt-2">Secure online donations processed through ActBlue</p>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            {/* Donation Amount Selection */}
            <div>
              <label className="block font-medium mb-3">Select Donation Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <div key={amount}>
                    <input
                      type="radio"
                      id={`amount-${amount}`}
                      name="donationAmount"
                      value={amount}
                      className="sr-only"
                    />
                    <label
                      htmlFor={`amount-${amount}`}
                      className="block w-full text-center py-3 border rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:bg-blue-100 peer-checked:border-blue-500"
                    >
                      ${amount}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label htmlFor="custom-amount" className="block font-medium mb-2">Or Enter Custom Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="number"
                    id="custom-amount"
                    min="1"
                    className="block w-full pl-8 pr-4 py-3 border rounded-lg"
                    placeholder="Other amount"
                  />
                </div>
              </div>
            </div>

            {/* Donation Frequency */}
            <div>
              <label className="block font-medium mb-3">Donation Frequency</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="radio"
                    id="one-time"
                    name="donationFrequency"
                    value="one-time"
                    className="sr-only"
                    defaultChecked
                  />
                  <label
                    htmlFor="one-time"
                    className="block w-full text-center py-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    One-time
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="monthly"
                    name="donationFrequency"
                    value="monthly"
                    className="sr-only"
                  />
                  <label
                    htmlFor="monthly"
                    className="block w-full text-center py-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    Monthly
                  </label>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block mb-1">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block mb-1">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="occupation" className="block mb-1">Occupation</label>
              <input
                type="text"
                id="occupation"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Required by campaign finance laws</p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
            >
              Complete Donation
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Contributions are not tax deductible. By law, the maximum amount an individual may
              contribute is $2,900 per election. All fields required.
            </p>
          </form>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Other Ways to Support</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4">
            If you prefer to donate by check, please make checks payable to &quot;Athena for Eugene&quot; and mail to:
          </p>
          <p className="font-medium">
            Athena for Eugene<br />
            PO Box 12345<br />
            Eugene, OR 97401
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage; 