import React from "react";

const Carts = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment done!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item removed!");
  };
  return (
    <div className="p-10 max-w-7xl mx-auto border rounded-md border-gray-400 mt-10">
      <h1 className="text-2xl font-medium">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-2xl text-center font-semibold text-gray-500">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border-none bg-[#F9FAFC] rounded-lg p-2"
                key={item.id}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      className="h-20 w-20 object-contain rounded-full "
                      src={item.icon}
                      alt=""
                    />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <div className="text-md font-light">${item.price}</div>
                  </div>
                </div>

                
                <button
                    onClick={() => handleDelete(item)}
                    className="rounded-full btn bg-transparent border-none text-red-500"
                  >
                    Remove
                  </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between  rounded-lg p-3">
            <div className="text-md font-light">Total</div>

            <div className="text-2xl font-semibold">
              ${totalPrice}
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Carts;
